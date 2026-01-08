
import React, { useState, useEffect } from 'react';
import { WordDetails } from '../types';
import { generateVisualAid } from '../services/geminiService';
import { Image as ImageIcon, Loader2, FlaskConical, Lightbulb, Rocket, BookOpen, BrainCircuit } from 'lucide-react';
import TestModal from './QuizModal';
import { CosmicDust } from './Effects';

interface WordCardProps {
  data: WordDetails;
  onMistake: () => void;
  onSuccess: () => void;
  onWordClick: (word: string) => void;
  reviewCount?: number; 
}

const WordCard: React.FC<WordCardProps> = ({ data, onMistake, onSuccess, onWordClick, reviewCount = 0 }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loadingImage, setLoadingImage] = useState(false);
  const [isTestOpen, setIsTestOpen] = useState(false);

  const handleGenerateImage = async () => {
    setLoadingImage(true);
    try {
      if (data.visualPrompt && !imageUrl) {
          const url = await generateVisualAid(data.visualPrompt);
          setImageUrl(url);
      }
    } catch (error) {
      console.error("Failed to generate image", error);
    } finally {
      setLoadingImage(false);
    }
  };

  useEffect(() => {
    setImageUrl(null);
    handleGenerateImage();
  }, [data.word]); 

  // Safeguard against missing data
  if (!data) return null;

  return (
    <div className="w-full relative animate-float">
      <CosmicDust />
      
      {/* HEADER: Compact Control Bar */}
      <div className="relative group z-10 mb-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <header className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-2xl flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-baseline gap-3">
                <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200 tracking-tight">{data.word}</h1>
                <span className="text-lg text-indigo-300 font-mono">{data.phonetic}</span>
            </div>
            
            <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setIsTestOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/40 border border-emerald-400/30 text-emerald-100 transition-all hover:scale-105"
                  >
                    <FlaskConical className="w-4 h-4" />
                    <span className="text-xs font-medium">Test</span>
                  </button>
            </div>
          </header>
      </div>

      {/* COMPACT CONTENT GRID: 3 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 z-10 relative">
          
          {/* COL 1: Visuals (25%) */}
          <div className="lg:col-span-1 space-y-4">
               {/* Visual Aid */}
              <div className="aspect-square w-full bg-slate-900/50 backdrop-blur-md rounded-xl overflow-hidden relative flex items-center justify-center border border-white/10 group">
                {loadingImage ? (
                    <div className="flex flex-col items-center gap-2 text-indigo-300">
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span className="text-[10px] font-light uppercase tracking-widest">Rendering...</span>
                    </div>
                ) : imageUrl ? (
                    <div className="relative w-full h-full">
                        <img src={imageUrl} alt={data.word} className="w-full h-full object-cover animate-fade-in" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                             <p className="text-white text-[10px] font-mono leading-tight truncate">{data.visualPrompt}</p>
                        </div>
                    </div>
                ) : (
                    <button 
                        onClick={handleGenerateImage}
                        className="flex flex-col items-center gap-1 text-slate-500 hover:text-indigo-400 transition-colors"
                    >
                        <ImageIcon className="w-8 h-8 opacity-50" />
                        <span className="text-xs font-medium">Visual</span>
                    </button>
                )}
              </div>
          </div>

          {/* COL 2: Definitions (Core) (50%) */}
          <div className="lg:col-span-2 space-y-4">
              <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-5 h-full">
                  
                  {data.forms && data.forms.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-white/5">
                          {data.forms.map((form, idx) => (
                              <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400 font-mono">
                                  {form}
                              </span>
                          ))}
                      </div>
                  )}

                  <div className="space-y-6">
                    {data.definitions && data.definitions.map((group, groupIdx) => (
                        <div key={groupIdx} className="animate-fade-in">
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border
                                    ${group.partOfSpeech.toLowerCase().includes('verb') ? 'bg-rose-500/10 text-rose-300 border-rose-500/20' : 
                                      group.partOfSpeech.toLowerCase().includes('noun') ? 'bg-blue-500/10 text-blue-300 border-blue-500/20' : 
                                      'bg-indigo-500/10 text-indigo-300 border-indigo-500/20'}`}>
                                    {group.partOfSpeech}
                                </span>
                            </div>
                            <ul className="space-y-4">
                                {group.meanings && group.meanings.map((def, idx) => (
                                    <li key={idx} className="group/item">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex gap-2">
                                                <span className="text-slate-600 font-mono text-xs pt-1">{idx + 1}.</span>
                                                <div>
                                                    <p className="text-base text-slate-200 leading-snug">{def.english}</p>
                                                    <p className="text-emerald-400/80 text-sm mt-0.5">{def.translation}</p>
                                                </div>
                                            </div>
                                            {def.example && (
                                                <div className="pl-6 mt-1 border-l-2 border-white/5 ml-1">
                                                    <p className="text-slate-400 italic text-xs">"{def.example}"</p>
                                                    {def.exampleTranslation && <p className="text-slate-600 text-[10px]">{def.exampleTranslation}</p>}
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                  </div>
              </div>
          </div>

          {/* COL 3: Context (25%) */}
          <div className="lg:col-span-1 space-y-4">
               {/* Scenarios */}
              <div className="bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-white/10 overflow-hidden">
                <div className="flex items-center gap-2 mb-3 text-emerald-300">
                    <BookOpen className="w-3 h-3" />
                    <h3 className="text-[10px] font-bold uppercase tracking-widest">Context</h3>
                </div>
                <ul className="space-y-3">
                    {data.scenarios && data.scenarios.slice(0, 3).map((scenario, idx) => (
                        <li key={idx} className="text-xs">
                            <span className="block text-[9px] font-bold uppercase text-slate-500 mb-0.5">{scenario.context}</span>
                            <p className="text-slate-300 leading-tight mb-0.5">"{scenario.english}"</p>
                            <p className="text-emerald-500/60 text-[10px]">{scenario.translation}</p>
                        </li>
                    ))}
                </ul>
              </div>

              {/* Mnemonic */}
              {data.mnemonic && (
                  <div className="bg-fuchsia-950/20 p-4 rounded-xl border border-fuchsia-500/20">
                      <div className="flex items-center gap-2 mb-1 text-fuchsia-400">
                          <BrainCircuit className="w-3 h-3" />
                          <h4 className="text-[10px] font-bold uppercase tracking-widest">Neural Link</h4>
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed">{data.mnemonic}</p>
                  </div>
              )}
              
               {/* Fun Fact */}
               {data.funFact && (
                  <div className="bg-indigo-950/20 p-4 rounded-xl border border-indigo-500/20">
                      <div className="flex items-center gap-2 mb-1 text-amber-400">
                          <Lightbulb className="w-3 h-3" />
                          <h4 className="text-[10px] font-bold uppercase tracking-widest">Did You Know?</h4>
                      </div>
                      <p className="text-slate-400 text-xs italic leading-relaxed">{data.funFact}</p>
                  </div>
              )}
               
              {/* Idioms (Chips) */}
              {data.idioms && data.idioms.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                     {data.idioms.slice(0, 3).map((idiom, idx) => (
                        <span key={idx} className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-purple-300 text-[10px]">
                           {idiom}
                        </span>
                     ))}
                  </div>
              )}
              
               {/* Bottom Test Button */}
              <button 
                  onClick={() => setIsTestOpen(true)}
                  className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-lg shadow-lg shadow-indigo-500/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                  <Rocket className="w-4 h-4" />
                  <span>Test Me</span>
              </button>
          </div>
      </div>

      <TestModal 
        word={data.word} 
        isOpen={isTestOpen} 
        onClose={() => setIsTestOpen(false)} 
        onFail={onMistake}
        onSuccess={onSuccess}
        currentReviewCount={reviewCount}
      />
    </div>
  );
};

export default WordCard;
