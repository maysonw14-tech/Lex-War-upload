
import React, { useState, useEffect, useMemo } from 'react';
import { UserMeta } from './types';
import RPGMode from './components/RPGMode';
// FIX: Library is not a default export, so we must use a named import. Or rather, Library.tsx was incomplete and had no export. I've fixed Library.tsx to have a default export. The import will now work. I am removing the old import for Library as it is unused in this component and was causing an error.
import ReviewPrompt from './components/ReviewPrompt';
import FeedbackModal from './components/FeedbackModal';

const App: React.FC = () => {
  const [userMeta, setUserMeta] = useState<UserMeta>(() => {
    try {
      const savedMeta = localStorage.getItem('linguaFlow_meta');
      let meta: UserMeta = savedMeta ? JSON.parse(savedMeta) : { 
          streak: 0, lastVisit: 0, totalXp: 0, searchCount: 0, hasSeenFeedbackPrompt: false,
          totalPronunciationChecks: 0, totalPronunciationScore: 0
      };
      
      if (meta.totalXp === undefined) meta.totalXp = 0;
      if (meta.searchCount === undefined) meta.searchCount = 0;
      if (meta.hasSeenFeedbackPrompt === undefined) meta.hasSeenFeedbackPrompt = false;
      if (meta.totalPronunciationChecks === undefined) meta.totalPronunciationChecks = 0;
      if (meta.totalPronunciationScore === undefined) meta.totalPronunciationScore = 0;

      const now = new Date();
      const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
      const msPerDay = 24 * 60 * 60 * 1000;

      if (meta.lastVisit === 0) {
          meta.streak = 1;
      } else if (meta.lastVisit < startOfToday - msPerDay) {
          meta.streak = 1; 
      } else if (meta.lastVisit < startOfToday) {
          meta.streak += 1;
      }
      meta.lastVisit = startOfToday;
      return meta;
    } catch (e) {
      return { 
        streak: 1, 
        lastVisit: new Date().setHours(0,0,0,0), 
        totalXp: 0, 
        searchCount: 0, 
        hasSeenFeedbackPrompt: false,
        totalPronunciationChecks: 0, 
        totalPronunciationScore: 0 
      };
    }
  });
  
  // Library State
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  
  useEffect(() => { localStorage.setItem('linguaFlow_meta', JSON.stringify(userMeta)); }, [userMeta]);

  // Derived Stats for RPG
  const stats = useMemo(() => {
    return { 
        streak: userMeta.streak, 
        discovered: 0, 
        mastered: 0, 
        neuralDecay: 0,
        accuracy: 100 
    };
  }, [userMeta]);

  const handleAddToLibrary = (word: string, category: string) => {
  };

  return (
    <div className="min-h-screen bg-black text-indigo-50 font-sans selection:bg-indigo-500/30 overflow-hidden">
        <RPGMode 
            onExit={() => {}} 
            initialLevel={Math.floor((userMeta.totalXp / 500) + 1)} 
            onAddToLibrary={handleAddToLibrary}
            onOpenLibrary={() => {}} 
            globalStats={stats}
        />
        
        {/* Global Modals */}
        <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} initialType="form" />
    </div>
  );
}

export default App;
