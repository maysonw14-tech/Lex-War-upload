import React from 'react';
import { ArrowRight, LogOut, Radio } from 'lucide-react';

interface ReviewPromptProps {
  isOpen: boolean;
  onNext: () => void;
  onExit: () => void;
  count: number;
}

const ReviewPrompt: React.FC<ReviewPromptProps> = ({ isOpen, onNext, onExit, count }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] w-full max-w-md animate-slide-up px-4">
      <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-indigo-500/30 p-6 rounded-2xl shadow-2xl flex flex-col gap-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 animate-shimmer"></div>
        
        <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-500/20 rounded-full animate-pulse">
                <Radio className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-white">Transmission Incoming</h3>
                <p className="text-indigo-200 text-sm">
                   {count > 0 
                     ? `${count} anomalies remaining in this sector.` 
                     : "Sector clear. All anomalies resolved."}
                </p>
            </div>
        </div>

        <div className="flex gap-3 mt-2">
            <button 
                onClick={onExit}
                className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-300 font-bold text-sm transition-colors flex items-center justify-center gap-2"
            >
                <LogOut className="w-4 h-4" />
                Return to Bridge
            </button>
            {count > 0 && (
                <button 
                    onClick={onNext}
                    className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 border border-indigo-500/50 rounded-xl text-white font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
                >
                    Engage Next
                    <ArrowRight className="w-4 h-4" />
                </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default ReviewPrompt;