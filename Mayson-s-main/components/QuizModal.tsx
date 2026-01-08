
import React, { useState, useEffect, useRef } from 'react';
import { generateTestContent, evaluateUsage } from '../services/geminiService';
import { Loader2, ArrowRight, Sparkles, BrainCircuit, CheckCircle2, XCircle, MessageSquare, Shuffle } from 'lucide-react';
import { TestContent } from '../types';

interface TestModalProps {
  word: string;
  isOpen: boolean;
  onClose: () => void;
  onFail: () => void;
  onSuccess: () => void;
  currentReviewCount?: number;
}

type TestPhase = 'intro' | 'recall' | 'scramble' | 'application' | 'success' | 'failure';

const TestModal: React.FC<TestModalProps> = ({ word, isOpen, onClose, onFail, onSuccess, currentReviewCount = 0 }) => {
  const [phase, setPhase] = useState<TestPhase>('intro');
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<TestContent | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Phase 2: Recall
  const [recallInput, setRecallInput] = useState('');
  const [recallError, setRecallError] = useState(false);

  // Phase 3: Scramble (Syntax Alignment - Text Based)
  const [scrambleParts, setScrambleParts] = useState<string[]>([]);
  const [scrambleAnswer, setScrambleAnswer] = useState<string[]>([]);
  
  // Phase 4: Application
  const [appAnswer, setAppAnswer] = useState('');
  const [appFeedback, setAppFeedback] = useState('');

  const startReviewCountRef = useRef(currentReviewCount);

  useEffect(() => {
    if (isOpen) {
        setPhase('intro');
        setRecallInput('');
        setAppAnswer('');
        setAppFeedback('');
        setScrambleParts([]);
        setScrambleAnswer([]);
        setIsTransitioning(false);
        startReviewCountRef.current = currentReviewCount;
        loadContent();
    }
  }, [isOpen, word]);

  const loadContent = async () => {
    setLoading(true);
    try {
        const data = await generateTestContent(word);
        setContent(data);
        // Prepare scramble data early
        if (data.targetSentence) {
            const cleanSentence = data.targetSentence.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").toLowerCase();
            const parts = cleanSentence.split(/\s+/).sort(() => Math.random() - 0.5);
            setScrambleParts(parts);
        }
    } catch (e) {
        console.error(e);
        onClose();
    } finally {
        setLoading(false);
    }
  };

  const nextPhase = (next: TestPhase, delay = 0) => {
      setIsTransitioning(true);
      setTimeout(() => {
          setPhase(next);
          setIsTransitioning(false);
      }, delay || 500); 
  };

  // --- Phase 1: Intro ---
  const handleStart = () => {
    nextPhase('recall');
  };

  // --- Phase 2: Recall ---
  const handleRecallSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (recallInput.trim().toLowerCase() === word.toLowerCase()) {
        setRecallError(false);
        nextPhase('scramble', 300);
    } else {
        setRecallError(true);
        setTimeout(() => setRecallError(false), 500);
    }
  };

  // --- Phase 3: Scramble (Syntax Alignment) ---
  const handleScrambleSelect = (part: string, index: number) => {
      setScrambleAnswer(prev => [...prev, part]);
      setScrambleParts(prev => prev.filter((_, i) => i !== index));
  };

  const handleScrambleDeselect = (part: string, index: number) => {
      setScrambleAnswer(prev => prev.filter((_, i) => i !== index));
      setScrambleParts(prev => [...prev, part]);
  };

  const checkScramble = () => {
      if (!content) return;
      const constructed = scrambleAnswer.join(' ').toLowerCase();
      const target = content.targetSentence.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").toLowerCase();
      
      if (constructed === target) {
          nextPhase('application');
      } else {
          // Reset for retry or fail? Let's just shake/reset for now to be forgiving
          setScrambleAnswer([]);
          const cleanSentence = content.targetSentence.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").toLowerCase();
          setScrambleParts(cleanSentence.split(/\s+/).sort(() => Math.random() - 0.5));
      }
  };

  // --- Phase 4: Application ---
  const handleAppSubmit = async () => {
      if (!appAnswer.trim()) return;
      setLoading(true);
      try {
          const res = await evaluateUsage(word, content!.question, appAnswer);
          setLoading(false);
          if (res.passed) {
              nextPhase('success');
              onSuccess();
          } else {
              setAppFeedback(res.feedback);
              setTimeout(() => handleFailure(), 3000);
          }
      } catch (e) {
          console.error(e);
          setLoading(false);
      }
  };

  const handleFailure = () => {
      nextPhase('failure');
      onFail();
  };

  if (!isOpen) return null;

  const completedStep = Math.min(startReviewCountRef.current + 1, 3);
  const isMasteryAchieved = completedStep >= 3;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-md transition-opacity duration-500" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-black border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col min-h-[550px] transform transition-all duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5 relative z-20">
            <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span className="font-bold text-white tracking-wider">THE TEST: {word.toUpperCase()}</span>
            </div>
            <div className="flex gap-1">
                {['intro', 'recall', 'scramble', 'application'].map((p, i) => {
                    const steps = ['intro', 'recall', 'scramble', 'application', 'success'];
                    const currentIdx = steps.indexOf(phase);
                    const stepIdx = steps.indexOf(p);
                    return (
                        <div key={p} className={`w-12 h-1 rounded-full transition-colors duration-500 ${stepIdx <= currentIdx ? 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'bg-slate-800'}`} />
                    );
                })}
            </div>
        </div>

        {/* Content Area with Warp Transition */}
        <div className={`flex-1 p-8 flex flex-col justify-center items-center relative transition-all duration-500 ${isTransitioning ? 'scale-90 opacity-0 blur-sm' : 'scale-100 opacity-100 blur-0'}`}>
            
            {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm z-20 animate-fade-in">
                    <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mb-4" />
                    <span className="text-indigo-300 font-mono uppercase tracking-widest">Warping to Simulation...</span>
                </div>
            )}

            {/* Phase 1: The Hook */}
            {phase === 'intro' && content && (
                <div className="text-center space-y-8 animate-slide-up">
                    <div className="inline-flex p-4 rounded-full bg-indigo-500/10 mb-4 animate-float">
                        <BrainCircuit className="w-12 h-12 text-indigo-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Memory Anchor</h2>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-xl leading-relaxed text-slate-200 relative z-10">
                            {content.story.split(new RegExp(`(${word})`, 'gi')).map((part, i) => (
                                part.toLowerCase() === word.toLowerCase() 
                                ? <span key={i} className="text-indigo-400 font-bold px-1 bg-indigo-500/20 rounded shadow-[0_0_10px_rgba(99,102,241,0.2)]">{part}</span>
                                : <span key={i}>{part}</span>
                            ))}
                        </p>
                    </div>
                    <button 
                        onClick={handleStart}
                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-indigo-500/20"
                    >
                        I'm Ready <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            )}

            {/* Phase 2: The Void (Recall) */}
            {phase === 'recall' && content && (
                 <div className="w-full max-w-lg space-y-8 animate-fade-in">
                    <h2 className="text-2xl font-bold text-white text-center mb-8">Fill the Void</h2>
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center relative shadow-inner">
                        <p className="text-xl leading-relaxed text-slate-300 mb-8">
                            {content.story.split(new RegExp(`(${word})`, 'gi')).map((part, i) => (
                                part.toLowerCase() === word.toLowerCase() 
                                ? <span key={i} className="inline-block w-24 border-b-2 border-indigo-500/50 mx-1 align-bottom animate-pulse shadow-[0_4px_10px_rgba(99,102,241,0.2)]"></span>
                                : <span key={i}>{part}</span>
                            ))}
                        </p>
                        
                        <form onSubmit={handleRecallSubmit} className="relative flex flex-col items-center gap-4">
                            <input 
                                type="text" 
                                value={recallInput}
                                onChange={e => setRecallInput(e.target.value)}
                                className={`w-full bg-black/50 border-2 ${recallError ? 'border-rose-500 animate-shake' : 'border-indigo-500'} rounded-xl p-4 text-center text-2xl text-white focus:outline-none transition-all placeholder:text-slate-700 focus:shadow-[0_0_20px_rgba(99,102,241,0.2)]`}
                                placeholder="Type the missing word..."
                                autoFocus
                            />
                            <button 
                              type="submit"
                              className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors"
                            >
                              Confirm
                            </button>
                        </form>
                    </div>
                 </div>
            )}

            {/* Phase 3: Syntax Alignment (Scramble) */}
            {phase === 'scramble' && content && (
                <div className="w-full max-w-lg space-y-8 animate-fade-in">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-white mb-2">Syntax Alignment</h2>
                        <p className="text-slate-400 text-sm">Reconstruct the sentence.</p>
                    </div>

                    {/* Drop Zone */}
                    <div className="min-h-[80px] p-4 bg-black/40 rounded-xl border-2 border-dashed border-indigo-500/30 flex flex-wrap gap-2 items-center justify-center">
                        {scrambleAnswer.length === 0 && <span className="text-slate-600 text-sm italic">Tap words below...</span>}
                        {scrambleAnswer.map((part, idx) => (
                            <button key={idx} onClick={() => handleScrambleDeselect(part, idx)} className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg font-bold text-sm animate-pop-in hover:bg-rose-500 transition-colors">
                                {part}
                            </button>
                        ))}
                    </div>

                    {/* Source Zone */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        {scrambleParts.map((part, idx) => (
                            <button key={idx} onClick={() => handleScrambleSelect(part, idx)} className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium text-sm border border-white/5 transition-colors">
                                {part}
                            </button>
                        ))}
                    </div>

                    <button 
                        onClick={checkScramble} 
                        disabled={scrambleParts.length > 0} 
                        className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg"
                    >
                        Align Syntax
                    </button>
                </div>
            )}

            {/* Phase 4: Application */}
            {phase === 'application' && content && (
                <div className="w-full max-w-lg space-y-6 animate-fade-in">
                    <div className="text-center">
                         <h2 className="text-2xl font-bold text-white mb-2">Final Challenge</h2>
                         <p className="text-slate-400">Prove you understand the word.</p>
                    </div>
                    
                    <div className="bg-indigo-900/20 p-6 rounded-2xl border border-indigo-500/30 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                        <div className="flex gap-3">
                            <MessageSquare className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                            <p className="text-lg text-indigo-100 font-medium italic">{content.question}</p>
                        </div>
                    </div>

                    <div className="relative">
                        <textarea 
                            value={appAnswer}
                            onChange={e => setAppAnswer(e.target.value)}
                            className="w-full h-32 bg-black/40 border border-white/20 rounded-xl p-4 pb-14 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none transition-all focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                            placeholder="Your answer..."
                        />
                        <button 
                            onClick={handleAppSubmit}
                            disabled={!appAnswer.trim()}
                            className="absolute bottom-4 right-4 px-4 py-2 bg-indigo-600 rounded-lg text-white text-sm font-bold hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            Verify
                        </button>
                    </div>
                </div>
            )}

            {/* Success State */}
            {phase === 'success' && (
                <div className="text-center space-y-6 animate-fade-in relative z-50">
                    <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto border border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.5)] animate-float">
                        <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                    </div>
                    
                    <div className="space-y-2">
                        {isMasteryAchieved ? (
                            <>
                                <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200">MASTERED</h2>
                                <p className="text-emerald-300 font-mono text-sm tracking-widest uppercase">Ascension Complete</p>
                                <p className="text-slate-300 max-w-xs mx-auto mt-4">This word has now been permanently anchored in your memory constellation.</p>
                            </>
                        ) : (
                            <>
                                <h2 className="text-3xl font-black text-white">Review Complete</h2>
                                <p className="text-emerald-300 font-mono text-sm tracking-widest uppercase">
                                    Step {completedStep} of 3 Passed
                                </p>
                                <div className="flex gap-1 justify-center mt-2">
                                    {[1, 2, 3].map(step => (
                                        <div key={step} className={`w-8 h-1 rounded-full ${step <= completedStep ? 'bg-emerald-500' : 'bg-slate-700'}`}></div>
                                    ))}
                                </div>
                                <p className="text-slate-300 max-w-xs mx-auto mt-4">Excellent progress. The neural pathway is strengthening.</p>
                            </>
                        )}
                    </div>
                    
                    <button onClick={onClose} className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-bold transition-colors border border-white/5">
                        Return to Universe
                    </button>
                </div>
            )}

            {/* Failure State */}
            {phase === 'failure' && (
                <div className="text-center space-y-6 animate-fade-in">
                    <div className="w-24 h-24 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto border border-rose-500/50 shadow-[0_0_50px_rgba(244,63,94,0.3)]">
                        <XCircle className="w-12 h-12 text-rose-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Drifted Away...</h2>
                    <p className="text-slate-300 max-w-xs mx-auto">
                        {appFeedback || "We've reset your progress on this word to reinforce the basics."}
                    </p>
                    <button onClick={onClose} className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-bold transition-colors">
                        Understood
                    </button>
                </div>
            )}

        </div>
      </div>
    </div>
  );
};

export default TestModal;
