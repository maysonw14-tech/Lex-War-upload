
import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, X, ExternalLink, Fingerprint, ArrowRight } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType: 'intercept' | 'form';
}

const SURVEY_URL = "https://forms.gle/pwgTUdVcTAZMpBZg8";

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose, initialType }) => {
  const [type, setType] = useState<'intercept' | 'form'>(initialType);
  const [trackingId, setTrackingId] = useState('');

  useEffect(() => {
    if (isOpen) {
      setType(initialType);
      // Generate unique tracking ID for the "vibe" (users can copy it if they want)
      setTrackingId(`TRX-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`);
    }
  }, [isOpen, initialType]);

  const handleRedirect = () => {
    window.open(SURVEY_URL, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-[#0f172a] border border-indigo-500/30 rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
        {/* Animated Header Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 animate-shimmer"></div>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-slate-500 hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'intercept' ? (
          // INTERCEPT MODE (Automatic Prompt)
          <div className="p-8 text-center flex flex-col items-center gap-6">
            <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center border border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.3)] animate-pulse-slow">
               <MessageSquare className="w-8 h-8 text-indigo-400" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Incoming Transmission</h3>
              <p className="text-slate-300">
                We've noticed you're exploring deep into the lexicon. Would you like to provide some feedback to help us improve the universe?
              </p>
            </div>

            <div className="flex gap-3 w-full">
              <button 
                onClick={onClose}
                className="flex-1 py-3 rounded-xl border border-white/10 text-slate-400 hover:bg-white/5 transition-colors font-medium"
              >
                Not now
              </button>
              <button 
                onClick={handleRedirect}
                className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Yes, transmit
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          // FORM MODE (Manual Trigger)
          <div className="p-6 sm:p-8 flex flex-col items-center text-center">
             <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4 w-full justify-center">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                  <Send className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="text-left">
                   <h3 className="text-lg font-bold text-white">Feedback Uplink</h3>
                   <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono mt-0.5">
                     <Fingerprint className="w-3 h-3" />
                     ID: {trackingId}
                   </div>
                </div>
             </div>

             <p className="text-slate-300 mb-8 leading-relaxed">
                To ensure your data is secure and reaches the developer directly, we use a dedicated survey channel.
             </p>

             <button 
               onClick={handleRedirect}
               className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group"
             >
               <ExternalLink className="w-5 h-5 group-hover:animate-pulse" />
               Launch Survey Portal
             </button>
             
             <p className="text-xs text-slate-500 mt-4">
                Opens Google Forms in a new secure tab
             </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;
