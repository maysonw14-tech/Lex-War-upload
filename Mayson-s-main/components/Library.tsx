
import React, { useState, useEffect } from 'react';
import { MistakeRecord, BattleQuestionType } from '../types';
import { X, Trash2, BookOpen, AlertCircle, HelpCircle, GraduationCap, ArrowLeft, Target, Lightbulb, Clock, CheckCircle2, Repeat, ShieldCheck } from 'lucide-react';

interface LibraryProps {
  isOpen: boolean;
  onClose: () => void;
  items: any[];
  onSelectWord: (word: string) => void;
  onStartReview: () => void;
}

const PLAIN_LANGUAGE_TYPES: Record<BattleQuestionType, string> = {
    vocab: "Word Meaning",
    grammar: "Sentence Rules",
    pronunciation: "Sound Check",
    collocation: "Word Partners",
    idiom: "Sayings & Phrases",
    visual_vocab: "Visuals",
    mcq: "Multiple Choice",
    pairing: "Matching Pairs",
    blank: "Fill the Blank",
    sentence_order: "Order the Words"
};

const LEVEL_DESCRIPTIONS: Record<string, string> = { "A2": "Beginner", "B1": "Apprentice", "B2": "Warrior", "C1": "Master", "C2": "Legend" };

const Library: React.FC<LibraryProps> = ({ isOpen, onClose }) => {
  const [mistakes, setMistakes] = useState<MistakeRecord[]>([]);
  const [mastered, setMastered] = useState<MistakeRecord[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'review' | 'mastered'>('review');

  useEffect(() => { if (isOpen) loadMistakes(); }, [isOpen]);

  const loadMistakes = () => {
    try {
      const savedMistakes = localStorage.getItem('rpg_battle_mistakes');
      if (savedMistakes) {
        const parsed = JSON.parse(savedMistakes) as MistakeRecord[];
        setMistakes(parsed.sort((a, b) => b.mistakeCount - a.mistakeCount || b.timestamp - a.timestamp));
      }
      const savedMastered = localStorage.getItem('rpg_battle_mastered');
      if (savedMastered) {
          setMastered(JSON.parse(savedMastered));
      }
    } catch (e) { console.error("Failed to load Library", e); }
  };

  const markAsMastered = (id: string) => {
    const itemToMove = mistakes.find(m => m.id === id);
    if (!itemToMove) return;

    const updatedMistakes = mistakes.filter(m => m.id !== id);
    const updatedMastered = [...mastered, itemToMove];
    
    setMistakes(updatedMistakes);
    setMastered(updatedMastered);
    
    localStorage.setItem('rpg_battle_mistakes', JSON.stringify(updatedMistakes));
    localStorage.setItem('rpg_battle_mastered', JSON.stringify(updatedMastered));

    if (expandedId === id) setExpandedId(null);
  };
  
  const clearAll = () => {
    const targetKey = activeTab === 'review' ? 'rpg_battle_mistakes' : 'rpg_battle_mastered';
    const setState = activeTab === 'review' ? setMistakes : setMastered;
    if (confirm(`Are you sure you want to clear all ${activeTab} records? This cannot be undone.`)) {
        setState([]);
        localStorage.removeItem(targetKey);
    }
  };

  const currentList = activeTab === 'review' ? mistakes : mastered;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-[#050a14] text-slate-200 font-sans flex flex-col animate-fade-in overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-rose-900/10 rounded-full blur-[80px]"></div>
        </div>
        <div className="relative z-10 flex items-center justify-between p-6 border-b border-white/10 bg-[#050a14]/90 backdrop-blur-md">
            <div className="flex items-center gap-4">
                <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"><ArrowLeft className="w-6 h-6" /></button>
                <div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-wider flex items-center gap-2"><BookOpen className="w-6 h-6 text-indigo-400" />Library</h2>
                </div>
            </div>
            {currentList.length > 0 && <button onClick={clearAll} className="text-xs font-bold text-rose-400 hover:text-rose-300 uppercase tracking-widest flex items-center gap-1 transition-colors px-3 py-1.5 rounded-lg hover:bg-rose-950/30"><Trash2 className="w-3 h-3" /> Clear All</button>}
        </div>

        <div className="p-4 border-b border-white/5 bg-black/10">
            <div className="flex justify-center gap-4">
                <button onClick={() => setActiveTab('review')} className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${activeTab === 'review' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-white/10'}`}><Repeat className="w-4 h-4" /> To Review ({mistakes.length})</button>
                <button onClick={() => setActiveTab('mastered')} className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${activeTab === 'mastered' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:bg-white/10'}`}><ShieldCheck className="w-4 h-4" /> Mastered ({mastered.length})</button>
            </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar relative z-10">
            <div className="max-w-4xl mx-auto space-y-4">
                {currentList.length === 0 && <div className="flex flex-col items-center justify-center h-[50vh] text-center opacity-40"><GraduationCap className="w-20 h-20 mb-4 text-indigo-300" /><h3 className="text-xl font-bold text-white mb-2">Library is Empty</h3><p className="text-sm text-slate-300 max-w-xs">Mistakes you make in battle will be recorded here for review.</p></div>}
                {currentList.map((record) => {
                    const isExpanded = expandedId === record.id;
                    return (
                        <div key={record.id} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isExpanded ? 'bg-slate-900 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.15)]' : 'bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/60'}`}>
                            <div onClick={() => setExpandedId(isExpanded ? null : record.id)} className="p-4 cursor-pointer flex items-center gap-4 group">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors flex-shrink-0 ${isExpanded ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300' : 'bg-black/30 border-white/10 text-slate-500 group-hover:text-indigo-400'}`}><AlertCircle className="w-5 h-5" /></div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${record.mistakeCount > 2 ? 'bg-rose-500/20 text-rose-300' : 'bg-slate-700 text-slate-400'}`}>Mistakes: {record.mistakeCount}</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">{PLAIN_LANGUAGE_TYPES[record.type] || "General"}</span>
                                    </div>
                                    <p className={`font-bold truncate transition-colors ${isExpanded ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{record.questionPrompt}</p>
                                </div>
                                <div className="text-right hidden sm:block"><span className={`text-xs font-black px-2 py-1 rounded border ${isExpanded ? 'bg-white/10 border-white/20 text-white' : 'bg-black/20 border-white/5 text-slate-500'}`}>{record.difficultyLevel}</span></div>
                            </div>
                            {isExpanded && <div className="px-4 pb-6 pt-2 border-t border-white/5 space-y-6 animate-slide-up">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 relative"><div className="flex items-center gap-2 mb-2 text-rose-400"><X className="w-4 h-4" /><h4 className="text-xs font-black uppercase tracking-widest">Mistake</h4></div><p className="text-slate-300 text-sm font-medium italic">"You missed this one."</p></div>
                                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 relative"><div className="flex items-center gap-2 mb-2 text-emerald-400"><Target className="w-4 h-4" /><h4 className="text-xs font-black uppercase tracking-widest">Correct Answer</h4></div><p className="text-white text-lg font-bold">{record.correctAnswer}</p></div>
                                </div>
                                <div className="relative group/explanation">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Lightbulb className="w-4 h-4 text-amber-400" /><h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Battle Wisdom (Explanation)</h4>
                                        <div className="relative"><HelpCircle className="w-3 h-3 text-slate-600 cursor-help hover:text-white transition-colors" onMouseEnter={() => setActiveTooltip(`expl-${record.id}`)} onMouseLeave={() => setActiveTooltip(null)} />{activeTooltip === `expl-${record.id}` && <div className="absolute left-6 top-1/2 -translate-y-1/2 w-48 bg-black border border-white/20 p-2 rounded-lg text-[10px] text-slate-300 z-50 shadow-xl">This explains *why* the answer is correct so you don't make the same mistake twice.</div>}</div>
                                    </div>
                                    <div className="bg-black/30 p-4 rounded-xl border border-white/10 text-slate-300 text-sm leading-relaxed">{record.explanation}</div>
                                </div>
                                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                                    <div className="flex items-center gap-4"><div className="flex items-center gap-1.5 text-xs text-slate-500"><GraduationCap className="w-4 h-4" /><span className="font-bold">{LEVEL_DESCRIPTIONS[record.difficultyLevel] || "Unknown Rank"}</span></div><div className="flex items-center gap-1.5 text-xs text-slate-500"><Clock className="w-4 h-4" /><span>Recorded {new Date(record.timestamp).toLocaleDateString()}</span></div></div>
                                    {activeTab === 'review' && <button onClick={(e) => { e.stopPropagation(); markAsMastered(record.id); }} className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold text-xs uppercase tracking-widest shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 flex items-center gap-2"><div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center"><CheckCircle2 className="w-3 h-3" /></div>Mark as Mastered</button>}
                                </div>
                            </div>}
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
};

export default Library;
