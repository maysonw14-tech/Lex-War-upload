
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { RPGPlayerState, BattleQuestion, RPGEnemy, BattleQuestionType, RPGItem, RPGItemType, EnemyClass, TriviaCampaign, RPGItemQuality, ItemPerk, RPGPet, MistakeRecord } from '../types';
import { generateBattleQuestion, getTriviaForWave } from '../services/geminiService';
import { Sword, Shield, Zap, Skull, Crown, Shirt, Hand, Footprints, Gem, Flame, Box, XCircle, Ghost, Anchor, Dna, Hexagon, Sparkles, ArrowUpCircle, Gavel, Feather, Eye, Star, Heart, Fingerprint, Crosshair, Axe, Glasses, User, LogOut, Lock, CheckCircle2, Map, HelpCircle, ArrowRight, ArrowLeft, Loader2, Coins, ArrowUp, Briefcase, Plus, Hammer, FileText, Merge, BookMarked, ArrowDown, ArrowRightCircle, Shuffle, Check, Wind, Snowflake, Moon, Sun, ChevronLeft, ChevronRight, Hash, Send, Target, Orbit, AlertTriangle, Award, Search, Droplets, Globe, Gift, Target as TargetIcon, BrainCircuit, Info, ShieldAlert, UserPlus, Zap as LightningIcon, Wand2, X, MessageSquare as MsgIcon, TrendingUp, TrendingDown, ShieldMinus, Zap as PerkIcon, Dog, Edit3, MousePointerClick, Trash2, Flame as FlameIcon, ChevronsUp, AlertOctagon, PawPrint, BookOpen, Anvil, BarChart3, Layers, ShieldCheck, Repeat, Minus, MoveRight } from 'lucide-react';
import { CosmicDust } from './Effects';
import StatsDashboard from './StatsDashboard';
import TRIVIA_DATA from './trivia';
import MOCKING_DATA from './mocking';
import Library from './Library';

interface RPGModeProps {
  onExit: () => void;
  initialLevel: number;
  onAddToLibrary: (word: string, category: string) => void;
  onOpenLibrary: () => void;
  globalStats: {
      streak: number;
      discovered: number;
      mastered: number;
      neuralDecay: number;
      accuracy: number;
  };
}

const QUESTION_TYPES: BattleQuestionType[] = ['vocab', 'pairing', 'collocation', 'idiom', 'blank'];
const CEFR_LEVELS = ["A2", "B1", "B2", "C1", "C2"];

const HERO_PROFILE_URL = "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/hero/0_Dark_Oracle_Walking_016.png";
const HERO_SPRITE_URL = "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/herosprite/5x6heronewsprite.png"; 
const CRIT_VFX_URL = "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/GIF.gif";
const TOWNSQUARE_BG = "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/BattleBackground/Townsquare.png";
const BLACKSMITH_BG = "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/BattleBackground/Blacksmith.png";
const WORLD_MAP_BG = "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/BattleBackground/WorldMap.png";

const BATTLE_BACKGROUNDS = [
    "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/BattleBackground/battleback1.png", // Clearing
    "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/BattleBackground/battleback2.png", // Snow
    "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/BattleBackground/battleback3.png", // Dessert
    "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/BattleBackground/battleback4.png"  // Bazzar
];

const VFX_URLS = {
    fire: "https://raw.githubusercontent.com/maysonw14-tech/asset/452bae7afcee9e5fab794f49b3238c4b9c8c1964/special%20effect/HellFire.gif",
    ice: "https://raw.githubusercontent.com/maysonw14-tech/asset/452bae7afcee9e5fab794f49b3238c4b9c8c1964/special%20effect/Ice.gif",
    thunder: "https://raw.githubusercontent.com/maysonw14-tech/asset/452bae7afcee9e5fab794f49b3238c4b9c8c1964/special%20effect/Thunder.gif",
    healing: "https://raw.githubusercontent.com/maysonw14-tech/asset/452bae7afcee9e5fab794f49b3238c4b9c8c1964/special%20effect/Healing.gif"
};

const STATUS_VFX_URLS = {
    frozen: "https://raw.githubusercontent.com/maysonw14-tech/asset/452bae7afcee9e5fab794f49b3238c4b9c8c1964/special%20effect/Frozen-ice.gif",
    burning: "https://raw.githubusercontent.com/maysonw14-tech/asset/452bae7afcee9e5fab794f49b3238c4b9c8c1964/special%20effect/Burning.gif",
    shocked: "https://raw.githubusercontent.com/maysonw14-tech/asset/452bae7afcee9e5fab794f49b3238c4b9c8c1964/special%20effect/Electrify.gif"
};

const QUALITY_THEMES: Record<RPGItemQuality, any> = {
    Common: { border: 'border-slate-600', bg: 'bg-slate-900', glow: 'shadow-slate-500/20', text: 'text-slate-400', icon: 'text-slate-500' },
    Uncommon: { border: 'border-emerald-500', bg: 'bg-emerald-950/40', glow: 'shadow-[0_0_15px_rgba(16,185,129,0.4)]', text: 'text-emerald-400', icon: 'text-emerald-500' },
    Rare: { border: 'border-blue-500', bg: 'bg-blue-950/40', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.5)]', text: 'text-blue-400', icon: 'text-blue-500' },
    Epic: { border: 'border-purple-500', bg: 'bg-purple-950/40', glow: 'shadow-[0_0_25px_rgba(168,85,247,0.6)]', text: 'text-purple-400', icon: 'text-purple-500' },
    Legendary: { border: 'border-amber-500', bg: 'bg-amber-950/40', glow: 'shadow-[0_0_40px_rgba(245,158,11,0.8)]', text: 'text-amber-400', icon: 'text-amber-500' }
};

const HINTS: Record<BattleQuestionType, string> = {
    vocab: "Select the correct definition or synonym.",
    pairing: "Match the corresponding items.",
    collocation: "Choose the word that fits naturally.",
    sentence_order: "Reorder words to form a valid sentence.",
    idiom: "Identify the correct idiomatic expression.",
    blank: "Fill in the missing word.",
    grammar: "Choose the grammatically correct option.",
    pronunciation: "Select the correct pronunciation.",
    visual_vocab: "Identify the object in the image.",
    mcq: "Select the best answer."
};

const ELEMENT_INFO = {
    fire: { 
        name: 'Hell Fire', 
        type: 'Active', 
        cost: 30, 
        icon: Flame, 
        color: 'text-rose-400', 
        bg: 'bg-rose-900/40', 
        border: 'border-rose-500/30',
        desc: "1.5x Attack single target and add burning dmg.",
        scaling: (lvl: number) => ({
            current: `150% Dmg. Burn 20% of total atk/turn (Accumulative).`
        })
    },
    ice: { 
        name: 'Storm', 
        type: 'Active', 
        cost: 35, 
        icon: Snowflake, 
        color: 'text-blue-300', 
        bg: 'bg-blue-900/40', 
        border: 'border-blue-500/30',
        desc: "20% attack and chance to freeze all enemies.",
        scaling: (lvl: number) => ({
            current: `20% Dmg to All. ${40 + (lvl - 1) * 5}% chance to freeze for 3 turns.`,
            next: `+5% Freeze chance.`
        })
    },
    thunder: { 
        name: 'Thunder Splash', 
        type: 'Active', 
        cost: 40, 
        icon: LightningIcon, 
        color: 'text-amber-300', 
        bg: 'bg-blue-900/40', 
        border: 'border-blue-500/30',
        desc: "Hits single target, splashes damage, and drops enemy DEF for 3 turns.",
        scaling: (lvl: number) => ({
            current: `Main: 100%. Splash: ${50 + (lvl - 1) * 10}%. Def Drop: ${10 + (lvl - 1) * 2}% for 3 turns.`,
            next: `+10% Splash, +2% Def reduction.`
        })
    },
    wind: { 
        name: 'Wind Steps', 
        type: 'Passive', 
        cost: 0, 
        icon: Wind, 
        color: 'text-emerald-300', 
        bg: 'bg-emerald-900/40', 
        border: 'border-emerald-500/30',
        desc: "Chance to dodge attacks.",
        scaling: (lvl: number) => ({
            current: `${5 + (lvl - 1) * 3}% chance to dodge.`,
            next: `+3% Dodge chance.`
        })
    },
    dark: { 
        name: 'Life Steal', 
        type: 'Passive', 
        cost: 0, 
        icon: Moon, 
        color: 'text-purple-400', 
        bg: 'bg-purple-900/40', 
        border: 'border-purple-500/30',
        desc: "Convert % of total dmg to HP.",
        scaling: (lvl: number) => ({
            current: `${5 + (lvl - 1) * 3}% damage returned as HP.`,
            next: `+3% Life steal.`
        })
    },
    light: { 
        name: 'Healing', 
        type: 'Active', 
        cost: 45, 
        icon: Heart, 
        color: 'text-yellow-200', 
        bg: 'bg-yellow-900/40', 
        border: 'border-yellow-500/30',
        desc: "Recovers HP for an ally or self.",
        scaling: (lvl: number) => ({
            current: `Recovers ${20 + (lvl - 1) * 3}% of Max HP.`,
            next: `+3% HP healing.`
        })
    }
};

const STAT_DESCRIPTIONS: Record<string, string> = {
    atk: "Physical damage dealt to enemies. Increases with Strength and weapon upgrades.",
    def: "Reduces damage taken from physical attacks. Increases with Armor upgrades.",
    maxHp: "Maximum Health Points. Determine how much damage you can take before falling.",
    maxMana: "Maximum Mana Points. Used to cast spells and special abilities.",
    crit: "Chance to deal 150% damage. Critical hits ignore some defense.",
    pen: "Armor Penetration. Ignores a percentage of enemy defense.",
    fire: "Resistance to Fire attacks and Burn damage.",
    ice: "Resistance to Ice attacks and Freeze effects.",
    thunder: "Resistance to Thunder attacks and Def-down effects.",
    critChance: "The percentage chance to land a critical hit, dealing 150% damage.",
    perk: "A unique, passive bonus that this creature possesses.",
    points: "Stat points available to manually increase this creature's base stats.",
    growthFactor: "This multiplier determines how many stat points this creature gains when leveling up. A factor of 1.0 is standard. Higher means faster power growth.",
    abilities: "Special skills the creature can use in battle. Green are passive, Blue are active."
};

const NavButton = ({ icon: Icon, label, onClick }: { icon: any, label: string, onClick: () => void }) => (
    <button onClick={onClick} className="flex flex-col items-center gap-1 group">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all shadow-lg">
            <Icon className="w-6 h-6 text-indigo-300 group-hover:text-white" />
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-white transition-colors">{label}</span>
    </button>
);

const StatusBadge = ({ type, value }: { type: 'frozen' | 'burning' | 'def', value: number }) => {
    if (value <= 0) return null;
    const icons = {
        frozen: { icon: Snowflake, color: 'text-blue-400', bg: 'bg-blue-900/80' },
        burning: { icon: Flame, color: 'text-orange-400', bg: 'bg-orange-900/80' },
        def: { icon: ShieldMinus, color: 'text-yellow-400', bg: 'bg-yellow-900/80' }
    };
    const conf = icons[type];
    const Icon = conf.icon;
    return (
        <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded-full border border-white/10 ${conf.bg} backdrop-blur-md shadow-lg animate-pulse z-50`}>
            <Icon className={`w-3 h-3 ${conf.color}`} />
            <span className="text-[10px] font-black text-white">{Math.round(value)}</span>
        </div>
    );
};

// Types for the Tooltip system
type TooltipContent = 
    | { type: 'item'; data: RPGItem; equipped?: RPGItem | null }
    | { type: 'enemy'; data: RPGEnemy }
    | { type: 'skill'; data: any }
    | { type: 'text'; title: string; body: string };

// Move ArmorySlot outside to prevent re-renders losing event handlers
interface ArmorySlotProps {
    type: RPGItemType;
    item: RPGItem | null;
    onClick?: () => void;
    isSelected?: boolean;
    onHover: (e: React.MouseEvent, item: RPGItem) => void;
    onLeave: () => void;
}

const ArmorySlot = ({ type, item, onClick, isSelected, onHover, onLeave }: ArmorySlotProps) => {
    const theme = item ? QUALITY_THEMES[item.quality] : null;
    return (
        <div 
           onClick={onClick} 
           onMouseEnter={(e) => item && onHover(e, item)}
           onMouseLeave={onLeave}
           className={`w-14 h-14 md:w-16 md:h-16 rounded-xl border-2 flex items-center justify-center relative transition-all group cursor-pointer 
              ${isSelected ? 'ring-2 ring-white scale-110 z-20' : ''}
              ${item ? `${theme?.border} ${theme?.bg} shadow-lg hover:scale-105` : 'border-white/5 bg-black/40'}`}
        >
            {item ? <img src={item.iconUrl} className="w-10 h-10 md:w-12 md:h-12 object-contain" /> : <Box className="w-6 h-6 md:w-8 md:h-8 text-white/5" />}
            {item && item.upgradeLevel > 0 && <div className="absolute -top-1 -left-1 bg-amber-500 text-black font-black text-[8px] px-1 rounded">+{item.upgradeLevel}</div>}
            <div className="absolute -bottom-1 -right-1 bg-black border border-white/10 rounded px-1 text-[6px] md:text-[7px] font-bold text-white uppercase">{type}</div>
        </div>
    );
};
// FIX: Moved helper components before RPGMode component to fix scope and hoisting issues.
const FixedTooltip = ({ content, x, y }: { content: TooltipContent, x: number, y: number }) => {
    const style: React.CSSProperties = {
        top: y + 20,
        left: x - 100, 
        zIndex: 9999,
    };
    
    if (x > window.innerWidth - 120) style.left = window.innerWidth - 220;
    if (x < 120) style.left = 10;
    if (y > window.innerHeight - 200) style.top = y - 220;

    return (
        <div style={style} className="fixed w-[200px] bg-slate-900/90 backdrop-blur-md border-2 border-indigo-500/50 p-3 rounded-2xl shadow-2xl pointer-events-none animate-fade-in text-left">
            {content.type === 'item' ? (
                <ItemTooltip item={content.data} currentEquipped={content.equipped || null} />
            ) : content.type === 'enemy' ? (
                <EnemyTooltip enemy={content.data} />
            ) : content.type === 'skill' ? (
                <div className="space-y-1">
                    <p className="text-xs font-black text-amber-400 uppercase tracking-wide">{ELEMENT_INFO[content.data as keyof typeof ELEMENT_INFO].name}</p>
                    <p className="text-[10px] text-slate-300 leading-relaxed whitespace-pre-wrap">{ELEMENT_INFO[content.data as keyof typeof ELEMENT_INFO].scaling(1).current}</p>
                </div>
            ) : content.type === 'text' ? (
                <div className="space-y-1">
                    <p className="text-xs font-black text-amber-400 uppercase tracking-wide">{content.title}</p>
                    <p className="text-[10px] text-slate-300 leading-relaxed whitespace-pre-wrap">{content.body}</p>
                </div>
            ) : null}
        </div>
    );
};

const EnemyTooltip = ({ enemy }: { enemy: RPGEnemy }) => (
    <div className="flex flex-col gap-2">
         <div className="border-b border-white/10 pb-1 flex justify-between items-start">
             <div>
                 <p className="text-sm font-black text-rose-400 uppercase">{enemy.name}</p>
                 <p className="text-[10px] text-slate-400 font-bold">Lvl {enemy.level}</p>
             </div>
             <div className="text-right">
                 <p className="text-[9px] text-emerald-400 font-bold">HP: {enemy.currentHp}/{enemy.maxHp}</p>
                 <p className="text-[9px] text-blue-400 font-bold">MP: {enemy.currentMana}/{enemy.maxMana}</p>
             </div>
         </div>
         
         {enemy.perk && (
            <div className="p-1.5 bg-purple-950/40 border border-purple-500/20 rounded">
                <p className="text-[9px] text-purple-400 font-bold uppercase mb-1 flex items-center gap-1"><Sparkles className="w-3 h-3"/> Perk</p>
                <span className="text-[9px] text-purple-300 font-bold uppercase">{enemy.perk.label}</span>
            </div>
         )}

         {(enemy.statusEffects.frozen > 0 || enemy.statusEffects.burning > 0 || enemy.statusEffects.defReductionTimer > 0) && (
            <div className="p-1.5 bg-rose-950/40 border border-rose-500/20 rounded">
                <p className="text-[9px] text-rose-400 font-bold uppercase mb-1 flex items-center gap-1"><AlertOctagon className="w-3 h-3"/> Status</p>
                <div className="flex flex-col gap-1">
                    {enemy.statusEffects.frozen > 0 && <span className="text-[10px] text-blue-300 font-bold flex items-center gap-1"><Snowflake className="w-3 h-3"/> Frozen ({enemy.statusEffects.frozen} turns)</span>}
                    {enemy.statusEffects.burning > 0 && <span className="text-[10px] text-orange-400 font-bold flex items-center gap-1"><FlameIcon className="w-3 h-3"/> Burning ({Math.floor(enemy.statusEffects.burning)} dmg)</span>}
                    {enemy.statusEffects.defReductionTimer > 0 && <span className="text-[10px] text-yellow-300 font-bold flex items-center gap-1"><ShieldMinus className="w-3 h-3"/> Def Down ({enemy.statusEffects.defReductionTimer} turns)</span>}
                </div>
            </div>
         )}

        {(enemy.skills.proactives.length > 0 || enemy.skills.passives.length > 0) && (
              <div className="border-t border-white/10 pt-2">
                  <p className="text-[9px] font-bold text-amber-300 uppercase mb-1 flex items-center gap-1"><Zap className="w-3 h-3"/> Skills</p>
                  <div className="flex flex-col gap-1">
                      {enemy.skills.proactives.map(s => (
                          <span key={s} className="text-[8px] text-indigo-200 uppercase font-bold">{ELEMENT_INFO[s]?.name || s} (Active)</span>
                      ))}
                      {enemy.skills.passives.map(s => (
                          <span key={s} className="text-[8px] text-emerald-200 uppercase font-bold">{ELEMENT_INFO[s]?.name || s} (Passive)</span>
                      ))}
                  </div>
              </div>
          )}
     </div>
);

const ItemTooltip = ({ item, currentEquipped }: { item: RPGItem, currentEquipped: RPGItem | null }) => {
    const qTheme = QUALITY_THEMES[item.quality]; 
    const itemStats = { 
        atk: Math.floor(item.baseStats.atk * (1 + item.qualityBonus/100)), 
        def: Math.floor(item.baseStats.def * (1 + item.qualityBonus/100)), 
        hp: Math.floor(item.baseStats.hp * (1 + item.qualityBonus/100)), 
        mana: Math.floor(item.baseStats.mana * (1 + item.qualityBonus/100)) 
    };
    const curStats = currentEquipped ? { 
        atk: Math.floor(currentEquipped.baseStats.atk * (1 + currentEquipped.qualityBonus/100)), 
        def: Math.floor(currentEquipped.baseStats.def * (1 + currentEquipped.qualityBonus/100)), 
        hp: Math.floor(currentEquipped.baseStats.hp * (1 + currentEquipped.qualityBonus/100)), 
        mana: Math.floor(currentEquipped.baseStats.mana * (1 + currentEquipped.qualityBonus/100)) 
    } : { atk: 0, def: 0, hp: 0, mana: 0 };

    const upgradeConfig: Record<RPGItemType, { label: string, pct: number }> = {
        head: { label: 'Mana', pct: 10 },
        chest: { label: 'Defense', pct: 10 },
        hands: { label: 'Health', pct: 10 },
        relic: { label: 'Attack', pct: 10 },
        feet: { label: 'Health', pct: 10 },
        weapon: { label: 'Attack', pct: 15 }
    };

    const upgradeBonus = upgradeConfig[item.type];
    const totalUpgradeBonus = (item.upgradeLevel * upgradeBonus.pct).toFixed(1);

    return (
        <div className="flex flex-col gap-2">
            <div className="border-b border-white/10 pb-1">
                <p className={`text-sm font-black uppercase ${qTheme.text}`}>{item.name}</p>
                {item.upgradeLevel > 0 && <p className="text-[10px] text-amber-400 font-bold">Lvl {item.upgradeLevel} (+{totalUpgradeBonus}% {upgradeBonus.label})</p>}
            </div>
            {item.perk && (
                <div className="bg-purple-900/30 border border-purple-500/30 rounded p-1 mb-1">
                    <p className="text-[8px] font-bold text-purple-300 uppercase">{item.perk.label}</p>
                </div>
            )}
            <div className="flex flex-col gap-1">
                {Object.keys(itemStats).map(key => { 
                    const k = key as keyof typeof itemStats; 
                    if (itemStats[k] === 0 && curStats[k] === 0) return null; 
                    const diff = Math.floor(itemStats[k] - curStats[k]);
                    return (
                        <div key={k} className="bg-black/30 p-1 rounded-lg border border-white/5 flex justify-between items-center">
                            <span className="text-[8px] uppercase text-slate-500 font-bold">{k}</span>
                            <div className="flex items-center gap-1">
                                <span className="text-[9px] font-black text-white">{Math.floor(itemStats[k])}</span>
                                {diff !== 0 && (diff > 0 ? <TrendingUp className="w-2 h-2 text-emerald-400" /> : <TrendingDown className="w-2 h-2 text-rose-400" />)}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const getSubjectLabel = (type: BattleQuestionType) => { switch(type) { case 'vocab': return 'Vocab'; case 'collocation': return 'Phrases'; case 'idiom': return 'Idioms'; case 'pairing': return 'Match'; case 'sentence_order': return 'Structure'; case 'blank': return 'Fill'; default: return 'Quest'; } };
const HeroSprite = ({ action }: { action: 'idle' | 'attack' | 'hurt' | 'die' | 'walk' | 'cast' }) => { 
    const offsets = { idle: 0, attack: -48, walk: -96, hurt: -144, die: -192, cast: -48 }; 
    const topOffset = `${offsets[action === 'cast' ? 'attack' : action]}px`;
    
    return (
        <div className="w-full h-full flex items-center justify-center bg-transparent">
            <div className="w-[48px] h-[48px] overflow-hidden relative rendering-pixelated bg-transparent" style={{ transform: 'scale(2.5)', transformOrigin: 'center bottom' }}>
                <img 
                  src={HERO_SPRITE_URL} 
                  className={`max-w-none absolute left-0 ${action === 'cast' ? 'hero-attack' : `hero-${action}`} bg-transparent`} 
                  style={{ 
                    width: '288px', 
                    height: '240px', 
                    top: topOffset,
                    filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.2))'
                  }} 
                  alt="Hero" 
                />
            </div>
        </div>
    ); 
};

const MapNode: React.FC<{ wave: number; current: number; onClick?: () => void }> = ({ wave, current, onClick }) => {
    const isBoss = (wave % 5) === 0; const isElite = (wave % 5) === 3; const isLocked = wave > current; const isDone = wave < current; const isActive = wave === current;
    let Icon = isBoss ? Crown : isElite ? ShieldAlert : isDone ? CheckCircle2 : isActive ? Target : Lock;
    return (
        <div onClick={isLocked ? undefined : onClick} className={`relative flex flex-col items-center gap-2 ${isLocked ? 'opacity-30' : 'cursor-pointer hover:scale-110 transition-transform'}`}>
            <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center relative shadow-xl transition-all ${isActive ? 'bg-indigo-600 border-indigo-400 animate-pulse scale-125' : isBoss ? 'bg-rose-950/50 border-rose-500' : isElite ? 'bg-amber-950/50 border-amber-500' : isDone ? 'bg-emerald-950/50 border-emerald-500' : 'bg-slate-900 border-slate-700'}`}><Icon className={`w-7 h-7 ${isActive ? 'text-white' : isBoss ? 'text-rose-400' : isElite ? 'text-amber-400' : isDone ? 'text-emerald-400' : 'text-slate-600'}`} /></div>
            <span className="text-[8px] font-black text-white/40 uppercase">{isBoss ? 'Boss' : isElite ? 'Elite' : 'Level'} {wave}</span>
        </div>
    );
};

const LootRevealCard: React.FC<{ item: RPGItem, onReveal: () => void }> = ({ item, onReveal }) => {
    const [revealed, setRevealed] = useState(false);
    const [isRolling, setIsRolling] = useState(false);
    const theme = QUALITY_THEMES[item.quality];

    const handleClick = () => {
        if (revealed || isRolling) return;
        setIsRolling(true);
        // Casino effect: 4 seconds
        setTimeout(() => {
            setIsRolling(false);
            setRevealed(true);
            onReveal();
        }, 4000);
    };

    return (
        <div 
            onClick={handleClick}
            className={`w-40 h-56 rounded-[2.5rem] border-4 transition-all duration-300 relative overflow-hidden flex-shrink-0 cursor-pointer has-tooltip group ${
                revealed ? `${theme.border} ${theme.bg} ${theme.glow} scale-110 shadow-[0_0_50px_rgba(255,255,255,0.6)] animate-pulse` : 'border-slate-800 bg-slate-900 shadow-2xl hover:border-indigo-500/50'
            } ${isRolling ? 'animate-shake-screen border-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.5)]' : ''}`}
        >
            {isRolling ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
                     {/* Slot machine strip effect */}
                     <div className="absolute inset-0 flex flex-col items-center animate-slot-roll opacity-80 gap-12 py-4">
                        {[...Array(10)].map((_, i) => (
                           <div key={i} className="flex flex-col items-center justify-center grayscale opacity-50">
                                {i % 4 === 0 ? <Sword className="w-12 h-12 text-white" /> : 
                                 i % 4 === 1 ? <Gem className="w-12 h-12 text-white" /> :
                                 i % 4 === 2 ? <Shield className="w-12 h-12 text-white" /> :
                                 <Crown className="w-12 h-12 text-white" />}
                           </div>
                        ))}
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
                     
                     {/* Center Highlight Line */}
                     <div className="absolute top-1/2 left-0 right-0 h-1 bg-red-500/50 z-20 shadow-[0_0_10px_red]"></div>
                </div>
            ) : revealed ? (
                <>
                    <div className="absolute inset-0 animate-shock-flash pointer-events-none"></div>
                    <div className="flex flex-col items-center justify-center h-full p-4 text-center animate-pop-in relative z-10">
                        <div className={`absolute inset-0 ${theme.bg} opacity-50 animate-pulse`}></div>
                        <img src={item.iconUrl} className="w-20 h-20 mb-4 object-contain mx-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] relative z-20" />
                        <p className={`text-[10px] font-black uppercase mb-1 tracking-widest ${theme.text} relative z-20`}>{item.quality}</p>
                        <p className="text-sm font-black text-white leading-tight uppercase italic relative z-20">{item.name}</p>
                        {item.perk && (
                             <span className="mt-2 px-2 py-0.5 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded text-[9px] font-bold uppercase animate-pulse relative z-20">{item.perk.label}</span>
                        )}
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-full gap-4 bg-slate-950/80 group-hover:bg-slate-900 transition-colors">
                    <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:animate-bounce">
                        <Gift className="w-12 h-12 text-slate-700 group-hover:text-indigo-400" />
                    </div>
                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest group-hover:text-indigo-300">Tap to Roll</span>
                </div>
            )}
        </div>
    );
};

const PairingBattle: React.FC<{ question: BattleQuestion, onComplete: () => void, onMismatch: () => void }> = ({ question, onComplete, onMismatch }) => {
    const [selectedTerm, setSelectedTerm] = useState<string | null>(null); const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
    const terms = useMemo(() => question.pairs?.map(p => p.term).sort(() => Math.random() - 0.5) || [], [question]);
    const matches = useMemo(() => question.pairs?.map(p => p.match).sort(() => Math.random() - 0.5) || [], [question]);
    const handlePairClick = (val: string, isTerm: boolean) => {
        if (matchedPairs.includes(val)) return;
        if (isTerm) { setSelectedTerm(val); } else if (selectedTerm) {
            if (val === question.pairs?.find(p => p.term === selectedTerm)?.match) {
                const newMatches = [...matchedPairs, selectedTerm, val]; setMatchedPairs(newMatches); setSelectedTerm(null);
                if (newMatches.length === (question.pairs?.length || 0) * 2) onComplete();
            } else { onMismatch(); setSelectedTerm(null); }
        }
    };
    return (
        <div className="grid grid-cols-2 gap-4 animate-fade-in pb-4">
            <div className="space-y-2">{terms.map(term => (<button key={term} onClick={() => handlePairClick(term, true)} className={`w-full p-3 rounded-xl border-2 transition-all font-bold text-sm italic ${matchedPairs.includes(term) ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 opacity-50' : selectedTerm === term ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-black/40 border-white/10 text-slate-300 hover:border-indigo-500/50'}`}>{term}</button>))}</div>
            <div className="space-y-2">{matches.map(match => (<button key={match} onClick={() => handlePairClick(match, false)} className={`w-full p-3 rounded-xl border-2 transition-all font-bold text-sm italic ${matchedPairs.includes(match) ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 opacity-50' : selectedTerm === match ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-black/40 border-white/10 text-slate-300 hover:border-indigo-500/50'}`}>{match}</button>))}</div>
        </div>
    );
};

const SentenceOrderingBattle: React.FC<{ question: BattleQuestion, onComplete: () => void, onMismatch: () => void }> = ({ question, onComplete, onMismatch }) => {
    const [currentOrder, setCurrentOrder] = useState<string[]>([]); const [availableWords, setAvailableWords] = useState<string[]>([]);
    useEffect(() => { if (question.shuffledParts) { setAvailableWords([...question.shuffledParts]); setCurrentOrder([]); } }, [question]);
    const handleWordClick = (word: string, isFromOrder: boolean) => {
        if (isFromOrder) { setCurrentOrder(prev => prev.filter(w => w !== word)); setAvailableWords(prev => [...prev, word]); } 
        else { setAvailableWords(prev => prev.filter(w => w !== word)); setCurrentOrder(prev => [...prev, word]); }
    };
    const checkResult = () => { if (currentOrder.join(' ').toLowerCase() === (question.correctAnswer || "").toLowerCase()) { onComplete(); } else { onMismatch(); if(question.shuffledParts) setAvailableWords([...question.shuffledParts]); setCurrentOrder([]); } };
    return (
        <div className="space-y-4 animate-fade-in pb-4">
            <div className="min-h-[80px] p-4 bg-black/40 rounded-2xl border-2 border-dashed border-indigo-500/30 flex flex-wrap gap-2 items-center justify-center">{currentOrder.length === 0 && <span className="text-slate-600 text-xs italic">Construct sentence...</span>}{currentOrder.map((word, idx) => (<button key={`${word}-${idx}`} onClick={() => handleWordClick(word, true)} className="px-3 py-1 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-rose-500 transition-colors">{word}</button>))}</div>
            <div className="flex flex-wrap gap-2 justify-center">{availableWords.map((word, idx) => (<button key={`${word}-${idx}`} onClick={() => handleWordClick(word, false)} className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-medium text-sm border border-white/5 transition-colors">{word}</button>))}</div>
            <button onClick={checkResult} disabled={availableWords.length > 0} className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-30 rounded-2xl font-black text-white shadow-lg transition-all uppercase text-sm">Submit</button>
        </div>
    );
};

const RPGMode: React.FC<RPGModeProps> = ({ onExit, initialLevel, onAddToLibrary, onOpenLibrary, globalStats }) => {
  const [player, setPlayer] = useState<RPGPlayerState>(() => {
    let loadedState: RPGPlayerState = {
        level: 200, xp: 0, maxXp: 20000, hp: 100, maxHp: 100,
        mana: 50, maxMana: 50, atk: 10, def: 5,
        coins: 1000000, statPoints: 800, inventory: [], pets: [], activePetId: null, equipment: { head: null, chest: null, hands: null, relic: null, feet: null, weapon: null },
        elemental: { fire: 11, ice: 11, thunder: 11, wind: 11, dark: 11, light: 11 },
        campaign: { currentWave: 1, storyArc: null, collectedClues: [] },
        statusEffects: { frozen: 0, burning: 0, defReduction: 0, defReductionTimer: 0 }
    };
    try {
        const saved = localStorage.getItem('rpg_save_state_v12_merge_pets');
        if (saved) { 
            const parsed = JSON.parse(saved);
            loadedState = { ...loadedState, ...parsed };
            if (!loadedState.statusEffects) {
                loadedState.statusEffects = { frozen: 0, burning: 0, defReduction: 0, defReductionTimer: 0 };
            }
        }
        // Force set for demo/testing - can be removed later
        loadedState.level = 200;
        loadedState.statPoints = 800;
        loadedState.atk = 10;
        loadedState.def = 5;
        loadedState.hp = 100;
        loadedState.maxHp = 100;
        loadedState.mana = 50;
        loadedState.maxMana = 50;
        loadedState.coins = 1000000;
        loadedState.elemental = { fire: 11, ice: 11, thunder: 11, wind: 11, dark: 11, light: 11 };
    } catch (e) { console.error("Failed to load save state", e); }
    return loadedState;
  });

  useEffect(() => { localStorage.setItem('rpg_save_state_v12_merge_pets', JSON.stringify(player)); }, [player]);

  const [enemies, setEnemies] = useState<RPGEnemy[]>([]); 
  const enemiesRef = useRef(enemies);
  useEffect(() => { enemiesRef.current = enemies; }, [enemies]);

  const [question, setQuestion] = useState<BattleQuestion | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>(() => { try { return JSON.parse(localStorage.getItem('rpg_history') || '[]'); } catch { return []; } });
  const [playerHurt, setPlayerHurt] = useState(false); 
  const [showSlash, setShowSlash] = useState(false); 
  const [victoryData, setVictoryData] = useState<{ xp: number, coins: number, items: RPGItem[], capturedPet?: RPGPet, triviaReveal?: string, explanation?: string, bonusLoot?: boolean, isDefeat?: boolean, petResult?: { name: string, xp: number, levelUp: boolean, sprite: string } } | null>(null);
  const [damageFloaters, setDamageFloaters] = useState<{id: string, text: string, x: number, y: number, color: string, isCrit?: boolean}[]>([]);
  const [gamePhase, setGamePhase] = useState<'loading' | 'player_turn' | 'enemy_turn' | 'victory' | 'defeat' | 'lobby' | 'boss_trivia'>('lobby');
  const [lobbyView, setLobbyView] = useState<'main' | 'character' | 'elements' | 'map' | 'blacksmith' | 'pets' | 'library'>('main');
  const [streak, setStreak] = useState(0); 
  const [combatAnim, setCombatAnim] = useState<'idle' | 'attack' | 'hurt' | 'die' | 'walk' | 'cast'>('idle');
  const [isApproaching, setIsApproaching] = useState(false);
  const [petApproaching, setPetApproaching] = useState(false);
  const [actingEntity, setActingEntity] = useState<string | null>(null); 
  const [enemyActionType, setEnemyActionType] = useState<'attack' | 'cast' | null>(null);
  const [screenShake, setScreenShake] = useState(false);
  const [turnProcessing, setTurnProcessing] = useState(false);
  const [wrongAnswerFeedback, setWrongAnswerFeedback] = useState<{ correctAnswer: string, explanation?: string } | null>(null);
  
  const [selectedInventoryItem, setSelectedInventoryItem] = useState<RPGItem | null>(null);
  const [tooltipData, setTooltipData] = useState<{ content: TooltipContent, x: number, y: number } | null>(null);

  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);
  const [petNamingId, setPetNamingId] = useState<string | null>(null);
  const [petNameInput, setPetNameInput] = useState("");
  const [forgeFodder, setForgeFodder] = useState<RPGItem[]>([]);
  const [showForgeConfirm, setShowForgeConfirm] = useState(false);
  const [showStoryIntro, setShowStoryIntro] = useState(false);
  const [activeTriviaState, setActiveTriviaState] = useState<TriviaCampaign | null>(null);
  const [lootRevealedCount, setLootRevealedCount] = useState(0);
  const [viewingChapter, setViewingChapter] = useState(1);
  const [activeWave, setActiveWave] = useState(1);
  const [currentCefrLevel, setCurrentCefrLevel] = useState(0); 
  const [showActionChoice, setShowActionChoice] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [mockingMsg, setMockingMsg] = useState<{ id: string, text: string, visible: boolean } | null>(null);
  const [activeVfx, setActiveVfx] = useState<{ url: string, type: 'fire' | 'ice' | 'thunder' | 'healing' | 'capture' | 'none', targetId: string | 'all' | null } | null>(null);
  const [isCasting, setIsCasting] = useState(false);
  const [currentBattleBg, setCurrentBattleBg] = useState<string>(BATTLE_BACKGROUNDS[0]);
  const [critTarget, setCritTarget] = useState<string | null>(null);
  const [dismissingPetId, setDismissingPetId] = useState<string | null>(null);
  const [activeTurnEntity, setActiveTurnEntity] = useState<'player' | 'pet'>('player');
  const [forgeResult, setForgeResult] = useState<'success' | 'fail' | null>(null);
  const [isForging, setIsForging] = useState(false);
  const [skippingTurn, setSkippingTurn] = useState(false);

  const [selectingTarget, setSelectingTarget] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<keyof typeof ELEMENT_INFO | 'normal' | 'capture' | null>(null);

  const activePet = useMemo(() => player.pets.find(p => p.id === player.activePetId) || null, [player.pets, player.activePetId]);

  const questionQueue = useRef<{data: {question: BattleQuestion, enemy: RPGEnemy}, type: BattleQuestionType}[]>([]);
  const isFetchingQueue = useRef(false);
  const nextTypeToGenerateRef = useRef(0);

  const handleSlotHover = (e: React.MouseEvent, item: RPGItem) => {
    setTooltipData({ content: { type: 'item', data: item, equipped: player.equipment[item.type] }, x: e.clientX, y: e.clientY });
  };

  const handleTooltipLeave = () => {
      setTooltipData(null);
  };

  useEffect(() => {
      setTooltipData(null);
  }, [gamePhase, lobbyView]);

  useEffect(() => {
    if ((gamePhase === 'player_turn' || gamePhase === 'enemy_turn' || gamePhase === 'loading') && enemies.length > 0) {
      const allDead = enemies.every(e => e.currentHp <= 0);
      if (allDead && !turnProcessing && !isCasting) {
        handleVictoryTrigger();
      }
    }
  }, [enemies, gamePhase, turnProcessing, isCasting]);

  useEffect(() => {
    if (gamePhase === 'player_turn' && !turnProcessing && player.statusEffects.frozen > 0) {
        setTurnProcessing(true);
        setTimeout(() => {
            showDamageFloat('player', 'FROZEN!', true);
            setPlayer(p => ({
                ...p, 
                statusEffects: {
                    ...p.statusEffects, 
                    frozen: Math.max(0, p.statusEffects.frozen - 1)
                }
            }));
            
            setTimeout(() => {
                if (activePet && activePet.hp > 0) {
                    if (activePet.statusEffects?.frozen > 0) {
                         setPlayer(prev => ({
                             ...prev,
                             pets: prev.pets.map(p => {
                                 if(p.id === activePet.id) {
                                     return { ...p, statusEffects: { ...p.statusEffects, frozen: Math.max(0, (p.statusEffects?.frozen || 0) - 1) } }
                                 }
                                 return p;
                             })
                         }));
                         showDamageFloat('pet', "FROZEN!", true);
                         setTimeout(handleEnemyTurn, 1000);
                    } else {
                         setActiveTurnEntity('pet');
                         setShowActionChoice(true);
                         setTurnProcessing(false);
                    }
                } else {
                    handleEnemyTurn();
                }
            }, 1000);
            
        }, 500);
    }
  }, [gamePhase, turnProcessing, player.statusEffects.frozen, activePet]);

  useEffect(() => {
    if (skippingTurn) {
        const timer = setTimeout(() => {
            setSkippingTurn(false);
            handleEnemyTurn();
        }, 1500);
        return () => clearTimeout(timer);
    }
  }, [skippingTurn]);

  const showDamageFloat = (id: string, text: string, isCrit: boolean = false) => {
      const floatId = Math.random().toString(36).substr(2, 9);
      setDamageFloaters(prev => [...prev, {
          id: `${id}_${floatId}`,
          text,
          x: (Math.random()-0.5)*20, 
          y: (Math.random()-0.5)*10,
          color: isCrit ? 'text-yellow-400 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]' : (text.includes('HEAL') || text.startsWith('+') ? 'text-green-400' : (text.includes('FROZEN') ? 'text-blue-400' : 'text-white')),
          isCrit
      }]);
      setTimeout(() => {
          setDamageFloaters(prev => prev.filter(f => f.id !== `${id}_${floatId}`));
      }, 1000);
  };

  const replenishQuestionQueue = async () => {
    if (isFetchingQueue.current || questionQueue.current.length >= 5) return;
    isFetchingQueue.current = true;
    try {
        while (questionQueue.current.length < 5) {
            const typeIndex = nextTypeToGenerateRef.current;
            const type = QUESTION_TYPES[typeIndex];
            const data = await generateBattleQuestion(currentCefrLevel, type, [...history, ...questionQueue.current.map(q => q.data.question.id)]);
            questionQueue.current.push({ data, type });
            nextTypeToGenerateRef.current = (typeIndex + 1) % QUESTION_TYPES.length;
        }
    } catch (e) { console.error(e); } finally { isFetchingQueue.current = false; }
  };

  useEffect(() => { replenishQuestionQueue(); }, [history, currentCefrLevel]);

  useEffect(() => {
    if (question?.options) {
        setShuffledOptions([...question.options].sort(() => Math.random() - 0.5));
    } else {
        setShuffledOptions([]);
    }
  }, [question]);

  const getItemEffectiveStats = (item: RPGItem, playerBaseStats: { atk: number; def: number; hp: number; mana: number; }) => {
    const qMult = 1 + (item.qualityBonus / 100);
    const b = item.baseStats;
    const scale: Record<RPGItemType, any> = { head: { mana: 0.10 }, chest: { def: 0.10 }, hands: { hp: 0.10 }, relic: { atk: 0.10 }, feet: { hp: 0.10 }, weapon: { atk: 0.15 } };
    const s = scale[item.type];

    const upgradeBonusAtk = item.upgradeLevel * (s.atk || 0) * playerBaseStats.atk;
    const upgradeBonusDef = item.upgradeLevel * (s.def || 0) * playerBaseStats.def;
    const upgradeBonusHp = item.upgradeLevel * (s.hp || 0) * playerBaseStats.hp;
    const upgradeBonusMana = item.upgradeLevel * (s.mana || 0) * playerBaseStats.mana;

    return {
        atk: Math.floor(b.atk * qMult + upgradeBonusAtk),
        def: Math.floor(b.def * qMult + upgradeBonusDef),
        hp: Math.floor(b.hp * qMult + upgradeBonusHp),
        mana: Math.floor(b.mana * qMult + upgradeBonusMana)
    };
  };

  const calculateStats = () => {
    let totalAtk = player.atk; let totalDef = player.def; let totalMaxHp = player.maxHp; let totalMana = player.maxMana;
    const playerBaseStats = { atk: player.atk, def: player.def, hp: player.maxHp, mana: player.maxMana };
    (Object.values(player.equipment) as (RPGItem | null)[]).forEach(item => { 
        if (item) { 
            const s = getItemEffectiveStats(item, playerBaseStats); 
            totalAtk += s.atk; totalDef += s.def; totalMaxHp += s.hp; totalMana += s.mana;
        } 
    });
    return { atk: totalAtk, def: totalDef, maxHp: totalMaxHp, currentHp: player.hp, maxMana: totalMana };
  };

  const generateLoot = (): RPGItem => {
    const types: RPGItemType[] = ['head', 'chest', 'hands', 'relic', 'feet', 'weapon']; const type = types[Math.floor(Math.random() * types.length)];
    const qualities: { q: RPGItemQuality, rate: number, bonusRange: [number, number] }[] = [ { q: 'Common', rate: 30, bonusRange: [0, 0] }, { q: 'Uncommon', rate: 25, bonusRange: [10, 30] }, { q: 'Rare', rate: 20, bonusRange: [31, 60] }, { q: 'Epic', rate: 15, bonusRange: [61, 80] }, { q: 'Legendary', rate: 10, bonusRange: [81, 100] } ];
    const roll = Math.random() * 100; let cumulativeRate = 0; let selectedQual = qualities[0];
    for (const qInfo of qualities) { cumulativeRate += qInfo.rate; if (roll <= cumulativeRate) { selectedQual = qInfo; break; } }
    const qualityBonus = Math.floor(Math.random() * (selectedQual.bonusRange[1] - selectedQual.bonusRange[0] + 1)) + selectedQual.bonusRange[0];
    const baseMap: Record<RPGItemType, any> = { head: { def: 0, mana: 20, hp: 0, atk: 0 }, chest: { hp: 10, def: 10, mana: 0, atk: 0 }, hands: { hp: 20, atk: 10, def: 0, mana: 0 }, relic: { atk: 10, def: 10, hp: 0, mana: 0 }, feet: { hp: 20, mana: 20, atk: 0, def: 0 }, weapon: { atk: 35, hp: 0, def: 0, mana: 0 } };
    const iconSuffix = { head: 'hat_01a', chest: 'armor_01b', hands: 'gloves_01c', relic: 'necklace_01d', feet: 'boots_01e', weapon: 'staff_02e' }[type];
    
    const item: RPGItem = { id: Math.random().toString(36).substr(2, 9), name: `${selectedQual.q} ${type.toUpperCase()}`, type, quality: selectedQual.q, qualityBonus, upgradeLevel: 0, level: 1, iconUrl: `https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/equip/${iconSuffix}.png`, baseStats: baseMap[type] };

    if ((type === 'weapon' || type === 'relic') && selectedQual.q !== 'Common') {
        if (Math.random() < 0.6) { 
            const perkType = Math.random() < 0.5 ? 'crit_chance' : 'armor_pen';
            const baseVal = selectedQual.q === 'Uncommon' ? 5 : selectedQual.q === 'Rare' ? 10 : selectedQual.q === 'Epic' ? 15 : 25;
            const val = Math.floor(baseVal * (0.8 + Math.random() * 0.4));
            item.perk = {
                type: perkType,
                value: val,
                label: `+${val}% ${perkType === 'crit_chance' ? 'Crit Chance' : 'Armor Pen'}`
            };
        }
    } else if (['head', 'chest', 'hands', 'feet'].includes(type)) {
        if (Math.random() < 0.2) {
            const resTypes = ['burn_res', 'freeze_res', 'def_red_res'] as const;
            const selectedType = resTypes[Math.floor(Math.random() * resTypes.length)];
            const val = Math.floor(Math.random() * 15) + 1; 
            
            let label = "";
            if (selectedType === 'burn_res') label = `+${val}% Fire Res`;
            if (selectedType === 'freeze_res') label = `+${val}% Ice Res`;
            if (selectedType === 'def_red_res') label = `+${val}% Thunder Res`;

            item.perk = {
                type: selectedType,
                value: val,
                label: label
            };
        }
    }
    return item;
  };

  const allocateStat = (stat: 'atk' | 'def' | 'maxHp' | 'maxMana') => {
      setPlayer(prev => {
          if (prev.statPoints <= 0) return prev;
          const inc = stat === 'maxHp' ? 20 : stat === 'maxMana' ? 10 : 2;
          return { ...prev, statPoints: prev.statPoints - 1, [stat]: prev[stat] + inc, hp: stat === 'maxHp' ? prev.hp + inc : prev.hp, mana: stat === 'maxMana' ? prev.mana + inc : prev.mana };
      });
  };

  const allocatePetStat = (petId: string, stat: 'atk' | 'def' | 'maxHp' | 'maxMana') => {
      setPlayer(prev => {
          const pets = prev.pets.map(p => {
              if (p.id !== petId || p.statPoints <= 0) return p;
              
              let growth = p.growthFactor;
              
              if (p.perk) {
                 const perkTypeMap: Record<string, string> = { 'atk': 'atk', 'def': 'def', 'hp': 'maxHp', 'mana': 'maxMana' };
                 if (perkTypeMap[p.perk.type] === stat) {
                     growth = growth * (1 + p.perk.value / 100);
                 } else if (p.perk.type === stat) {
                     growth = growth * (1 + p.perk.value / 100);
                 }
              }

              const inc = stat === 'maxHp' ? Math.floor(20 * growth) : stat === 'maxMana' ? Math.floor(10 * growth) : Math.floor(2 * growth);
              return { ...p, statPoints: p.statPoints - 1, [stat]: p[stat] + inc, hp: stat === 'maxHp' ? p.hp + inc : p.hp, maxHp: stat === 'maxHp' ? p.maxHp + inc : p.maxHp, mana: stat === 'maxMana' ? p.mana + inc : p.mana, maxMana: stat === 'maxMana' ? p.maxMana + inc : p.maxMana };
          });
          return { ...prev, pets };
      });
  };

  const renamePet = (petId: string, newName: string) => {
      if (!/^[a-zA-Z0-9 ]{1,10}$/.test(newName)) return;
      setPlayer(prev => ({ ...prev, pets: prev.pets.map(p => p.id === petId ? { ...p, name: newName } : p) }));
      setPetNamingId(null); setPetNameInput("");
  };
  
  const dismissPet = (petId: string) => {
      if (dismissingPetId !== petId) {
          setDismissingPetId(petId);
      } else {
          setPlayer(prev => {
              const newPets = prev.pets.filter(p => p.id !== petId);
              const isActive = prev.activePetId === petId;
              return { 
                  ...prev, 
                  pets: newPets, 
                  activePetId: isActive ? (newPets.length > 0 ? newPets[0].id : null) : prev.activePetId 
              };
          });
          setDismissingPetId(null);
          if(selectedPetId === petId) setSelectedPetId(null);
      }
  };

  const upgradeElement = (element: keyof typeof player.elemental) => {
      const lvl = player.elemental[element];
      if (lvl >= 11) return; 
      const cost = (lvl + 1) * 500;
      if (player.coins < cost) return;
      setPlayer(prev => ({ ...prev, coins: prev.coins - cost, elemental: { ...prev.elemental, [element]: lvl + 1 } }));
  };
  
  const getUpgradeSuccessRate = (level: number) => {
      if (level < 10) return 80;
      if (level < 20) return 60;
      if (level < 30) return 40;
      if (level < 40) return 20;
      return 10;
  };

  const getUpgradeCost = (level: number) => {
      return (level + 1) * 500;
  };

  const initiateForge = () => {
      if (!selectedInventoryItem || forgeFodder.length < 2) return;
      setShowForgeConfirm(true);
  };
  
  const executeForge = () => {
      if (!selectedInventoryItem || forgeFodder.length < 2) return;
      
      const cost = getUpgradeCost(selectedInventoryItem.upgradeLevel);
      if (player.coins < cost) {
          alert("Not enough coins!");
          return;
      }

      setShowForgeConfirm(false);
      setIsForging(true);
      
      setTimeout(() => {
          const rate = getUpgradeSuccessRate(selectedInventoryItem.upgradeLevel);
          const isSuccess = Math.random() * 100 <= rate;
          
          setPlayer(prev => {
              const fodderIds = forgeFodder.map(f => f.id);
              let newInventory = prev.inventory.filter(i => !fodderIds.includes(i.id));
              const newCoins = prev.coins - cost;
              
              if (isSuccess) {
                  const upgradedItem = { ...selectedInventoryItem, upgradeLevel: Math.min(100, selectedInventoryItem.upgradeLevel + 1) };
                  newInventory = newInventory.map(i => i.id === selectedInventoryItem.id ? upgradedItem : i);
                  const newEquipment = { ...prev.equipment };
                  (Object.keys(newEquipment) as (keyof typeof newEquipment)[]).forEach(slot => { 
                      if (newEquipment[slot as keyof typeof newEquipment]?.id === selectedInventoryItem.id) {
                          (newEquipment as any)[slot] = upgradedItem; 
                      }
                  });
                  setSelectedInventoryItem(upgradedItem);
                  setForgeResult('success');
                  return { ...prev, coins: newCoins, inventory: newInventory, equipment: newEquipment };
              } else {
                  setForgeResult('fail');
                  return { ...prev, coins: newCoins, inventory: newInventory };
              }
          });
          
          setForgeFodder([]);
          setIsForging(false);
          setScreenShake(true); 
          setTimeout(() => setScreenShake(false), 800);
          setTimeout(() => setForgeResult(null), 2500); 
      }, 4000);
  };

  const finalizeVictory = (bonusLoot: boolean = false) => {
    setGamePhase('victory');
    const xp = enemies.reduce((acc, e) => acc + (e.level * 20), 0) * activeWave;
    const coins = enemies.reduce((acc, e) => acc + (e.level * 100), 0) * activeWave;
    
    const lootItems: RPGItem[] = [];
    const lootCount = 10 + (bonusLoot ? 1 : 0);
    for (let i = 0; i < lootCount; i++) {
      lootItems.push(generateLoot());
    }

    let petResultData = null;
    const currentActivePet = player.pets.find(p => p.id === player.activePetId);
    
    if (currentActivePet) {
        let newPetXp = currentActivePet.xp + xp;
        let newPetLevel = currentActivePet.level;
        let newPetMaxXp = currentActivePet.maxXp;
        let leveledUp = false;

        if (newPetXp >= newPetMaxXp) {
             newPetLevel++;
             newPetMaxXp = Math.floor(newPetMaxXp * 1.1);
             leveledUp = true;
        }
        
        petResultData = { 
            name: currentActivePet.name, 
            xp: xp, 
            levelUp: leveledUp, 
            sprite: currentActivePet.spriteUrl 
        };
    }

    setPlayer(prev => {
        const newXp = prev.xp + xp;
        let level = prev.level;
        let maxXp = prev.maxXp;
        let statPoints = prev.statPoints;
        
        if (newXp >= maxXp) {
            level++;
            maxXp = Math.floor(maxXp * 1.1);
            statPoints += 5;
        }

        const newPets = prev.pets.map(p => {
            if (p.id === prev.activePetId) {
                let newPetXp = p.xp + xp;
                let newPetLevel = p.level;
                let newPetMaxXp = p.maxXp;
                let newPetStatPoints = p.statPoints;

                if (newPetXp >= newPetMaxXp) {
                    newPetLevel++;
                    newPetMaxXp = Math.floor(newPetMaxXp * 1.1);
                    newPetStatPoints += 4;
                }
                
                return { ...p, xp: newPetXp, level: newPetLevel, maxXp: newPetMaxXp, statPoints: newPetStatPoints };
            }
            return p;
        });
        
        return {
            ...prev,
            xp: newXp,
            level,
            maxXp,
            statPoints,
            coins: prev.coins + coins,
            inventory: [...prev.inventory, ...lootItems],
            pets: newPets,
            campaign: {
                ...prev.campaign,
                currentWave: Math.max(prev.campaign.currentWave, activeWave + 1)
            }
        };
    });
    
    setVictoryData({ 
      xp, 
      coins, 
      items: lootItems,
      bonusLoot,
      triviaReveal: activeTriviaState?.activeTrivia.answer || "Knowledge is power.",
      explanation: activeTriviaState?.activeTrivia.explanation || "Keep learning to grow stronger.",
      petResult: petResultData || undefined
    });
  };

  const handleVictoryTrigger = () => {
    const isBossWave = (activeWave % 5) === 0;
    if (isBossWave && activeTriviaState) {
        setGamePhase('boss_trivia');
        return; 
    }
    finalizeVictory(false);
  };

  const handleDefeatTrigger = () => {
      setGamePhase('victory'); 
      const xp = Math.floor((enemies.reduce((acc, e) => acc + (e.level * 20), 0) * activeWave) / 3);
      const coins = Math.floor((enemies.reduce((acc, e) => acc + (e.level * 100), 0) * activeWave) / 3);
      
      let petResultData = null;
      const currentActivePet = player.pets.find(p => p.id === player.activePetId);
      
      if (currentActivePet) {
          let newPetXp = currentActivePet.xp + xp;
          let newPetLevel = currentActivePet.level;
          let newPetMaxXp = currentActivePet.maxXp;
          let leveledUp = false;

          if (newPetXp >= newPetMaxXp) {
               newPetLevel++;
               newPetMaxXp = Math.floor(newPetMaxXp * 1.1);
               leveledUp = true;
          }
          
          petResultData = { 
              name: currentActivePet.name, 
              xp: xp, 
              levelUp: leveledUp, 
              sprite: currentActivePet.spriteUrl 
          };
      }

      setPlayer(prev => {
          const newXp = prev.xp + xp;
          let level = prev.level;
          let maxXp = prev.maxXp;
          let statPoints = prev.statPoints;
          
          if (newXp >= maxXp) {
              level++;
              maxXp = Math.floor(maxXp * 1.1);
              statPoints += 5;
          }

          const newPets = prev.pets.map(p => {
              if (p.id === prev.activePetId) {
                  let newPetXp = p.xp + xp;
                  let newPetLevel = p.level;
                  let newPetMaxXp = p.maxXp;
                  let newPetStatPoints = p.statPoints;

                  if (newPetXp >= newPetMaxXp) {
                      newPetLevel++;
                      newPetMaxXp = Math.floor(newPetMaxXp * 1.1);
                      newPetStatPoints += 4;
                  }

                  return { ...p, xp: newPetXp, level: newPetLevel, maxXp: newPetMaxXp, statPoints: newPetStatPoints };
              }
              return p;
          });
          
          return {
              ...prev,
              xp: newXp,
              level,
              maxXp,
              statPoints,
              coins: prev.coins + coins,
              pets: newPets,
              hp: 0 
          };
      });
      
      setVictoryData({ 
        xp, 
        coins, 
        items: [], 
        triviaReveal: "Defeated...",
        explanation: "Rest and try again. Even in failure, you gain experience.",
        isDefeat: true,
        petResult: petResultData || undefined
      });
  };

  const startBattle = async (waveOverride?: number) => {
    const waveToPlay = waveOverride || player.campaign.currentWave;
    setActiveWave(waveToPlay); setGamePhase('loading'); setShowStoryIntro(true); setQuestion(null); setEnemies([]);
    setLobbyView('main'); 
    setCurrentBattleBg(BATTLE_BACKGROUNDS[Math.floor(Math.random() * BATTLE_BACKGROUNDS.length)]);
    const trivia = getTriviaForWave(waveToPlay); setActiveTriviaState(trivia);
    const stats = calculateStats(); setPlayer(prev => ({ ...prev, hp: stats.maxHp, mana: stats.maxMana, statusEffects: { frozen: 0, burning: 0, defReduction: 0, defReductionTimer: 0 } }));
    await initializeBattle(waveToPlay);
  };
  
  const initializeBattle = async (waveToPlay: number) => {
    setVictoryData(null); setStreak(0); setWrongAnswerFeedback(null); setTurnProcessing(false); setShowActionChoice(false); setSelectingTarget(false); setSelectedSkill(null); setActiveTurnEntity('player');
    try {
      const isBoss = (waveToPlay % 5) === 0; const isElite = (waveToPlay % 5) === 3;
      let data;
      if (!isBoss && !isElite && questionQueue.current.length > 0) {
           data = questionQueue.current.shift()!.data; replenishQuestionQueue();
      } else {
           const type = QUESTION_TYPES[Math.floor(Math.random() * QUESTION_TYPES.length)];
           data = await generateBattleQuestion(currentCefrLevel, type, history, isBoss ? 'boss' : isElite ? 'elite' : undefined);
      }
      
      const enemyCount = isBoss ? 1 : Math.floor(Math.random() * 4) + 1;
      const battleEnemies: RPGEnemy[] = [];
      
      battleEnemies.push(data.enemy);

      const baseLevel = data.enemy.level;

      for (let i = 1; i < enemyCount; i++) {
          const extraData = await generateBattleQuestion(currentCefrLevel, QUESTION_TYPES[0], [], undefined);
          extraData.enemy.id = Math.random().toString(36).substr(2, 9);
          
          extraData.enemy.level = Math.max(1, baseLevel + Math.floor(Math.random() * 3) - 1);
          extraData.enemy.maxHp = 100 + extraData.enemy.level * 20;
          extraData.enemy.currentHp = extraData.enemy.maxHp;
          extraData.enemy.maxMana = 50 + extraData.enemy.level * 10;
          extraData.enemy.currentMana = 50 + extraData.enemy.level * 10;
          extraData.enemy.atk = 10 + extraData.enemy.level * 2;
          extraData.enemy.def = 5 + extraData.enemy.level;
          
          battleEnemies.push(extraData.enemy);
      }

      const growthFactor = 1.2; 
      const scale = Math.pow(growthFactor, waveToPlay - 1);
      
      battleEnemies.forEach(e => {
          const isBoss = e.class === 'boss';
          const isElite = e.class === 'elite';
          
          e.level = waveToPlay; 
          
          const hpMult = isBoss ? 3 : isElite ? 1.5 : 1;
          const atkMult = isBoss ? 1.5 : isElite ? 1.2 : 1;
          
          e.maxHp = Math.floor(100 * scale * hpMult);
          e.currentHp = e.maxHp;
          e.atk = Math.floor(10 * scale * atkMult);
          e.def = Math.floor(5 * scale);
          e.maxMana = Math.floor(50 * scale);
          e.currentMana = e.maxMana;
      });

      setEnemies(battleEnemies); 
      setQuestion(data.question);
      setHistory(prev => { const newHist = [...new Set([...prev, data.question.id])]; localStorage.setItem('rpg_history', JSON.stringify(newHist)); return newHist; });
    } catch (e) { setGamePhase('lobby'); setShowStoryIntro(false); }
  };
  
  const proceedToBattle = () => { if (!question) return; setShowStoryIntro(false); setGamePhase('player_turn'); };
  
  const handleAnswerCheck = (accuracy: number) => {
    setTurnProcessing(true); 
    if (accuracy >= 60) { 
        setStreak(prev => prev + 1); setCurrentCefrLevel(prev => Math.min(prev + 1, 4)); setMockingMsg(null); 
        setActiveTurnEntity('player');
        setShowActionChoice(true);
    } else { 
        setStreak(0); setCurrentCefrLevel(prev => Math.max(prev - 1, 0)); 
        if (question && question.correctAnswer) {
            const mistake: MistakeRecord = {
                id: `${question.id}-${Date.now()}`,
                questionId: question.id,
                questionPrompt: question.prompt,
                correctAnswer: question.correctAnswer,
                explanation: question.explanation || 'No explanation provided.',
                type: question.type,
                difficultyLevel: CEFR_LEVELS[currentCefrLevel],
                timestamp: Date.now(),
                mistakeCount: 1
            };
            const savedMistakes: MistakeRecord[] = JSON.parse(localStorage.getItem('rpg_battle_mistakes') || '[]');
            const existing = savedMistakes.find(m => m.questionId === question.id);
            if (existing) {
                existing.mistakeCount++;
                existing.timestamp = Date.now();
            } else {
                savedMistakes.push(mistake);
            }
            localStorage.setItem('rpg_battle_mistakes', JSON.stringify(savedMistakes));
        } 
        setWrongAnswerFeedback({ correctAnswer: question?.correctAnswer || "Unknown", explanation: question?.explanation }); 
        
        if (enemies.length > 0) {
            const line = MOCKING_DATA.mocking_lines[Math.floor(Math.random() * MOCKING_DATA.mocking_lines.length)];
            setMockingMsg({ id: enemies[0].id, text: line, visible: true });
        }
    }
  };

  const handleEnemyTurn = async () => {
      setGamePhase('enemy_turn');
      setTurnProcessing(true);
      setWrongAnswerFeedback(null);
      setSelectingTarget(false);
      setSelectedSkill(null);

      await new Promise(r => setTimeout(r, 1000));

      const livingEnemies = enemiesRef.current.filter(e => e.currentHp > 0);

      let burnRes = 0;
      let freezeRes = 0;
      let thunderRes = 0;

      (Object.values(player.equipment) as (RPGItem | null)[]).forEach(item => {
          if (item && item.perk) {
              if (item.perk.type === 'burn_res') burnRes += item.perk.value;
              if (item.perk.type === 'freeze_res') freezeRes += item.perk.value;
              if (item.perk.type === 'def_red_res') thunderRes += item.perk.value;
          }
      });

      for (const enemy of livingEnemies) {

          let skipTurn = false;
          if (enemy.statusEffects.frozen > 0) {
              setEnemies(prev => prev.map(e => e.id === enemy.id ? { ...e, statusEffects: { ...e.statusEffects, frozen: e.statusEffects.frozen - 1 } } : e));
              showDamageFloat(enemy.id, "FROZEN", true);
              await new Promise(r => setTimeout(r, 800));
              skipTurn = true;
          }

          if (enemy.statusEffects.burning > 0) {
              const burnDmg = Math.floor(enemy.statusEffects.burning);
              enemy.currentHp -= burnDmg; 
              setEnemies(prev => prev.map(e => e.id === enemy.id ? { ...e, currentHp: Math.max(0, e.currentHp - burnDmg) } : e));
              showDamageFloat(enemy.id, `${burnDmg} BURN`, true);
              if (enemy.currentHp <= 0) continue; 
          }

          if (enemy.statusEffects.defReductionTimer > 0) {
               setEnemies(prev => prev.map(e => e.id === enemy.id ? {...e, statusEffects: {...e.statusEffects, defReductionTimer: e.statusEffects.defReductionTimer - 1, defReduction: e.statusEffects.defReductionTimer === 1 ? 0 : e.statusEffects.defReduction}} : e));
          }

          if (skipTurn) continue;

          setActingEntity(enemy.id);
          
          let target: 'player' | 'pet' = 'player';
          if (player.hp <= 0) {
              target = 'pet';
          } else if (activePet && activePet.hp > 0 && Math.random() < 0.4) {
              target = 'pet';
          }

          if (target === 'pet' && (!activePet || activePet.hp <= 0)) {
            target = 'player';
          }

          const availableSkills = enemy.skills.proactives.filter(s => enemy.currentMana >= ELEMENT_INFO[s].cost);
          const skillToUse = (availableSkills.length > 0 && Math.random() < 0.5) 
              ? availableSkills[Math.floor(Math.random() * availableSkills.length)] 
              : null;
          
          if (skillToUse) {
              setEnemyActionType('cast');
              const skillInfo = ELEMENT_INFO[skillToUse];
              
              setIsCasting(true);
              const vfxType = skillToUse === 'light' ? 'healing' : skillToUse;
              const vfxUrl = skillToUse === 'light' ? VFX_URLS.healing : VFX_URLS[skillToUse as 'fire' | 'ice' | 'thunder'];
              const vfxTarget = skillToUse === 'light' ? enemy.id : (target === 'player' ? 'player' : 'pet');
              setActiveVfx({ url: vfxUrl, type: vfxType, targetId: vfxTarget as any });
              
              await new Promise(r => setTimeout(r, 1500));
              setIsCasting(false);
              setActiveVfx(null);

              setEnemies(prev => prev.map(e => e.id === enemy.id ? { ...e, currentMana: Math.max(0, e.currentMana - skillInfo.cost) } : e));

              if (skillToUse === 'light') {
                   const healAmt = Math.floor(enemy.maxHp * 0.3);
                   setEnemies(prev => prev.map(e => e.id === enemy.id ? { ...e, currentHp: Math.min(e.maxHp, e.currentHp + healAmt) } : e));
                   showDamageFloat(enemy.id, `+${healAmt}`, false);
              } else {
                  const stats = calculateStats();
                  const targetDef = target === 'player' ? stats.def : (activePet?.def || 0);
                  let rawDmg = enemy.atk;
                  if (skillToUse === 'fire') rawDmg *= 1.5;
                  if (skillToUse === 'ice') rawDmg *= 0.8;
                  if (skillToUse === 'thunder') rawDmg *= 1.2;
                  const damage = Math.max(1, Math.floor(rawDmg - (targetDef * 0.3)));
                  
                  if (target === 'player') {
                       setPlayerHurt(true);
                       setCombatAnim('hurt');
                       setPlayer(prev => {
                           let newHp = prev.hp - damage;
                           let newStatus = {...prev.statusEffects};
                           
                           if (skillToUse === 'ice') {
                               let freezeChance = 0.3 * (1 - (freezeRes / 100));
                               if (Math.random() < freezeChance) newStatus.frozen = 2;
                           }
                           if (skillToUse === 'fire') {
                               let burnAmount = Math.floor(enemy.atk * 0.2);
                               burnAmount = Math.floor(burnAmount * (1 - (burnRes / 100)));
                               if (burnAmount > 0) newStatus.burning += burnAmount;
                           }
                           if (skillToUse === 'thunder') {
                               let defRedChance = 1.0 * (1 - (thunderRes / 100));
                               if (Math.random() < defRedChance) newStatus.defReductionTimer = 2;
                           }

                           return { ...prev, hp: Math.max(0, newHp), statusEffects: newStatus };
                       });
                       showDamageFloat('player', `-${damage} (${skillInfo.name})`, true);
                       setTimeout(() => { setPlayerHurt(false); setCombatAnim('idle'); }, 500);
                  } else if (activePet) {
                       setPlayer(prev => ({
                           ...prev,
                           pets: prev.pets.map(p => p.id === activePet.id ? { ...p, hp: Math.max(0, p.hp - damage) } : p)
                       }));
                       showDamageFloat('pet', `-${damage}`, true);
                  }
              }

          } else {
              setEnemyActionType('attack');
              await new Promise(r => setTimeout(r, 600)); 

              const stats = calculateStats();
              const targetDef = target === 'player' ? stats.def : (activePet?.def || 0);
              const rawDmg = enemy.atk;
              const variance = 0.9 + Math.random() * 0.2;
              const damage = Math.max(1, Math.floor((rawDmg * variance) - (targetDef * 0.3)));

              if (target === 'player') {
                  const windLevel = player.elemental.wind;
                  let dodgeChance = 0;
                  if (windLevel > 0) {
                      dodgeChance = (5 + (windLevel - 1) * 3) / 100;
                  }
                  
                  if (Math.random() < dodgeChance) {
                      showDamageFloat('player', 'EVADE!', true);
                  } else {
                    setPlayerHurt(true);
                    setCombatAnim('hurt');
                    setPlayer(prev => ({ ...prev, hp: Math.max(0, prev.hp - damage) }));
                    showDamageFloat('player', `-${damage}`, true);
                    setTimeout(() => {
                        setPlayerHurt(false);
                        setCombatAnim('idle');
                    }, 500);
                  }
              } else if (activePet) {
                  const windLevel = activePet.skills.elementalLevel || 1;
                  let dodgeChance = 0;
                  if (activePet.skills.passives.includes('wind')) {
                      dodgeChance = (5 + (windLevel - 1) * 3) / 100;
                  }

                  if (Math.random() < dodgeChance) {
                      showDamageFloat('pet', 'EVADE!', true);
                  } else {
                    setPlayer(prev => ({
                        ...prev,
                        pets: prev.pets.map(p => p.id === activePet.id ? { ...p, hp: Math.max(0, p.hp - damage) } : p)
                    }));
                    showDamageFloat('pet', `-${damage}`, true);
                  }
              }
              setScreenShake(true);
              setTimeout(() => setScreenShake(false), 500);
          }

          await new Promise(r => setTimeout(r, 800)); 
          setActingEntity(null);
      }

      setTurnProcessing(false);

      if (player.hp <= 0 && (!activePet || activePet.hp <= 0)) { 
          handleDefeatTrigger();
      } else {
          let nextQ: BattleQuestion | null = null;
          if (questionQueue.current.length > 0) {
              const item = questionQueue.current.shift();
              if (item) nextQ = item.data.question;
              replenishQuestionQueue();
          } else {
              const type = QUESTION_TYPES[Math.floor(Math.random() * QUESTION_TYPES.length)];
              try {
                  const data = await generateBattleQuestion(currentCefrLevel, type, history);
                  nextQ = data.question;
              } catch (e) {
                  console.error(e);
              }
          }

          if (nextQ) {
              setQuestion(nextQ);
              setShuffledOptions(nextQ.options ? [...nextQ.options].sort(() => Math.random() - 0.5) : []);
              setActiveTurnEntity('player'); 
              setGamePhase('player_turn');
          } else {
              setActiveTurnEntity('player');
              setGamePhase('player_turn'); 
          }
      }
  };

  const executePetAction = async (skillKey: keyof typeof ELEMENT_INFO | 'normal', targetId: string | 'all' | 'player' | 'pet' | null) => {
      if (!activePet) return;
      setShowActionChoice(false);
      setMockingMsg(null);

      let cost = 0;
      if (skillKey !== 'normal') {
          const info = ELEMENT_INFO[skillKey as keyof typeof ELEMENT_INFO];
          if (info && 'cost' in info) cost = info.cost;
      }
      
      if (activePet.mana < cost) return;

      if (cost > 0) {
          setPlayer(prev => ({
              ...prev,
              pets: prev.pets.map(p => p.id === activePet.id ? { ...p, mana: p.mana - cost } : p)
          }));
      }

      let targetEnemies: RPGEnemy[] = [];
      if (targetId === 'all') {
          targetEnemies = enemies.filter(e => e.currentHp > 0);
      } else if (targetId && targetId !== 'player' && targetId !== 'pet') {
          const t = enemies.find(e => e.id === targetId);
          if (t) targetEnemies = [t];
      } else if (!targetId && skillKey !== 'light') {
          const t = enemies.find(e => e.currentHp > 0);
          if (t) targetEnemies = [t];
      }

      if (skillKey === 'light') {
          setIsCasting(true);
          setActiveVfx({ url: VFX_URLS.healing, type: 'healing', targetId: targetId as any });
          const healPercent = 20 + (activePet.skills.elementalLevel || 1) * 3;
          
          if (targetId === 'player') {
              const stats = calculateStats();
              const healAmount = Math.floor(stats.maxHp * (healPercent / 100));
              setPlayer(p => ({ ...p, hp: Math.min(stats.maxHp, p.hp + healAmount) }));
              showDamageFloat('player', `+${healAmount}`, false);
          } else if (targetId === 'pet' && activePet) {
              const healAmount = Math.floor(activePet.maxHp * (healPercent / 100));
              setPlayer(prev => ({
                  ...prev,
                  pets: prev.pets.map(p => p.id === activePet.id ? { ...p, hp: Math.min(p.maxHp, p.hp + healAmount) } : p)
              }));
              showDamageFloat('pet', `+${healAmount}`, false);
          }

          await new Promise(r => setTimeout(r, 2000));
          setIsCasting(false);
          setActiveVfx(null);
          setTimeout(handleEnemyTurn, 500);
          return;
      }

      if (skillKey === 'normal' && targetId) {
        const t = enemies.find(e => e.id === targetId);
        if (t) targetEnemies = [t];
      }
      if(targetEnemies.length === 0) {
        if (skillKey !== 'ice') {
            setShowActionChoice(true);
            return;
        }
      }

      setPetApproaching(true);
      await new Promise(r => setTimeout(r, 1000));
      setPetApproaching(false);

      if (skillKey !== 'normal') {
          setIsCasting(true);
          setActiveVfx({ 
              url: VFX_URLS[skillKey as keyof typeof VFX_URLS], 
              type: skillKey as any, 
              targetId: targetId as any
          });
          await new Promise(r => setTimeout(r, 2000)); 
          setIsCasting(false); setActiveVfx(null);
      }

      const stats = activePet;
      let baseDmg = stats.atk;
      let burnDmgToAdd = 0;
      let freezeChance = 0;
      let thunderSplash = 0;
      let defDrop = 0;
      const skillLevel = stats.skills.elementalLevel || 1;

      if (skillKey === 'fire') {
          baseDmg = Math.floor(baseDmg * 1.5);
          burnDmgToAdd = Math.floor(stats.atk * (20 + (skillLevel - 1) * 10) / 100);
      } else if (skillKey === 'ice') {
          baseDmg = Math.floor(baseDmg * 0.2); 
          freezeChance = (40 + (skillLevel - 1) * 5) / 100;
      } else if (skillKey === 'thunder') {
          thunderSplash = (50 + (skillLevel - 1) * 10) / 100;
          defDrop = 10 + (skillLevel - 1) * 2;
      }

      let enemyStillAlive = false;
      let anyCrit = false;
      let totalDamageDealt = 0;

      let finalCritChance = stats.critChance; // Base crit chance
      if (stats.perk?.type === 'critChance') {
          finalCritChance += stats.perk.value; // Additive
      }

      setEnemies(prev => {
          let currentEnemies = [...prev];
          
          const applyDamage = (e: RPGEnemy, dmg: number) => {
              if (e.currentHp <= 0) return;
              const windLevel = e.skills.elementalLevel || 1;
              let dodgeChance = 0;
              if (e.skills.passives.includes('wind')) {
                  dodgeChance = (5 + (windLevel - 1) * 3) / 100;
              }
              if (Math.random() < dodgeChance) {
                  showDamageFloat(e.id, 'EVADE!', true);
                  return;
              }

              const actualDmg = Math.max(1, dmg - Math.floor(e.def * 0.5)); 
              
              let isCrit = Math.random() < (finalCritChance / 100);
              const finalDmg = isCrit ? Math.floor(actualDmg * 1.5) : actualDmg;
              totalDamageDealt += finalDmg; 

              if (isCrit) {
                  anyCrit = true;
                  setCritTarget(e.id);
                  setTimeout(() => setCritTarget(null), 1000);
              }
              
              e.currentHp = Math.max(0, e.currentHp - finalDmg);
              showDamageFloat(e.id, `-${finalDmg}`, isCrit);
          };

          if (skillKey === 'ice') {
              currentEnemies.forEach(e => {
                  if (e.currentHp > 0) {
                      applyDamage(e, baseDmg);
                      if (Math.random() < freezeChance) {
                          e.statusEffects.frozen = 3; 
                          showDamageFloat(e.id, "FROZEN", true);
                      }
                  }
              });
          } else if (skillKey === 'thunder') {
              const splashDmg = Math.floor(baseDmg * thunderSplash);
              currentEnemies.forEach(e => {
                  if(e.currentHp > 0) {
                       if (e.id === targetId) {
                           applyDamage(e, baseDmg);
                       } else {
                           applyDamage(e, splashDmg);
                       }
                       if (defDrop > 0) {
                          e.statusEffects.defReduction = defDrop;
                          e.statusEffects.defReductionTimer = 3;
                       }
                  }
              });
          } else {
               targetEnemies.forEach(e => {
                   const enemyIndex = currentEnemies.findIndex(ce => ce.id === e.id);
                   if(enemyIndex !== -1) {
                       const mainT = currentEnemies[enemyIndex];
                       if(mainT.currentHp > 0) {
                           applyDamage(mainT, baseDmg);
                           if (skillKey === 'fire' && burnDmgToAdd > 0) {
                               mainT.statusEffects.burning += burnDmgToAdd;
                               showDamageFloat(mainT.id, "BURN", true);
                           }
                       }
                   }
               });
          }
          
          enemyStillAlive = currentEnemies.some(e => e.currentHp > 0);
          return currentEnemies;
      });

      if (activePet.skills.passives.includes('dark') && totalDamageDealt > 0) {
        const skillLevel = activePet.skills.elementalLevel || 1;
        const lifeStealPercent = (5 + (skillLevel - 1) * 3) / 100;
        const healAmount = Math.max(1, Math.floor(totalDamageDealt * lifeStealPercent));
        if (healAmount > 0) {
            setPlayer(prev => ({
                ...prev,
                pets: prev.pets.map(p => p.id === activePet.id ? { ...p, hp: Math.min(p.maxHp, p.hp + healAmount) } : p)
            }));
            setTimeout(() => showDamageFloat('pet', `+${healAmount} STEAL`, false), 200);
        }
      }

      if (anyCrit) {
          setScreenShake(true); 
          setTimeout(() => setScreenShake(false), 800);
      }

      setTimeout(() => {
          if (!enemyStillAlive) {
              handleVictoryTrigger();
          } else {
              handleEnemyTurn();
          }
      }, 600);
  };

  const preparePlayerAction = (skillKey: keyof typeof ELEMENT_INFO | 'normal' | 'capture') => {
      if (skillKey === 'ice') { 
           executePlayerAction(skillKey, 'all');
           return;
      }
      setSelectingTarget(true);
      setSelectedSkill(skillKey);
      setShowActionChoice(false);
  };

  const preparePetAction = (skillKey: keyof typeof ELEMENT_INFO | 'normal') => {
      if (skillKey === 'ice') { 
           executePetAction(skillKey, 'all');
           return;
      }
      setSelectingTarget(true);
      setSelectedSkill(skillKey);
      setShowActionChoice(false);
  };

  const handleEnemyClick = (targetId: string) => {
      if (gamePhase === 'player_turn' && activeTurnEntity === 'pet' && !selectingTarget && !turnProcessing) {
        executePetAction('normal', targetId);
        return;
      }
      if (selectingTarget && selectedSkill) {
          if (activeTurnEntity === 'player') {
             executePlayerAction(selectedSkill as any, targetId);
          } else {
             executePetAction(selectedSkill as any, targetId);
          }
          setSelectingTarget(false);
          setSelectedSkill(null);
      }
  };

  const handleAllyClick = (targetType: 'player' | 'pet') => {
      if (selectingTarget && selectedSkill === 'light') {
          if (targetType === 'pet' && !activePet) return;
          if (targetType === 'pet' && activePet && activePet.hp <= 0) return;

          if (activeTurnEntity === 'player') {
             executePlayerAction('light', targetType);
          } else if (activeTurnEntity === 'pet') {
             executePetAction('light', targetType);
          }
          setSelectingTarget(false);
          setSelectedSkill(null);
      }
  };
  
  const executePlayerAction = async (skillKey: keyof typeof ELEMENT_INFO | 'normal' | 'capture', targetId: string | 'all' | 'player' | 'pet' | null) => {
    setShowActionChoice(false); 
    setMockingMsg(null);
    
    const proceedToNextTurn = () => {
        if (activePet && activePet.hp > 0) {
            if (activePet.statusEffects?.frozen > 0) {
                 setPlayer(prev => ({
                     ...prev,
                     pets: prev.pets.map(p => {
                         if(p.id === activePet.id) {
                             return { ...p, statusEffects: { ...p.statusEffects, frozen: Math.max(0, (p.statusEffects?.frozen || 0) - 1) } }
                         }
                         return p;
                     })
                 }));
                 showDamageFloat('pet', "FROZEN!", true);
                 setTimeout(handleEnemyTurn, 1000);
            } else {
                 setActiveTurnEntity('pet');
                 setShowActionChoice(true);
                 setTurnProcessing(false);
            }
        } else {
            handleEnemyTurn();
        }
    };

    if (skillKey === 'light') {
        if (player.mana < ELEMENT_INFO.light.cost) return;
        setIsCasting(true);
        setCombatAnim('cast');
        setActiveVfx({ url: VFX_URLS.healing, type: 'healing', targetId: targetId as any });

        const healPercent = 20 + (player.elemental.light - 1) * 3;
        
        setPlayer(p => ({ ...p, mana: Math.max(0, p.mana - ELEMENT_INFO.light.cost) }));

        if (targetId === 'player') {
            const stats = calculateStats();
            const healAmount = Math.floor(stats.maxHp * (healPercent / 100));
            setPlayer(p => ({ ...p, hp: Math.min(stats.maxHp, p.hp + healAmount) }));
            showDamageFloat('player', `+${healAmount}`, false);
        } else if (targetId === 'pet' && activePet) {
            const healAmount = Math.floor(activePet.maxHp * (healPercent / 100));
            setPlayer(prev => ({
                ...prev,
                pets: prev.pets.map(p => p.id === activePet.id ? { ...p, hp: Math.min(p.maxHp, p.hp + healAmount) } : p)
            }));
            showDamageFloat('pet', `+${healAmount}`, false);
        }

        await new Promise(r => setTimeout(r, 2200));
        setIsCasting(false); 
        setActiveVfx(null);
        setCombatAnim('idle');
        
        proceedToNextTurn();
        return;
    }

    let targetEnemies: RPGEnemy[] = [];
    if (targetId === 'all') {
        targetEnemies = enemies.filter(e => e.currentHp > 0);
    } else if (targetId && targetId !== 'player' && targetId !== 'pet') {
        const t = enemies.find(e => e.id === targetId);
        if (t) targetEnemies = [t];
    } else if (!targetId) {
        const t = enemies.find(e => e.currentHp > 0);
        if (t) targetEnemies = [t];
    }

    if (skillKey === 'normal' && targetId) {
        const t = enemies.find(e => e.id === targetId);
        if (t) targetEnemies = [t];
    }

    if (targetEnemies.length === 0) {
        if (skillKey !== 'ice') { 
            setShowActionChoice(true);
            return;
        }
    }


    if (skillKey === 'capture') {
        const target = targetEnemies[0];
        if (player.mana < 100 || player.pets.length >= 5) return;
        setPlayer(p => ({ ...p, mana: p.mana - 100 }));
        
        setIsCasting(true);
        setActiveVfx({ 
            url: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/special%20effect/Capture.gif", 
            type: 'capture', 
            targetId: target.id 
        });

        await new Promise(r => setTimeout(r, 3000));
        
        setIsCasting(false);
        setActiveVfx(null);

        const successChance = (1 - (target.currentHp / target.maxHp)) * 0.8 + 0.1;
        
        if (Math.random() < successChance) {
            showDamageFloat(target.id, "CAPTURED!", true);

            const BASE_HP = 120;
            const BASE_MANA = 60;
            const BASE_ATK = 12;
            const BASE_DEF = 6;
            
            let finalHp = BASE_HP, finalMana = BASE_MANA, finalAtk = BASE_ATK, finalDef = BASE_DEF;

            if (target.perk) {
                if (target.perk.type === 'hp') finalHp = Math.floor(finalHp * (1 + target.perk.value / 100));
                if (target.perk.type === 'mana') finalMana = Math.floor(finalMana * (1 + target.perk.value / 100));
                if (target.perk.type === 'atk') finalAtk = Math.floor(finalAtk * (1 + target.perk.value / 100));
                if (target.perk.type === 'def') finalDef = Math.floor(finalDef * (1 + target.perk.value / 100));
            }

            const newPet: RPGPet = {
                id: Math.random().toString(36).substr(2, 9),
                name: target.name,
                originalName: target.name,
                class: target.class,
                level: 0, 
                xp: 0, maxXp: 100, 
                hp: finalHp, maxHp: finalHp,
                mana: finalMana, maxMana: finalMana,
                atk: finalAtk, def: finalDef,
                critChance: 10,
                growthFactor: 1.0 + Math.random() * 0.3, 
                description: target.description,
                featureBonus: target.featureBonus,
                perk: target.perk,
                statPoints: 0,
                skills: target.skills || { proactives: [], passives: [], elementalLevel: 0 },
                spriteUrl: target.allySpriteUrl 
            };
            setPlayer(p => ({ ...p, pets: [...p.pets, newPet] })); 
            
            await new Promise(r => setTimeout(r, 1200));

            setEnemies(prev => prev.map(e => e.id === target.id ? { ...e, currentHp: 0 } : e));
            
            const remaining = enemies.filter(e => e.id !== target.id && e.currentHp > 0);
            if (remaining.length === 0) {
                 handleVictoryTrigger();
                 return;
            } else {
                 setTimeout(proceedToNextTurn, 500); 
                 return;
            }
        } else {
            showDamageFloat(target.id, "FAILED!", false);
            setTimeout(proceedToNextTurn, 1200);
        }
        return;
    }
    
    if (skillKey === 'normal') {
        setCombatAnim('walk'); setIsApproaching(true);
        await new Promise(r => setTimeout(r, 600)); 
        setCombatAnim('attack'); setActingEntity('player');
        await new Promise(r => setTimeout(r, 600)); 
        setCombatAnim('walk'); setIsApproaching(false);
        await new Promise(r => setTimeout(r, 600)); 
        setCombatAnim('idle'); setActingEntity(null);
    } else {
        setIsCasting(true); 
        setCombatAnim('attack');
        setActiveVfx({ 
            url: VFX_URLS[skillKey as keyof typeof VFX_URLS], 
            type: skillKey as any, 
            targetId: targetId 
        });
        await new Promise(r => setTimeout(r, 2000)); 
        setIsCasting(false); setActiveVfx(null); setCombatAnim('idle');
    }

    const stats = calculateStats();
    let baseDmg = Math.floor(stats.atk * (1 + (currentCefrLevel * 0.1)) * (1 + (streak * 0.1)));
    
    let burnDmgToAdd = 0;
    let freezeChance = 0;
    let thunderSplash = 0;
    let defDrop = 0;

    if (skillKey === 'fire') {
        baseDmg = Math.floor(baseDmg * 1.5);
        burnDmgToAdd = Math.floor(stats.atk * (20 + (player.elemental.fire - 1) * 10) / 100);
        setPlayer(p => ({ ...p, mana: Math.max(0, p.mana - ELEMENT_INFO.fire.cost) }));
    } else if (skillKey === 'ice') {
        baseDmg = Math.floor(baseDmg * 0.2); 
        freezeChance = (40 + (player.elemental.ice - 1) * 5) / 100;
        setPlayer(p => ({ ...p, mana: Math.max(0, p.mana - ELEMENT_INFO.ice.cost) }));
    } else if (skillKey === 'thunder') {
        thunderSplash = (50 + (player.elemental.thunder - 1) * 10) / 100;
        defDrop = 10 + (player.elemental.thunder - 1) * 2;
        setPlayer(p => ({ ...p, mana: Math.max(0, p.mana - ELEMENT_INFO.thunder.cost) }));
    }

    let enemyStillAlive = false;
    let anyCrit = false;
    let totalDamageDealt = 0;

    setEnemies(prev => {
        let currentEnemies = [...prev];
        
        const applyDamage = (e: RPGEnemy, dmg: number) => {
            if (e.currentHp <= 0) return;
            const windLevel = e.skills.elementalLevel || 1;
            let dodgeChance = 0;
            if (e.skills.passives.includes('wind')) {
                dodgeChance = (5 + (windLevel - 1) * 3) / 100;
            }

            if (Math.random() < dodgeChance) {
                showDamageFloat(e.id, 'EVADE!', true);
                return;
            }
            
            let critChance = 0;
            (Object.values(player.equipment) as (RPGItem | null)[]).forEach(item => {
                if(item?.perk?.type === 'crit_chance') critChance += item.perk.value;
            });

            let armorPen = 0;
            (Object.values(player.equipment) as (RPGItem | null)[]).forEach(item => {
                if(item?.perk?.type === 'armor_pen') armorPen += item.perk.value;
            });
            const armorIgnorance = armorPen / 100;

            const actualDmg = Math.max(1, dmg - Math.floor(e.def * (1 - armorIgnorance) * 0.5));
            
            let isCrit = Math.random() < (critChance/100);
            const finalDmg = isCrit ? Math.floor(actualDmg * 1.5) : actualDmg;

            totalDamageDealt += finalDmg;
            
            if (isCrit) {
                anyCrit = true;
                setCritTarget(e.id);
                setTimeout(() => setCritTarget(null), 1000);
            }
            
            e.currentHp = Math.max(0, e.currentHp - finalDmg);
            showDamageFloat(e.id, `-${finalDmg}`, isCrit);
        };

        if (skillKey === 'ice') {
            currentEnemies.forEach(e => {
                if (e.currentHp > 0) {
                    applyDamage(e, baseDmg);
                    if (Math.random() < freezeChance) {
                        e.statusEffects.frozen = 3; 
                        showDamageFloat(e.id, "FROZEN", true);
                    }
                }
            });
        } else if (skillKey === 'thunder') {
            const splashDmg = Math.floor(baseDmg * thunderSplash);
            currentEnemies.forEach(e => {
                if(e.currentHp > 0) {
                     if (e.id === targetId) {
                         applyDamage(e, baseDmg);
                     } else {
                         applyDamage(e, splashDmg);
                     }
                     if (defDrop > 0) {
                        e.statusEffects.defReduction = defDrop;
                        e.statusEffects.defReductionTimer = 3;
                     }
                }
            });
        } else {
             targetEnemies.forEach(e => {
                 const enemyIndex = currentEnemies.findIndex(ce => ce.id === e.id);
                 if(enemyIndex !== -1) {
                     const mainT = currentEnemies[enemyIndex];
                     if(mainT.currentHp > 0) {
                         applyDamage(mainT, baseDmg);
                         if (skillKey === 'fire' && burnDmgToAdd > 0) {
                             mainT.statusEffects.burning += burnDmgToAdd;
                             showDamageFloat(mainT.id, "BURN", true);
                         }
                     }
                 }
             });
        }
        
        enemyStillAlive = currentEnemies.some(e => e.currentHp > 0);
        return currentEnemies;
    });

    if (player.elemental.dark > 0 && totalDamageDealt > 0) {
        const darkLevel = player.elemental.dark;
        const lifeStealPercent = (5 + (darkLevel - 1) * 3) / 100;
        const healAmount = Math.max(1, Math.floor(totalDamageDealt * lifeStealPercent));
        if (healAmount > 0) {
            const currentStats = calculateStats();
            setPlayer(p => ({...p, hp: Math.min(currentStats.maxHp, p.hp + healAmount)}));
            setTimeout(() => showDamageFloat('player', `+${healAmount} STEAL`, false), 200);
        }
    }

    if (skillKey !== 'normal' || anyCrit) {
        setScreenShake(true); 
        setTimeout(() => setScreenShake(false), 800);
    }
    
    setMockingMsg(null);
    setTimeout(() => { 
        setTurnProcessing(false); 
        if (!enemyStillAlive) {
            handleVictoryTrigger();
        } else {
            proceedToNextTurn();
        }
    }, 600);
  };

  const handleBossTrivia = (correct: boolean) => {
    finalizeVictory(correct);
  };

  const handleExitToLobby = () => {
      setShowExitConfirm(false);
      setGamePhase('lobby');
      setEnemies([]);
      setQuestion(null);
      const stats = calculateStats();
      setPlayer(prev => ({ ...prev, hp: stats.maxHp, mana: stats.maxMana }));
  };

  const claimVictory = () => {
      setGamePhase('lobby');
      setVictoryData(null);
      setLootRevealedCount(0);
      setEnemies([]);
      setQuestion(null);
      const stats = calculateStats();
      
      setPlayer(prev => ({ 
          ...prev, 
          hp: stats.maxHp, 
          mana: stats.maxMana,
          pets: prev.pets.map(p => ({...p, hp: p.maxHp, mana: p.maxMana})) 
      }));
  };

  const equipItem = (item: RPGItem) => {
      setPlayer(prev => {
          const current = prev.equipment[item.type];
          const newInv = prev.inventory.filter(i => i.id !== item.id);
          if (current) newInv.push(current);
          return { ...prev, inventory: newInv, equipment: { ...prev.equipment, [item.type]: item } };
      });
      setSelectedInventoryItem(null); 
  };

  const unequipItem = (item: RPGItem) => {
      setPlayer(prev => {
          const newInv = [...prev.inventory, item];
          return { ...prev, inventory: newInv, equipment: { ...prev.equipment, [item.type]: null } };
      });
      setSelectedInventoryItem(null);
  }
  
  const handleFodderToggle = (item: RPGItem) => {
      if (!selectedInventoryItem || item.id === selectedInventoryItem.id || item.type !== selectedInventoryItem.type) return;
      setForgeFodder(prev => prev.find(f => f.id === item.id) ? prev.filter(f => f.id !== item.id) : prev.length >= 2 ? prev : [...prev, item]);
  };

  const displayedStablesPet = useMemo(() => player.pets.find(p => p.id === selectedPetId) || player.pets[0] || null, [player.pets, selectedPetId]);

  return (
    <div className="fixed inset-0 z-[100] bg-black text-white flex flex-col font-mono animate-fade-in overflow-hidden">
      <style>{`
        @keyframes lunge-left { 0% { transform: translateX(0); } 50% { transform: translateX(-60px); } 100% { transform: translateX(0); } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); } 20%, 40%, 60%, 80% { transform: translateX(10px); } }
        @keyframes pop-in { 0% { transform: scale(0.8); opacity: 0; } 70% { transform: scale(1.1); } 100% { transform: scale(1); opacity: 1; } }
        @keyframes aura-breathe { 0%, 100% { box-shadow: 0 0 20px rgba(99,102,241,0.2); } 50% { box-shadow: 0 0 50px rgba(99,102,241,0.4); } }
        @keyframes slot-roll { 0% { transform: translateY(0); } 100% { transform: translateY(-500px); } }
        @keyframes shock-flash { 0% { background: white; opacity: 0.5; } 100% { background: transparent; opacity: 0; } }
        @keyframes float-up {
            0% { transform: translate(-50%, 0) scale(1); opacity: 1; }
            100% { transform: translate(-50%, -60px) scale(1.2); opacity: 0; }
        }
        @keyframes casino-spin {
          0% { transform: rotateX(0deg) scale(1); border-color: #6366f1; }
          25% { transform: rotateX(180deg) scale(1.1); border-color: #eab308; }
          50% { transform: rotateX(360deg) scale(1); border-color: #ef4444; }
          75% { transform: rotateX(540deg) scale(1.1); border-color: #22c55e; }
          100% { transform: rotateX(720deg) scale(1); border-color: #6366f1; }
        }
        
        .animate-casino { animation: casino-spin 0.5s linear infinite; }
        
        @keyframes hero-idle-frames { 0% { transform: translateX(0); } 100% { transform: translateX(-288px); } }
        @keyframes hero-attack-frames { 0% { transform: translateX(0); } 100% { transform: translateX(-288px); } }
        @keyframes hero-walk-frames { 0% { transform: translateX(0); } 100% { transform: translateX(-288px); } }
        @keyframes hero-hurt-frames { 0% { transform: translateX(0); } 100% { transform: translateX(-288px); } }
        @keyframes hero-die-frames { 0% { transform: translateX(0); } 100% { transform: translateX(-288px); } }
        
        .hero-idle { animation: hero-idle-frames 2.4s steps(6) infinite; }
        .hero-attack { animation: hero-attack-frames 0.6s steps(6) forwards; }
        .hero-walk { animation: hero-walk-frames 0.6s steps(6) infinite; }
        .hero-hurt { animation: hero-hurt-frames 1s steps(6) infinite; }
        .hero-die { animation: hero-die-frames 2.4s steps(6) forwards; }
        
        .animate-float-up { animation: float-up 1.5s ease-out forwards; }
        .animate-slot-roll { animation: slot-roll 0.2s linear infinite; }
        .animate-lunge-left { animation: lunge-left 0.6s ease-in-out; }
        .animate-shake-screen { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both; }
        .animate-pop-in { animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-aura { animation: aura-breathe 3s ease-in-out infinite; }
        .animate-shock-flash { animation: shock-flash 0.3s ease-out forwards; }
        .rendering-pixelated { image-rendering: pixelated; }
        
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(99,102,241, 0.3); border-radius: 10px; }
      `}</style>
      
      {tooltipData && <FixedTooltip content={tooltipData.content} x={tooltipData.x} y={tooltipData.y} />}

      {gamePhase !== 'lobby' && (
          <div className={`p-4 border-b border-white/5 flex justify-between items-center z-50 transition-all duration-300 bg-black/10 backdrop-blur-sm`}>
             <div className="flex items-center gap-6 flex-1">
                 {/* Player Stats */}
                 <div className="flex flex-col gap-1 w-32">
                     <div className="flex items-center justify-between text-[8px] font-black uppercase text-indigo-300">
                         <span>Player</span>
                         <span>Lvl {player.level}</span>
                     </div>
                     <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${(player.hp / (calculateStats() as any).maxHp) * 100}%` }}></div>
                     </div>
                     <div className="h-1 bg-white/10 rounded-full overflow-hidden mt-0.5">
                         <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${(player.mana / (calculateStats() as any).maxMana) * 100}%` }}></div>
                     </div>
                 </div>

                 {/* Pet Stats (if active) */}
                 {activePet && (
                    <div className="flex flex-col gap-1 w-32 border-l border-white/10 pl-4">
                        <div className="flex items-center justify-between text-[8px] font-black uppercase text-amber-300">
                             <span>{activePet.name}</span>
                             <span>Lvl {activePet.level}</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${(activePet.hp / activePet.maxHp) * 100}%` }}></div>
                        </div>
                         <div className="h-1 bg-white/10 rounded-full overflow-hidden mt-0.5">
                             <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${(activePet.mana / activePet.maxMana) * 100}%` }}></div>
                         </div>
                    </div>
                 )}
             </div>

             <div className="flex items-center gap-4">
                  <button onClick={() => setShowExitConfirm(true)} className="px-4 py-1.5 bg-rose-600/10 border border-rose-500/40 rounded-lg text-rose-300 hover:bg-rose-600/30 transition-all text-xs font-black uppercase tracking-tighter flex items-center gap-2">
                      <LogOut className="w-3 h-3" />Leave
                  </button>
             </div>
          </div>
      )}
      
      {/* LOBBY TOP RIBBON */}
      {gamePhase === 'lobby' && (
          <div className="absolute top-0 left-0 right-0 p-4 z-50 flex justify-between items-center pointer-events-none">
                {lobbyView === 'main' ? (
                    <>
                        <div className="pointer-events-auto w-1/3">
                             <a 
                                href="https://forms.gle/MYq28vcvirpFtwuF6" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-slate-300 hover:bg-white/10 hover:text-white transition-all group shadow-lg"
                            >
                                <MsgIcon className="w-3 h-3 group-hover:text-indigo-400 transition-colors" />
                                Feedback
                            </a>
                        </div>
                        <div className="pointer-events-auto w-1/3 flex justify-center">
                            <div className="flex flex-col items-center group">
                                <div className="relative flex items-center gap-4 px-6 py-3 bg-slate-900/70 backdrop-blur-sm border-2 border-amber-500/50 rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300 group-hover:shadow-[0_0_45px_rgba(245,158,11,0.5)]">
                                    <FlameIcon className="w-10 h-10 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.9)] animate-pulse" />
                                    <span className="text-5xl font-black text-white tracking-tighter drop-shadow-lg">{globalStats.streak}</span>
                                </div>
                                <span className="mt-2 text-xs font-bold text-amber-300 uppercase tracking-widest drop-shadow-md">Day Streak</span>
                            </div>
                        </div>
                        <div className="pointer-events-auto w-1/3 flex justify-end">
                            <div className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/30 flex items-center gap-2">
                                <Coins className="w-4 h-4 text-amber-400" />
                                <span className="font-bold text-amber-100">{player.coins.toLocaleString()}</span>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                         <div className="flex items-center gap-3 pointer-events-auto">
                            <button onClick={() => setLobbyView('main')} className="p-3 bg-black/20 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors">
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="pointer-events-auto bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/30 flex items-center gap-2">
                            <Coins className="w-4 h-4 text-amber-400" />
                            <span className="font-bold text-amber-100">{player.coins.toLocaleString()}</span>
                        </div>
                    </>
                )}
          </div>
      )}

      {/* ... (Main game UI sections remain mostly the same) */}
      {gamePhase !== 'lobby' && (
          <div className={`flex-1 flex flex-col relative ${screenShake ? 'animate-shake-screen' : ''}`}>
               {/* ... (Battle UI code) ... */}
               <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                      src={currentBattleBg} 
                      className="w-full h-full object-fill rendering-pixelated" 
                      style={{ filter: 'brightness(0.6) contrast(1.1)' }}
                      alt="Battle Arena"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
               </div>
               <div className="absolute inset-0 z-[5]"><CosmicDust /></div>
               <div className={`absolute inset-0 z-[155] bg-black transition-opacity duration-1000 pointer-events-none ${isCasting && activeVfx?.type !== 'healing' && activeVfx?.type !== 'capture' ? 'opacity-80' : 'opacity-0'}`}></div>

               {/* Mocking Message */}
               {mockingMsg && mockingMsg.visible && (
                   <div className="absolute top-[20%] left-1/2 -translate-x-1/2 z-[200] pointer-events-none animate-pop-in">
                       <div className="bg-black/90 text-slate-300 px-4 py-2 rounded-xl border border-white/20 font-black text-sm uppercase tracking-wider shadow-lg max-w-[250px] text-center transform rotate-[-2deg]">
                           {mockingMsg.text}
                           <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/90 rotate-45 border-r border-b border-white/20"></div>
                       </div>
                   </div>
               )}

               {/* ... (Victory/Defeat/Battle Stage UI) ... */}
               {gamePhase === 'victory' && victoryData && (
                   <div className="fixed inset-0 z-[250] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-8 animate-fade-in">
                       <div className="max-w-xl w-full text-center space-y-4 overflow-y-auto custom-scrollbar h-fit max-h-[80vh] py-8 rounded-[3rem] border border-white/10">
                           <h2 className={`text-6xl font-black italic tracking-tighter uppercase ${victoryData.isDefeat ? 'text-rose-500' : 'text-emerald-400'}`}>
                               {victoryData.isDefeat ? 'Defeated' : 'Victory!'}
                           </h2>
                           <div className="flex justify-center gap-8 text-xl font-black">
                               <div className="flex flex-col items-center gap-1">
                                    <span className="text-purple-400">+{victoryData.xp.toLocaleString()} XP</span>
                                    <div className="w-24 h-1 bg-purple-500/30 rounded-full"><div className="h-full bg-purple-400 w-full"></div></div>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-amber-400">+{victoryData.coins.toLocaleString()} Coins</span>
                                    <div className="w-24 h-1 bg-amber-500/30 rounded-full"><div className="h-full bg-amber-400 w-full"></div></div>
                               </div>
                           </div>
                           
                           {/* Pet XP Result */}
                           {victoryData.petResult && (
                               <div className="flex items-center justify-center gap-4 bg-white/5 p-3 rounded-2xl mx-8 border border-white/10">
                                   <div className="relative">
                                       <div className="w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center border border-white/10">
                                           <img src={victoryData.petResult.sprite} className="w-full h-full object-contain rendering-pixelated" />
                                       </div>
                                       {victoryData.petResult.levelUp && (
                                           <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-[8px] font-black px-1.5 py-0.5 rounded animate-bounce">LEVEL UP!</div>
                                       )}
                                   </div>
                                   <div className="text-left">
                                       <p className="text-xs font-bold text-slate-300">{victoryData.petResult.name}</p>
                                       <p className="text-sm font-black text-emerald-400">+{victoryData.petResult.xp} XP</p>
                                   </div>
                               </div>
                           )}
                           
                           {/* Loop System / Wave Display */}
                           <div className="flex items-center justify-center gap-2 mt-2">
                               <Repeat className="w-4 h-4 text-slate-500" />
                               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Wave {activeWave} {victoryData.isDefeat ? 'Failed' : 'Complete'}</span>
                               {!victoryData.isDefeat && streak > 1 && <span className="text-xs font-black text-orange-500 ml-2">x{streak} Streak!</span>}
                           </div>

                            {victoryData.bonusLoot && (
                                <div className="bg-amber-500/10 border-2 border-amber-500/40 p-3 rounded-2xl animate-pop-in flex items-center justify-center gap-3 max-w-sm mx-auto">
                                    <Gift className="w-6 h-6 text-amber-400" />
                                    <p className="text-amber-300 font-bold text-sm">Trivia Bonus: +1 Loot Drop!</p>
                                </div>
                            )}

                           {victoryData.capturedPet && (
                               <div className="bg-rose-500/10 border-2 border-rose-500/40 p-4 rounded-3xl animate-pop-in flex items-center justify-center gap-4 max-w-sm mx-auto">
                                    <div className="w-16 h-16 bg-black/60 rounded-2xl border border-rose-500/30 p-2 flex items-center justify-center"><img src={victoryData.capturedPet.spriteUrl} className="w-full h-full object-contain rendering-pixelated" /></div>
                                    <div className="text-left"><p className="text-rose-400 text-[10px] font-black uppercase mb-1">New Ally Captured!</p><p className="text-xl font-black text-white">{victoryData.capturedPet.name}</p></div>
                               </div>
                           )}

                           <div className="p-6 bg-indigo-950/40 border-2 border-indigo-500/40 rounded-3xl text-left relative group mx-4">
                               <p className="text-[10px] text-indigo-400 uppercase font-black tracking-widest mb-2 flex items-center gap-2"><Award className="w-3 h-3" /> Learning Point</p>
                               <p className="text-xl font-black text-white mb-2 italic">"{victoryData.triviaReveal}"</p>
                               <p className="text-xs text-slate-300 font-medium">{victoryData.explanation}</p>
                           </div>
                           <div className="py-6">
                                {!victoryData.isDefeat && (
                                    <div className="flex justify-center gap-4 flex-wrap">
                                        {victoryData.items.map((item) => (
                                            <LootRevealCard 
                                                key={item.id} 
                                                item={item} 
                                                onReveal={() => { setLootRevealedCount(prev => prev + 1); setScreenShake(true); setTimeout(() => setScreenShake(false), 800); }} 
                                            />
                                        ))}
                                    </div>
                                )}
                                <div className="mt-8">
                                    <button onClick={claimVictory} disabled={!victoryData.isDefeat && lootRevealedCount < victoryData.items.length} className={`px-12 py-4 rounded-[2rem] text-2xl font-black uppercase italic transition-all shadow-xl border-4 ${!victoryData.isDefeat && lootRevealedCount < victoryData.items.length ? 'bg-slate-800 border-slate-700 text-slate-600' : victoryData.isDefeat ? 'bg-rose-600 border-rose-400 text-white' : 'bg-emerald-600 border-emerald-400 text-white animate-aura'}`}>{victoryData.isDefeat ? 'Try Again' : 'Continue'}</button>
                                </div>
                           </div>
                       </div>
                   </div>
               )}

               <div className="absolute inset-0 z-[10] pointer-events-none">
                   {/* ENEMIES STAGE */}
                   <div className="absolute top-[15%] right-[5%] w-[40%] h-[60%] grid grid-cols-2 gap-x-12 gap-y-4 items-center justify-items-center z-[20] pointer-events-none">
                       {enemies.map((enemy, index) => enemy.currentHp > 0 && (
                           <div 
                             key={enemy.id} 
                             onClick={() => handleEnemyClick(enemy.id)}
                             onMouseEnter={(e) => setTooltipData({ content: { type: 'enemy', data: enemy }, x: e.clientX, y: e.clientY })}
                             onMouseLeave={handleTooltipLeave}
                             className={`relative flex flex-col items-center transition-all pointer-events-auto cursor-pointer group/enemy rounded-lg
                               ${(gamePhase === 'player_turn' && activeTurnEntity === 'pet' && !selectingTarget && !turnProcessing) ? 'hover:ring-2 hover:ring-green-500' : ''}
                               ${(selectingTarget && selectedSkill !== 'light') ? 'hover:scale-110 hover:brightness-125 z-50 ring-2 ring-green-500/50' : ''}
                               ${actingEntity === enemy.id ? 'scale-110 z-50' : 'scale-100'}
                             `}
                             style={{ zIndex: 10 + index }} 
                           >
                               <span className="text-[10px] font-black text-white uppercase tracking-tighter px-2 py-0.5 rounded border border-white/10 mb-1 bg-black/40">{enemy.name} <span className="text-rose-400">Lvl {enemy.level}</span></span>
                               <div className="w-24 h-1.5 bg-slate-800/40 rounded-full mb-1 overflow-hidden border border-white/10"><div className="h-full bg-rose-500 transition-all" style={{ width: `${(enemy.currentHp / enemy.maxHp) * 100}%` }}></div></div>
                               <div className="w-24 h-1 bg-slate-800/40 rounded-full mb-1 overflow-hidden border border-white/10 mt-0.5"><div className="h-full bg-blue-500 transition-all" style={{ width: `${(enemy.currentMana / enemy.maxMana) * 100}%` }}></div></div>
                               
                               <div className={`w-24 h-24 relative bg-transparent ${actingEntity === enemy.id && enemyActionType === 'attack' ? 'animate-lunge-left' : (enemy.statusEffects.frozen > 0 ? '' : 'animate-float')}`}>
                                 <img 
                                   src={enemy.spriteUrl} 
                                   className="w-full h-full object-contain rendering-pixelated relative z-10" 
                                   style={enemy.statusEffects.frozen > 0 ? { filter: 'grayscale(0.5) brightness(1.2)' } : {}}
                                 />
                                 
                                 {((selectingTarget && selectedSkill !== 'light') || (gamePhase === 'player_turn' && activeTurnEntity === 'pet' && !selectingTarget && !turnProcessing)) && (
                                     <div className="absolute -top-10 left-1/2 -translate-x-1/2 animate-bounce">
                                         <MousePointerClick className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                                     </div>
                                 )}

                                 <div className="absolute inset-0 z-20 pointer-events-none">
                                     {enemy.statusEffects.burning > 0 && <img src={STATUS_VFX_URLS.burning} className="absolute inset-0 w-full h-full object-cover scale-150 opacity-80 mix-blend-screen" alt="Burning" />}
                                     {enemy.statusEffects.frozen > 0 && <img src={STATUS_VFX_URLS.frozen} className="absolute inset-0 w-full h-full object-contain scale-125 opacity-90 mix-blend-screen" alt="Frozen" />}
                                     {enemy.statusEffects.defReductionTimer > 0 && <img src={STATUS_VFX_URLS.shocked} className="absolute inset-0 w-full h-full object-contain scale-125 opacity-80 mix-blend-screen" alt="Shocked" />}
                                 </div>
                                 
                                 {damageFloaters.filter(d => d.id.startsWith(enemy.id)).map(f => (
                                     <div key={f.id} className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-black animate-float-up pointer-events-none ${f.isCrit ? 'text-5xl text-yellow-300 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] z-[100]' : 'text-3xl ' + f.color + ' z-[90]'}`} style={{ top: '-20px' }}>
                                         {f.text}
                                     </div>
                                 ))}
                                 
                                 {critTarget === enemy.id && (
                                     <div className="absolute inset-0 z-[90] pointer-events-none scale-150 flex items-center justify-center">
                                         <img src={`${CRIT_VFX_URL}?t=${Date.now()}`} className="w-full h-full object-contain mix-blend-screen" />
                                     </div>
                                 )}

                                 {(activeVfx && (activeVfx.targetId === enemy.id)) && (
                                     <div className={`absolute left-1/2 -translate-x-1/2 pointer-events-none z-50 transition-all ${activeVfx.type === 'fire' ? 'bottom-0 w-64 h-64 origin-bottom' : 'top-1/2 -translate-y-1/2 w-80 h-80'}`}>
                                         <img src={activeVfx.url} key={activeVfx.url} className="w-full h-full object-contain mix-blend-screen brightness-150 contrast-125" />
                                     </div>
                                 )}
                               </div>
                           </div>
                       ))}
                   </div>
                   
                   {activeVfx && activeVfx.targetId === 'all' && (
                       <div className="absolute top-0 right-0 w-1/2 h-full z-[60] pointer-events-none flex items-center justify-center overflow-hidden">
                            <img src={activeVfx.url} key={activeVfx.url} className="w-full h-full object-contain mix-blend-screen brightness-150 contrast-125 opacity-90 scale-125" />
                       </div>
                   )}

                   {/* PLAYER STAGE */}
                   <div className="absolute top-[15%] left-[5%] flex flex-col items-start z-[20]">
                        <div className="flex items-end gap-12 relative pointer-events-auto ml-2 mt-8">
                            <div onClick={() => handleAllyClick('player')} className={`w-32 h-32 bg-transparent ${playerHurt ? 'brightness-75' : ''} transition-transform duration-[1800ms] ease-in-out relative ${selectingTarget && selectedSkill === 'light' ? 'cursor-pointer hover:scale-110 hover:brightness-125 z-50 ring-2 ring-green-500/50' : ''}`} style={{ transform: isApproaching ? 'translateX(50vw)' : 'translateX(0)' }}>
                                <HeroSprite action={combatAnim} />
                                {damageFloaters.filter(d => d.id.startsWith('player')).map(f => (<div key={f.id} className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 text-3xl font-black ${f.color} animate-float-up`}>{f.text}</div>))}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1 z-50">
                                    <StatusBadge type="frozen" value={player.statusEffects.frozen} />
                                    <StatusBadge type="burning" value={player.statusEffects.burning} />
                                    <StatusBadge type="def" value={player.statusEffects.defReductionTimer} />
                                </div>
                                <div className="absolute inset-0 z-30 pointer-events-none">
                                     {player.statusEffects.burning > 0 && <img src={STATUS_VFX_URLS.burning} className="absolute inset-0 w-full h-full object-cover scale-150 opacity-80 mix-blend-screen" />}
                                     {player.statusEffects.frozen > 0 && <img src={STATUS_VFX_URLS.frozen} className="absolute inset-0 w-full h-full object-contain scale-125 opacity-90 mix-blend-screen" />}
                                     {player.statusEffects.defReductionTimer > 0 && <img src={STATUS_VFX_URLS.shocked} className="absolute inset-0 w-full h-full object-contain scale-125 opacity-80 mix-blend-screen" />}
                                </div>
                                {activeVfx && activeVfx.targetId === 'player' && <div className="absolute inset-0 z-50 pointer-events-none scale-150 origin-bottom"><img src={activeVfx.url} key={activeVfx.url} className="w-full h-full object-contain mix-blend-screen brightness-125" /></div>}
                                {selectingTarget && selectedSkill === 'light' && <div className="absolute -top-10 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none"><MousePointerClick className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" /></div>}
                            </div>
                            
                            {activePet && (
                                <div onClick={() => handleAllyClick('pet')} className={`w-24 h-24 relative mb-2 transition-all duration-[1000ms] ease-in-out ${activePet.hp <= 0 ? 'opacity-0' : 'opacity-90'} ${selectingTarget && selectedSkill === 'light' ? 'cursor-pointer hover:scale-110 hover:brightness-125 z-50 ring-2 ring-green-500/50' : ''}`} style={{ transform: petApproaching ? 'translateX(50vw)' : 'translateX(0)' }}>
                                    <img src={activePet.spriteUrl} className="w-full h-full object-contain rendering-pixelated animate-float scale-x-[-1] drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                                    {damageFloaters.filter(d => d.id.startsWith('pet')).map(f => (<div key={f.id} className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 text-3xl font-black ${f.color} animate-float-up`}>{f.text}</div>))}
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1 z-50">
                                        <StatusBadge type="frozen" value={activePet.statusEffects?.frozen || 0} />
                                        <StatusBadge type="burning" value={activePet.statusEffects?.burning || 0} />
                                        <StatusBadge type="def" value={activePet.statusEffects?.defReductionTimer || 0} />
                                    </div>
                                    <div className="absolute inset-0 z-30 pointer-events-none">
                                         {activePet.statusEffects?.burning > 0 && <img src={STATUS_VFX_URLS.burning} className="absolute inset-0 w-full h-full object-cover scale-125 opacity-60 mix-blend-screen" />}
                                         {activePet.statusEffects?.frozen > 0 && <img src={STATUS_VFX_URLS.frozen} className="absolute inset-0 w-full h-full object-contain scale-110 opacity-70 mix-blend-screen" />}
                                    </div>
                                    {activeVfx && activeVfx.targetId === 'pet' && <div className="absolute inset-0 z-50 pointer-events-none scale-150 origin-bottom"><img src={activeVfx.url} key={activeVfx.url} className="w-full h-full object-contain mix-blend-screen brightness-125" /></div>}
                                    {selectingTarget && selectedSkill === 'light' && <div className="absolute -top-10 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none"><MousePointerClick className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" /></div>}
                                </div>
                            )}
                        </div>
                   </div>
               </div>

               {/* ... (Action choice, etc.) ... */}
               {showActionChoice && (
                   <div className="absolute bottom-4 left-4 z-[150] w-[380px] pointer-events-auto">
                       <div className="bg-black/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 animate-pop-in">
                           <div className="flex items-center gap-2 mb-3">
                               <div className="p-1.5 bg-indigo-500/20 rounded-full">
                                   {activeTurnEntity === 'player' ? <Sparkles className="w-4 h-4 text-indigo-400" /> : <PawPrint className="w-4 h-4 text-amber-400" />}
                                </div>
                               <h3 className="text-sm font-black text-white uppercase tracking-tighter">{activeTurnEntity === 'player' ? "Hero Action" : `${activePet?.name} Action`}</h3>
                           </div>
                           
                           {activeTurnEntity === 'player' ? (
                               <div className="grid grid-cols-2 gap-2">
                                   <button onClick={() => preparePlayerAction('normal')} className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex flex-col items-center justify-center gap-1 transition-all"><Sword className="w-4 h-4 text-slate-400" /><div className="text-center"><p className="font-black text-white uppercase text-xs">Attack</p></div></button>
                                   <button disabled={player.mana < 100 || player.pets.length >= 5} onClick={() => preparePlayerAction('capture')} className="w-full py-3 bg-rose-600/10 hover:bg-rose-600/20 border border-rose-500/30 rounded-lg flex flex-col items-center justify-center gap-1 transition-all disabled:opacity-20"><Crosshair className="w-4 h-4 text-rose-400" /><div className="text-center"><p className="font-black text-white uppercase text-xs">Capture</p><p className="text-[7px] text-rose-300 font-bold uppercase">100 Mana</p></div></button>
                                   {(Object.keys(ELEMENT_INFO) as (keyof typeof ELEMENT_INFO)[]).map(key => {
                                       const info = ELEMENT_INFO[key]; 
                                       if (info.type === 'Passive' || player.elemental[key] === 0) return null;
                                       const canAfford = player.mana >= info.cost;
                                       return (
                                         <button key={key} disabled={!canAfford} onClick={() => preparePlayerAction(key)} className={`w-full py-3 ${info.bg} border ${info.border} rounded-lg flex flex-col items-center justify-center gap-1 transition-all disabled:opacity-30 disabled:cursor-not-allowed`}>
                                            <info.icon className={`w-4 h-4 ${info.color}`} />
                                            <div className="text-center">
                                                <p className="font-black text-white uppercase text-xs">{info.name}</p>
                                                <p className={`text-[7px] font-bold uppercase ${canAfford ? 'text-blue-300' : 'text-red-400'}`}>{info.cost} Mana</p>
                                            </div>
                                         </button>
                                       );
                                   })}
                               </div>
                           ) : (
                               <div className="grid grid-cols-2 gap-2">
                                   <button onClick={() => preparePetAction('normal')} className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex flex-col items-center justify-center gap-1 transition-all"><Sword className="w-4 h-4 text-slate-400" /><div className="text-center"><p className="font-black text-white uppercase text-xs">Attack</p></div></button>
                                   {activePet && activePet.skills.proactives.map(skillKey => {
                                       const info = ELEMENT_INFO[skillKey];
                                       const canAfford = activePet.mana >= info.cost;
                                       return (
                                            <button key={skillKey} disabled={!canAfford} onClick={() => preparePetAction(skillKey)} className={`w-full py-3 ${info.bg} border ${info.border} rounded-lg flex flex-col items-center justify-center gap-1 transition-all disabled:opacity-30 disabled:cursor-not-allowed`}>
                                                <info.icon className={`w-4 h-4 ${info.color}`} />
                                                <div className="text-center">
                                                    <p className="font-black text-white uppercase text-xs">{info.name}</p>
                                                    <p className={`text-[7px] font-bold uppercase ${canAfford ? 'text-blue-300' : 'text-red-400'}`}>{info.cost} Mana</p>
                                                </div>
                                            </button>
                                       );
                                   })}
                               </div>
                           )}
                       </div>
                   </div>
               )}
               {selectingTarget && <div className="fixed inset-0 z-[140] pointer-events-none flex items-center justify-center"><div className="bg-black/60 px-8 py-4 rounded-full border border-white/20 animate-pulse"><p className="text-2xl font-black text-white uppercase tracking-widest">Select Target</p></div></div>}
               {gamePhase === 'boss_trivia' && activeTriviaState && <div className="absolute inset-0 z-[150] bg-black/60 backdrop-blur-md flex items-center justify-center p-4"><div className="w-full max-w-2xl bg-amber-950/40 border-4 border-amber-500/60 p-10 rounded-[3rem] text-center space-y-8 animate-reward"><Award className="w-16 h-16 text-amber-400 mx-auto" /><h3 className="text-5xl font-black text-white uppercase tracking-tighter italic">Bonus Challenge</h3><div className="bg-black/60 p-8 rounded-3xl border border-amber-500/20 text-left"><p className="text-2xl font-bold text-white leading-tight italic">"{activeTriviaState.activeTrivia.question}"</p></div><div className="grid grid-cols-2 gap-6"><button onClick={() => handleBossTrivia(activeTriviaState.activeTrivia.correctAnswer === 'True')} className="py-6 bg-emerald-600/20 hover:bg-emerald-600/40 border-2 border-emerald-500/50 rounded-3xl text-3xl font-black text-emerald-400 transition-all uppercase">True</button><button onClick={() => handleBossTrivia(activeTriviaState.activeTrivia.correctAnswer === 'False')} className="py-6 bg-rose-600/20 hover:bg-rose-600/40 border-2 border-rose-500/50 rounded-3xl text-3xl font-black text-rose-400 transition-all uppercase">False</button></div></div></div>}
               {!showStoryIntro && gamePhase === 'player_turn' && (question && !turnProcessing && activeTurnEntity !== 'pet') && <div className="absolute bottom-4 left-4 z-40 w-[380px] pointer-events-none flex items-end"><div className="w-full h-full bg-black/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl pointer-events-auto flex flex-col relative animate-fade-in shadow-2xl"><button onClick={() => setShowExitConfirm(true)} className="absolute top-2 right-2 p-1 text-slate-500 hover:text-rose-400 transition-colors z-[200]"><X className="w-4 h-4" /></button><div className="flex-1 overflow-y-auto custom-scrollbar p-1"><div className="flex justify-between items-center mb-2"><div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center"><span className="font-black text-indigo-400 text-[8px]">{CEFR_LEVELS[currentCefrLevel]}</span></div><div className="bg-indigo-950/80 px-2 py-0.5 rounded-full border border-indigo-500/30 text-[8px] font-black text-indigo-300 uppercase tracking-widest">{getSubjectLabel(question.type)}</div></div><p className="text-[9px] font-bold text-indigo-400/80 uppercase mb-2 flex items-center gap-1"><Info className="w-3 h-3" />{HINTS[question.type]}</p>{question.type === 'pairing' ? <PairingBattle question={question} onComplete={() => handleAnswerCheck(100)} onMismatch={() => handleAnswerCheck(0)} /> : (<div className="space-y-2 animate-fade-in"><h3 className="text-sm font-black text-white leading-tight mb-2">{question.prompt}</h3><div className="grid grid-cols-1 gap-2">{shuffledOptions.map((opt, i) => (<button key={i} onClick={() => handleAnswerCheck(opt === question.correctAnswer ? 100 : 0)} className="p-2 text-left bg-slate-800/40 hover:bg-indigo-600 border border-white/5 hover:border-indigo-400 rounded-lg transition-all group active:scale-95 flex items-center gap-2"><span className="flex-shrink-0 w-5 h-5 rounded bg-white/5 flex items-center justify-center text-indigo-400 font-mono font-black text-[10px]">{String.fromCharCode(65+i)}</span><span className="text-slate-200 group-hover:text-white font-bold text-xs">{opt}</span></button>))}</div></div>)}</div></div></div>}
               {gamePhase === 'loading' && <div className="absolute bottom-4 left-4 z-40 w-[380px] pointer-events-none flex items-end"><div className="flex flex-col items-center justify-center w-full h-32 bg-black/40 rounded-2xl border border-white/5"><Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-2" /><p className="text-xs text-indigo-300 uppercase animate-pulse">Loading Battle...</p></div></div>}
               {gamePhase === 'defeat' && <div className="absolute bottom-4 left-4 z-40 w-[380px] pointer-events-none flex items-end"><div className="text-center py-6 bg-black/80 p-6 rounded-2xl border border-rose-500/30 pointer-events-auto w-full"><h2 className="text-3xl font-black text-rose-500 mb-4 uppercase">Defeated</h2><button onClick={() => { setPlayer(p => ({...p, hp: (calculateStats() as any).maxHp, mana: (calculateStats() as any).maxMana})); setGamePhase('lobby'); }} className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl uppercase text-sm">Try Again</button></div></div>}
          </div>
      )}

      {showExitConfirm && (
          <div className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4">
              <div className="max-w-md w-full bg-slate-900 border-2 border-rose-500 rounded-[2.5rem] p-8 text-center animate-pop-in">
                  <h3 className="text-2xl font-black text-white mb-2">Leave Battle?</h3><p className="text-slate-400 mb-8 text-sm">Progress in this level will be lost. Return to menu?</p>
                  <div className="grid grid-cols-2 gap-4"><button onClick={() => setShowExitConfirm(false)} className="py-4 bg-white/10 text-white font-bold rounded-2xl">Stay</button><button onClick={handleExitToLobby} className="py-4 bg-rose-600 text-white font-bold rounded-2xl shadow-lg">Leave</button></div>
              </div>
          </div>
      )}

      {wrongAnswerFeedback && <div className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4"><div className="bg-slate-900 border border-rose-500 rounded-2xl p-6 max-w-md w-full text-center animate-slide-up shadow-2xl"><h3 className="text-2xl font-black text-white mb-2">Incorrect</h3><div className="bg-black/40 p-4 rounded-xl border border-white/5 mb-6 text-left"><p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Correct Answer:</p><p className="text-emerald-400 font-bold text-lg mb-3">{wrongAnswerFeedback.correctAnswer}</p><p className="text-slate-300 text-xs leading-relaxed">{wrongAnswerFeedback.explanation}</p></div><button onClick={handleEnemyTurn} className="w-full py-3 bg-rose-600 hover:bg-rose-500 rounded-xl font-bold text-white shadow-lg uppercase italic">Continue</button></div></div>}
      
      {/* Blacksmith Overlay */}
      {gamePhase === 'lobby' && lobbyView === 'blacksmith' && (
          <div className="fixed inset-0 z-[200] flex flex-col overflow-hidden bg-[#0b0f19]">
              
              <div className="relative z-10 flex flex-col h-full p-4 max-w-7xl mx-auto w-full">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-lg">
                      <div className="flex items-center gap-3">
                          <button onClick={() => setLobbyView('main')} className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/5"><ArrowLeft className="w-5 h-5 text-slate-300" /></button>
                          <div>
                              <h2 className="text-xl font-black italic tracking-tighter uppercase text-white flex items-center gap-2">
                                  <Anvil className="w-5 h-5 text-amber-500" /> The Forge
                              </h2>
                          </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 rounded-xl border border-amber-500/30">
                          <div className="text-right">
                              <p className="text-[8px] text-amber-500 font-black uppercase tracking-widest">Treasury</p>
                              <p className="text-sm font-black text-white leading-none">{player.coins.toLocaleString()}</p>
                          </div>
                          <Coins className="w-5 h-5 text-amber-400" />
                      </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 overflow-hidden pb-2">
                      {/* Left: Inventory */}
                      <div className="lg:col-span-5 bg-slate-900/40 border border-white/5 rounded-2xl p-4 flex flex-col h-full overflow-hidden shadow-xl relative z-10">
                          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><Box className="w-3 h-3"/> Inventory</h3>
                          <div className="flex flex-wrap content-start gap-2 overflow-y-auto custom-scrollbar flex-1 pr-1">
                              {player.inventory.map(item => {
                                  const isPrimary = selectedInventoryItem?.id === item.id;
                                  const isFodder = forgeFodder.find(f => f.id === item.id);
                                  const theme = QUALITY_THEMES[item.quality];
                                  const isDimmed = selectedInventoryItem && !isPrimary && !isFodder && item.type !== selectedInventoryItem.type;

                                  return (
                                      <div 
                                        key={item.id} 
                                        onMouseEnter={(e) => setTooltipData({ content: { type: 'item', data: item, equipped: player.equipment[item.type] }, x: e.clientX, y: e.clientY })}
                                        onMouseLeave={handleTooltipLeave}
                                        onClick={() => { 
                                            if (isDimmed || isForging) return;
                                            if (isPrimary) { setSelectedInventoryItem(null); setForgeFodder([]); } 
                                            else if (!selectedInventoryItem) { setSelectedInventoryItem(item); } 
                                            else handleFodderToggle(item); 
                                        }} 
                                        className={`w-14 h-14 md:w-16 md:h-16 rounded-xl border-2 flex items-center justify-center transition-all cursor-pointer relative 
                                            ${isPrimary ? 'ring-2 ring-indigo-500 scale-105 z-10' : isFodder ? 'ring-2 ring-rose-500 scale-105 z-10 brightness-75' : isDimmed ? 'opacity-20 grayscale cursor-not-allowed' : 'hover:scale-110 hover:brightness-125'} 
                                            ${theme.bg} ${theme.border} shadow-sm`}
                                      >
                                          <img src={item.iconUrl} className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-md" />
                                          {item.upgradeLevel > 0 && <div className="absolute -top-1 -right-1 bg-amber-500 text-black font-black text-[8px] px-1 rounded-bl shadow-sm">+{item.upgradeLevel}</div>}
                                      </div>
                                  );
                              })}
                              {player.inventory.length === 0 && <div className="w-full text-center py-10 text-slate-500 text-xs italic">Inventory Empty</div>}
                          </div>
                      </div>

                      {/* Right: The Forge */}
                      <div className="lg:col-span-7 relative flex flex-col items-center justify-center bg-slate-900/20 rounded-2xl border border-white/5 p-4">
                          {/* Forge Feedback Overlay */}
                          {forgeResult && !isForging && (
                              <div className={`absolute inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-all ${forgeResult === 'success' ? 'bg-emerald-500/20' : 'bg-rose-500/20'} rounded-2xl animate-pop-in`}>
                                  <div className={`p-6 rounded-2xl border-2 ${forgeResult === 'success' ? 'border-emerald-500 bg-black/90' : 'border-rose-500 bg-black/90'} text-center shadow-2xl`}>
                                      {forgeResult === 'success' ? (
                                          <>
                                            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-2 animate-bounce" />
                                            <h3 className="text-xl font-black text-white uppercase tracking-tighter">Success!</h3>
                                            <p className="text-emerald-400 font-bold text-sm">+1 Level</p>
                                          </>
                                      ) : (
                                          <>
                                            <XCircle className="w-12 h-12 text-rose-500 mx-auto mb-2 animate-shake" />
                                            <h3 className="text-xl font-black text-white uppercase tracking-tighter">Failed</h3>
                                            <p className="text-rose-400 font-bold text-sm">Materials Lost</p>
                                          </>
                                      )}
                                  </div>
                              </div>
                          )}

                          <div className={`relative flex flex-col items-center gap-6 w-full max-w-lg transition-all ${screenShake ? 'animate-shake-screen' : ''}`}>
                              
                              {/* Connector Lines */}
                              {selectedInventoryItem && (
                                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 opacity-30" viewBox="0 0 400 250">
                                    <path d="M 200 60 L 140 180" stroke={isForging ? "#f59e0b" : forgeFodder[0] ? "#6366f1" : "#334155"} strokeWidth={isForging ? "6" : "2"} fill="none" strokeDasharray="5,5" className={forgeFodder[0] || isForging ? "animate-pulse" : ""} />
                                    <path d="M 200 60 L 260 180" stroke={isForging ? "#f59e0b" : forgeFodder[1] ? "#6366f1" : "#334155"} strokeWidth={isForging ? "6" : "2"} fill="none" strokeDasharray="5,5" className={forgeFodder[1] || isForging ? "animate-pulse" : ""} />
                                </svg>
                              )}

                              {/* Apex Slot (Primary) */}
                              <div className="relative z-10 flex flex-col items-center group/primary">
                                  <div 
                                    onClick={() => { if(!isForging) { setSelectedInventoryItem(null); setForgeFodder([]); } }}
                                    className={`w-24 h-24 rounded-2xl border-2 flex items-center justify-center transition-all cursor-pointer shadow-[0_0_15px_rgba(234,179,8,0.3)] 
                                        ${isForging ? 'animate-casino bg-black border-amber-500 shadow-[0_0_50px_rgba(245,158,11,0.6)]' : selectedInventoryItem 
                                            ? `bg-black/60 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.4)]` 
                                            : 'bg-black/40 border-yellow-500/30 hover:border-yellow-400 border-dashed'}`}
                                     onMouseEnter={(e) => setTooltipData({ content: selectedInventoryItem ? { type: 'item', data: selectedInventoryItem, equipped: player.equipment[selectedInventoryItem.type] } : { type: 'text', title: 'Primary Slot', body: 'Place item to upgrade here.\nRequires 2 material items.\nCosts coins based on level.' }, x: e.clientX, y: e.clientY })}
                                     onMouseLeave={handleTooltipLeave}
                                  >
                                      {selectedInventoryItem ? (
                                          <img src={selectedInventoryItem.iconUrl} className={`w-16 h-16 object-contain drop-shadow-lg ${isForging ? 'animate-spin' : ''}`} />
                                      ) : (
                                          <div className="text-center opacity-40 text-yellow-500">
                                              <Crown className="w-8 h-8 mx-auto mb-1" />
                                              <span className="text-[8px] font-bold uppercase tracking-widest">Primary</span>
                                          </div>
                                      )}
                                      {selectedInventoryItem && selectedInventoryItem.upgradeLevel > 0 && !isForging && <div className="absolute -top-2 -right-2 bg-amber-500 text-black font-black text-xs px-1.5 py-0.5 rounded shadow-lg border border-white/20">+{selectedInventoryItem.upgradeLevel}</div>}
                                  </div>
                              </div>

                              {/* Base Slots (Materials) */}
                              <div className="flex gap-16 relative z-10">
                                  {[0, 1].map(i => (
                                      <div 
                                        key={i} 
                                        className={`w-16 h-16 rounded-xl border-2 flex items-center justify-center relative transition-all group/mat ${forgeFodder[i] ? 'bg-rose-950/40 border-rose-500/50 shadow-[0_0_10px_rgba(244,63,94,0.3)]' : 'bg-black/40 border-white/10 border-dashed'}`}
                                        onMouseEnter={(e) => setTooltipData({ content: forgeFodder[i] ? { type: 'item', data: forgeFodder[i], equipped: null } : { type: 'text', title: `Material Slot ${i+1}`, body: 'Select an item from inventory to sacrifice.\nMaterial items will be destroyed.' }, x: e.clientX, y: e.clientY })}
                                        onMouseLeave={handleTooltipLeave}
                                      >
                                          {forgeFodder[i] ? (
                                              <img src={forgeFodder[i].iconUrl} className={`w-10 h-10 object-contain opacity-80 grayscale ${isForging ? 'animate-pulse opacity-50' : ''}`} />
                                          ) : (
                                              <div className="text-white/10"><Box className="w-6 h-6" /></div>
                                          )}
                                      </div>
                                  ))}
                              </div>

                              {/* Action Bar */}
                              <div className="w-full flex justify-center mt-2">
                                  <button 
                                      onClick={initiateForge}
                                      disabled={!selectedInventoryItem || forgeFodder.length < 2 || isForging}
                                      className="px-10 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 disabled:from-slate-800 disabled:to-slate-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black text-lg uppercase tracking-tighter rounded-xl shadow-[0_0_20px_rgba(234,88,12,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 border-2 border-orange-500/30 group"
                                  >
                                      {isForging ? <Loader2 className="w-5 h-5 animate-spin" /> : <Hammer className="w-5 h-5 group-hover:rotate-45 transition-transform" />}
                                      {isForging ? "Forging..." : "Forge"}
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Confirmation Modal */}
              {showForgeConfirm && selectedInventoryItem && (
                  <div className="absolute inset-0 z-[300] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
                      <div className="bg-slate-900 border-2 border-white/10 rounded-3xl p-8 max-w-sm w-full text-center space-y-4 animate-pop-in shadow-2xl relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500"></div>
                          
                          <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto border border-orange-500/50 animate-pulse">
                              <AlertTriangle className="w-8 h-8 text-orange-500" />
                          </div>
                          
                          <div>
                              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Confirm Upgrade</h3>
                              <p className="text-slate-400 text-xs">Materials will be destroyed.</p>
                          </div>

                          <div className="bg-black/40 rounded-xl p-3 border border-white/5 space-y-2">
                              <div className="flex justify-between items-center text-xs">
                                  <span className="text-slate-400">Success Rate</span>
                                  <span className={getUpgradeSuccessRate(selectedInventoryItem.upgradeLevel) >= 50 ? "text-emerald-400 font-black" : "text-rose-400 font-black"}>{getUpgradeSuccessRate(selectedInventoryItem.upgradeLevel)}%</span>
                              </div>
                              <div className="flex justify-between items-center text-xs">
                                  <span className="text-slate-400">Cost</span>
                                  <span className="text-amber-400 font-black">{getUpgradeCost(selectedInventoryItem.upgradeLevel)} Coins</span>
                              </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3 pt-2">
                              <button onClick={() => setShowForgeConfirm(false)} className="py-3 rounded-xl bg-white/5 hover:bg-white/10 font-bold text-slate-300 transition-colors text-xs uppercase">Cancel</button>
                              <button onClick={executeForge} className="py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-black text-white shadow-lg shadow-indigo-500/20 transition-all active:scale-95 text-xs uppercase">CONFIRM</button>
                          </div>
                      </div>
                  </div>
              )}
          </div>
      )}

      {/* ... (Pets view remains the same) ... */}
      {gamePhase === 'lobby' && lobbyView === 'pets' && (
          <div className="fixed inset-0 z-[200] bg-[#020617] flex flex-col p-8 overflow-y-auto">
              {/* Return Button */}
              <div className="absolute top-4 left-4 z-[210]">
                  <button 
                    onClick={() => setLobbyView('main')} 
                    className="p-3 bg-black/40 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors shadow-lg"
                  >
                      <ArrowLeft className="w-6 h-6" />
                  </button>
              </div>

              <div className="max-w-6xl mx-auto w-full space-y-8 animate-fade-in pb-24 pt-16">
                  <div className="flex items-center justify-between">
                    <h2 className="text-4xl font-black italic tracking-tighter uppercase text-white">Pets</h2>
                    <div className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-indigo-400 font-bold uppercase text-xs">{player.pets.length} / 5 Creatures Captured</div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column: Pet List */}
                      <div className="space-y-4">
                          <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><Dog className="w-3 h-3"/> Captured Team</h3>
                          <div className="grid grid-cols-1 gap-3">
                              {player.pets.length === 0 ? (
                                  <div className="py-20 text-center border-2 border-dashed border-white/5 rounded-3xl opacity-30"><Dog className="w-16 h-16 mx-auto mb-4" /><p className="italic font-bold">No creatures captured yet. Find them in battle!</p></div>
                              ) : player.pets.map(pet => (
                                  <div key={pet.id} onClick={() => { setSelectedPetId(pet.id); setDismissingPetId(null); }} className={`p-4 rounded-3xl border-2 transition-all cursor-pointer flex items-center gap-4 group hover:scale-[1.02] ${selectedPetId === pet.id ? 'bg-indigo-600/20 border-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.2)]' : 'bg-slate-900 border-white/5 hover:border-white/20'}`}>
                                      <div className="w-16 h-16 bg-black/40 rounded-2xl p-1 flex items-center justify-center border border-white/10 group-hover:border-indigo-500/50"><img src={pet.spriteUrl} className="w-full h-full object-contain rendering-pixelated" /></div>
                                      <div className="flex-1 min-w-0">
                                          <div className="flex items-center gap-2 mb-1"><h4 className="text-lg font-black truncate">{pet.name}</h4><span className="px-2 py-0.5 bg-black/40 rounded text-[9px] font-black text-slate-400 uppercase tracking-tighter italic">Lvl {pet.level}</span></div>
                                          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden border border-white/5"><div className="h-full bg-indigo-500" style={{ width: `${(pet.xp / pet.maxXp) * 100}%` }}></div></div>
                                      </div>
                                      {player.activePetId === pet.id ? <div className="bg-emerald-500 text-black font-black text-[8px] px-2 py-1 rounded-full uppercase italic">Active</div> : <button onClick={(e) => { e.stopPropagation(); setPlayer(p => ({ ...p, activePetId: pet.id })); }} className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-[9px] font-bold uppercase rounded-lg transition-all shadow-md">Attend</button>}
                                  </div>
                              ))}
                          </div>
                      </div>

                      {/* Right Column: Detailed View */}
                      <div className="bg-slate-900/50 border border-indigo-500/30 rounded-[3rem] p-8 flex flex-col relative h-full min-h-[500px]">
                          {displayedStablesPet ? (
                              <div className="w-full animate-pop-in space-y-6 flex-1 flex flex-col">
                                  {/* Compact Header: Image + Text Info */}
                                  <div className="flex flex-row gap-6 items-start">
                                       <div className="w-28 h-28 bg-black/40 rounded-[2rem] border-4 border-indigo-500/30 p-2 relative overflow-hidden group flex-shrink-0">
                                          <img src={displayedStablesPet.spriteUrl} className="w-full h-full object-contain rendering-pixelated drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]" />
                                       </div>
                                       <div className="flex-1 flex flex-col justify-center space-y-3">
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white leading-none">{displayedStablesPet.name}</h3>
                                                <button onClick={() => { setPetNamingId(displayedStablesPet.id); setPetNameInput(displayedStablesPet.name); }} className="p-1.5 bg-white/5 rounded-full hover:bg-indigo-500 hover:text-white transition-all"><Edit3 className="w-3 h-3" /></button>
                                            </div>
                                            
                                            {/* Growth Factor Badge */}
                                            <div 
                                                className="has-tooltip relative inline-flex self-start cursor-help group/growth"
                                                onMouseEnter={(e) => setTooltipData({ content: { type: 'text', title: 'Growth Factor', body: STAT_DESCRIPTIONS.growthFactor }, x: e.clientX, y: e.clientY })}
                                                onMouseLeave={handleTooltipLeave}
                                            >
                                                <div className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 rounded-lg flex items-center gap-2">
                                                    <TrendingUp className="w-3 h-3 text-amber-400" />
                                                    <p className="text-[10px] font-black text-amber-100 uppercase tracking-widest">Growth Factor: <span className="text-amber-400 text-sm">x{displayedStablesPet.growthFactor.toFixed(3)}</span></p>
                                                </div>
                                            </div>

                                            {/* Description inline */}
                                            {displayedStablesPet.description && (
                                                <p className="text-xs text-slate-400 italic leading-snug">"{displayedStablesPet.description}"</p>
                                            )}
                                       </div>
                                  </div>

                                  {/* Stats Grid */}
                                  <div className="grid grid-cols-3 gap-2">
                                      {[{ key: 'atk', label: 'Attack', icon: Sword, color: 'text-rose-400' }, { key: 'def', label: 'Defense', icon: Shield, color: 'text-amber-400' }, { key: 'maxHp', label: 'Health', icon: Heart, color: 'text-emerald-400' }, { key: 'maxMana', label: 'Mana', icon: Zap, color: 'text-blue-400' }, { key: 'critChance', label: 'Crit %', icon: TargetIcon, color: 'text-purple-400' }].map(s => (
                                          <div key={s.key} 
                                            className="bg-black/60 p-2.5 rounded-xl border border-white/5 flex flex-col justify-center relative overflow-hidden group/stat cursor-help"
                                            onMouseEnter={(e) => setTooltipData({ content: { type: 'text', title: s.label, body: STAT_DESCRIPTIONS[s.key] }, x: e.clientX, y: e.clientY })}
                                            onMouseLeave={handleTooltipLeave}
                                          >
                                              <div className="flex items-center gap-2 mb-1"><s.icon className={`w-3 h-3 ${s.color}`} /><p className="text-[8px] text-slate-500 uppercase font-black">{s.label}</p></div>
                                              <p className="text-lg font-black text-white pl-1 leading-none">{(displayedStablesPet as any)[s.key]}{s.key === 'critChance' ? '%' : ''}</p>
                                              {(s.key !== 'critChance') && displayedStablesPet.statPoints > 0 && <button onClick={() => allocatePetStat(displayedStablesPet.id, s.key as any)} className="absolute right-1 bottom-1 p-1 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all active:scale-95 shadow-lg"><Plus className="w-3 h-3 text-white"/></button>}
                                          </div>
                                      ))}
                                       {displayedStablesPet.perk && (
                                            <div 
                                                className="bg-black/60 p-2.5 rounded-xl border border-white/5 flex flex-col justify-center relative overflow-hidden group/stat cursor-help"
                                                onMouseEnter={(e) => setTooltipData({ content: { type: 'text', title: "Perk", body: STAT_DESCRIPTIONS.perk }, x: e.clientX, y: e.clientY })}
                                                onMouseLeave={handleTooltipLeave}
                                            >
                                                <div className="flex items-center gap-2 mb-1"><Sparkles className="w-3 h-3 text-fuchsia-400" /><p className="text-[8px] text-slate-500 uppercase font-black">Perk</p></div>
                                                <p className="text-[10px] font-black text-white leading-none truncate">{displayedStablesPet.perk.label}</p>
                                            </div>
                                       )}
                                       <div 
                                         className="bg-indigo-600/10 p-2.5 rounded-xl border border-indigo-500/30 flex flex-col justify-center items-center text-center cursor-help"
                                         onMouseEnter={(e) => setTooltipData({ content: { type: 'text', title: "Stat Points", body: STAT_DESCRIPTIONS.points }, x: e.clientX, y: e.clientY })}
                                         onMouseLeave={handleTooltipLeave}
                                       >
                                          <p className="text-[8px] text-indigo-400 uppercase font-black mb-1">Points</p>
                                          <p className="text-2xl font-black text-white leading-none">{displayedStablesPet.statPoints}</p>
                                      </div>
                                  </div>
                                  
                                  {/* Abilities */}
                                  <div 
                                    className="bg-black/40 p-4 rounded-2xl border border-white/5 w-full text-left space-y-2 cursor-help"
                                    onMouseEnter={(e) => setTooltipData({ content: { type: 'text', title: 'Abilities', body: STAT_DESCRIPTIONS.abilities }, x: e.clientX, y: e.clientY })}
                                    onMouseLeave={handleTooltipLeave}
                                  >
                                      <div className="flex items-center gap-2 mb-1">
                                          <LightningIcon className="w-3 h-3 text-yellow-400" />
                                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Abilities</p>
                                      </div>
                                      <div className="flex flex-wrap gap-2">
                                          {displayedStablesPet.skills.proactives.map(s => (
                                              <span 
                                                key={s} 
                                                className="px-2 py-1 bg-indigo-500/20 border border-indigo-500/40 rounded-lg text-indigo-300 text-[10px] font-bold uppercase cursor-help"
                                                onMouseEnter={(e) => setTooltipData({ content: { type: 'skill', data: s }, x: e.clientX, y: e.clientY })}
                                                onMouseLeave={handleTooltipLeave}
                                              >{s}</span>
                                          ))}
                                          {displayedStablesPet.skills.passives.map(s => (
                                              <span 
                                                key={s} 
                                                className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-lg text-emerald-300 text-[10px] font-bold uppercase cursor-help"
                                                onMouseEnter={(e) => setTooltipData({ content: { type: 'skill', data: s }, x: e.clientX, y: e.clientY })}
                                                onMouseLeave={handleTooltipLeave}
                                              >{s}</span>
                                          ))}
                                          {displayedStablesPet.featureBonus && (
                                              <span className="px-2 py-1 bg-amber-500/20 border border-amber-500/40 rounded-lg text-amber-300 text-[10px] font-bold uppercase">{displayedStablesPet.featureBonus}</span>
                                          )}
                                      </div>
                                  </div>

                                  <div className="mt-auto flex justify-end pt-2">
                                     <button 
                                        onClick={() => dismissPet(displayedStablesPet.id)}
                                        className={`px-4 py-2 rounded-lg font-bold uppercase text-[9px] flex items-center gap-2 transition-all ${dismissingPetId === displayedStablesPet.id ? 'bg-rose-600 text-white animate-pulse' : 'bg-white/5 text-rose-400 hover:bg-rose-950/30 border border-rose-500/20'}`}
                                     >
                                         <Trash2 className="w-3 h-3" />
                                         {dismissingPetId === displayedStablesPet.id ? "Confirm Release?" : "Dismiss"}
                                     </button>
                                  </div>
                              </div>
                          ) : (
                              <div className="opacity-20 text-center space-y-4 m-auto"><Dog className="w-24 h-24 mx-auto" /><p className="text-lg font-black italic">Select a creature to view details.</p></div>
                          )}
                      </div>
                  </div>
              </div>
          </div>
      )}

      {gamePhase === 'lobby' && lobbyView === 'elements' && (
          <div className="fixed inset-0 z-[200] bg-[#020617] flex flex-col p-8 overflow-y-auto">
              {/* Return Button */}
              <div className="absolute top-4 left-4 z-[210]">
                  <button 
                    onClick={() => setLobbyView('main')} 
                    className="p-3 bg-black/40 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors shadow-lg"
                  >
                      <ArrowLeft className="w-6 h-6" />
                  </button>
              </div>

              <div className="max-w-6xl mx-auto w-full space-y-12 animate-fade-in pb-24 pt-16">
                  <div className="flex items-center gap-4"><h2 className="text-4xl font-black italic tracking-tighter uppercase text-white">Skills</h2></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {(Object.keys(ELEMENT_INFO) as (keyof typeof ELEMENT_INFO)[]).map(key => {
                          const info = ELEMENT_INFO[key]; const lvl = player.elemental[key]; const isLocked = lvl === 0; const cost = (lvl + 1) * 500; const scaling = info.scaling(lvl);
                          return (
                              <div key={key} className={`${info.bg} border-2 ${info.border} rounded-[2.5rem] p-8 flex flex-col items-center text-center space-y-6 hover:brightness-125 transition-all relative group shadow-2xl`}>
                                  <div className={`p-6 rounded-full bg-black/60 ${isLocked ? 'text-slate-600 opacity-50' : info.color} shadow-2xl border border-white/20`}><info.icon className="w-14 h-14" /></div>
                                  <div className="space-y-1"><h3 className={`text-2xl font-black tracking-tight ${isLocked ? 'text-slate-500 italic' : 'text-white'}`}>{info.name}</h3><span className={`text-[10px] font-black uppercase ${isLocked ? 'text-slate-600' : `Level ${lvl}/11`}`}>Level {lvl}/11</span></div>
                                  <div className={`bg-black/50 rounded-2xl p-5 w-full border border-white/10 min-h-[90px] flex flex-col items-center justify-center relative has-tooltip transition-all`}>
                                      <p className={`text-xs leading-relaxed font-bold`}>{info.desc}</p>
                                      <div className="tooltip"><p className="text-xs text-slate-200 italic bg-black/30 p-2 rounded-lg">{scaling.current}</p></div>
                                  </div>
                                  <button onClick={() => upgradeElement(key)} disabled={player.coins < cost || lvl >= 11} className={`w-full py-4 rounded-2xl text-sm font-black transition-all flex items-center justify-center gap-2 border shadow-lg ${isLocked ? 'bg-indigo-600' : 'bg-white/10 text-white'}`}>
                                      {lvl >= 11 ? 'MAX LEVEL' : <><Coins className="w-4 h-4 text-amber-400" /> Upgrade ({cost})</>}
                                  </button>
                              </div>
                          );
                      })}
                  </div>
              </div>
          </div>
      )}

      {lobbyView === 'library' && (
          <Library 
            isOpen={true} 
            onClose={() => setLobbyView('main')} 
            items={[]}
            onSelectWord={(word) => {}}
            onStartReview={() => {}}
          />
      )}

      {showStoryIntro && activeTriviaState && (
          <div className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4">
             <div className="max-w-xl w-full bg-slate-900 border border-indigo-500/50 rounded-3xl p-8 animate-slide-up shadow-2xl text-center">
                 <h2 className="text-4xl font-black text-white mb-2">{activeTriviaState.country}</h2>
                 <div className="bg-black/30 p-8 rounded-2xl border border-white/5 mb-8 text-left"><p className="text-xl text-slate-200 leading-relaxed italic">"{activeTriviaState.activeTrivia.question}"</p></div>
                 <button onClick={proceedToBattle} className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 group">{question ? "Start Duel" : "Loading..."}<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></button>
             </div>
          </div>
      )}

      {/* Main Lobby (Town Square) */}
      {gamePhase === 'lobby' && lobbyView === 'main' && (
          <div className="absolute inset-0 z-0">
              <img 
                  src={TOWNSQUARE_BG} 
                  className="w-full h-full object-cover"
                  alt="Town Square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none"></div>
              
              {/* Bottom Navigation */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-50 flex justify-center pb-8">
                  <div className="flex items-center gap-4 md:gap-8 bg-black/20 backdrop-blur-md p-4 rounded-3xl border border-white/5 shadow-2xl">
                      <NavButton icon={Map} label="Map" onClick={() => setLobbyView('map')} />
                      <NavButton icon={User} label="Character" onClick={() => setLobbyView('character')} />
                      <NavButton icon={Anvil} label="Blacksmith" onClick={() => setLobbyView('blacksmith')} />
                      <NavButton icon={PawPrint} label="Pets" onClick={() => setLobbyView('pets')} />
                      <NavButton icon={Zap} label="Skills" onClick={() => setLobbyView('elements')} />
                      <div className="w-px h-10 bg-white/10 mx-2"></div>
                      <NavButton icon={BookOpen} label="Library" onClick={() => setLobbyView('library')} />
                  </div>
              </div>
          </div>
      )}

      {gamePhase === 'lobby' && lobbyView === 'character' && (
          <div className="fixed inset-0 z-[200] bg-[#020617] flex flex-col overflow-y-auto custom-scrollbar">
             {/* Return Button */}
             <div className="absolute top-4 left-4 z-[220]">
                <button 
                  onClick={() => setLobbyView('main')} 
                  className="p-3 bg-black/40 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors shadow-lg"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
             </div>

             <div className="flex flex-col h-full p-4 pt-16 max-w-7xl mx-auto w-full gap-4">
                 {/* Header */}
                 <div className="flex justify-between items-center mb-2 px-2 shrink-0">
                     <h2 className="text-3xl font-black uppercase tracking-tight text-white flex items-center gap-2"><User className="w-6 h-6"/> Hero Profile</h2>
                     {player.statPoints > 0 && <div className="bg-emerald-600 px-4 py-2 rounded-xl animate-pulse flex items-center gap-2"><UserPlus className="w-4 h-4"/> <span className="font-bold">{player.statPoints} Points</span></div>}
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pb-8">
                     {/* COL 1: Paper Doll (Hero & Gear) */}
                     <div className="lg:col-span-4 bg-slate-900/40 border border-white/5 rounded-3xl p-4 flex flex-col items-center justify-center relative shadow-lg min-h-[400px]">
                         <div className="grid grid-cols-3 gap-12 items-center relative z-10 w-full max-w-lg">
                             {/* Left Slots */}
                             <div className="flex flex-col gap-8 items-end">
                                 <ArmorySlot type="head" item={player.equipment.head} onClick={() => player.equipment.head && unequipItem(player.equipment.head)} onHover={handleSlotHover} onLeave={handleTooltipLeave} />
                                 <ArmorySlot type="chest" item={player.equipment.chest} onClick={() => player.equipment.chest && unequipItem(player.equipment.chest)} onHover={handleSlotHover} onLeave={handleTooltipLeave} />
                                 <ArmorySlot type="hands" item={player.equipment.hands} onClick={() => player.equipment.hands && unequipItem(player.equipment.hands)} onHover={handleSlotHover} onLeave={handleTooltipLeave} />
                             </div>
                             
                             {/* Center Image */}
                             <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-indigo-500/30 p-1 mx-auto relative group">
                                 <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all"></div>
                                 <div className="w-full h-full rounded-full bg-black overflow-hidden border-2 border-white/10 relative z-10 flex items-center justify-center">
                                     <img src={HERO_PROFILE_URL} className="w-full h-full object-cover scale-150 translate-y-2" />
                                 </div>
                                 <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black/80 px-3 py-0.5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-indigo-300 whitespace-nowrap z-20">Lvl {player.level}</div>
                             </div>

                             {/* Right Slots */}
                             <div className="flex flex-col gap-8 items-start">
                                 <ArmorySlot type="weapon" item={player.equipment.weapon} onClick={() => player.equipment.weapon && unequipItem(player.equipment.weapon)} onHover={handleSlotHover} onLeave={handleTooltipLeave} />
                                 <ArmorySlot type="relic" item={player.equipment.relic} onClick={() => player.equipment.relic && unequipItem(player.equipment.relic)} onHover={handleSlotHover} onLeave={handleTooltipLeave} />
                                 <ArmorySlot type="feet" item={player.equipment.feet} onClick={() => player.equipment.feet && unequipItem(player.equipment.feet)} onHover={handleSlotHover} onLeave={handleTooltipLeave} />
                             </div>
                         </div>
                     </div>

                     {/* COL 2: Holistic Stats Dashboard */}
                     <div className="lg:col-span-4 bg-black/40 border border-white/10 rounded-3xl p-6 flex flex-col gap-6 shadow-xl backdrop-blur-md relative overflow-hidden transition-all duration-300">
                         <div className="absolute top-0 right-0 p-4 opacity-10"><BarChart3 className="w-24 h-24 text-white" /></div>
                         
                                 <div className="flex-1 flex flex-col min-h-0">
                                     <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2"><BarChart3 className="w-4 h-4"/> Combat Metrics</h3>
                                     <div className="grid grid-cols-1 gap-3 overflow-y-auto custom-scrollbar pr-2 max-h-[350px]">
                                         {(() => {
                                             const s = calculateStats();
                                             let crit = 0;
                                             let armorPen = 0;
                                             let fireRes = 0;
                                             let iceRes = 0;
                                             let thunderRes = 0;

                                             (Object.values(player.equipment) as (RPGItem | null)[]).forEach(item => {
                                                 if (item?.perk?.type === 'crit_chance') crit += item.perk.value;
                                                 if (item?.perk?.type === 'armor_pen') armorPen += item.perk.value;
                                                 if (item?.perk?.type === 'burn_res') fireRes += item.perk.value;
                                                 if (item?.perk?.type === 'freeze_res') iceRes += item.perk.value;
                                                 if (item?.perk?.type === 'def_red_res') thunderRes += item.perk.value;
                                             });

                                             const statsList = [
                                                 { key: 'atk', label: 'Attack', icon: Sword, color: 'text-rose-400', total: s.atk, base: player.atk, canUpgrade: true, show: true },
                                                 { key: 'def', label: 'Defense', icon: Shield, color: 'text-amber-400', total: s.def, base: player.def, canUpgrade: true, show: true },
                                                 { key: 'maxHp', label: 'Health', icon: Heart, color: 'text-emerald-400', total: s.maxHp, base: player.maxHp, canUpgrade: true, show: true },
                                                 { key: 'maxMana', label: 'Mana', icon: Zap, color: 'text-blue-400', total: s.maxMana, base: player.maxMana, canUpgrade: true, show: true },
                                                 { key: 'crit', label: 'Crit %', icon: TargetIcon, color: 'text-yellow-400', total: crit, base: 0, canUpgrade: false, show: crit > 0 },
                                                 { key: 'pen', label: 'Armor Pen', icon: ShieldCheck, color: 'text-purple-400', total: armorPen, base: 0, canUpgrade: false, show: armorPen > 0 },
                                                 { key: 'fire', label: 'Fire Res', icon: FlameIcon, color: 'text-orange-500', total: fireRes, base: 0, canUpgrade: false, show: fireRes > 0 },
                                                 { key: 'ice', label: 'Ice Res', icon: Snowflake, color: 'text-cyan-400', total: iceRes, base: 0, canUpgrade: false, show: iceRes > 0 },
                                                 { key: 'thunder', label: 'Thunder Res', icon: LightningIcon, color: 'text-yellow-300', total: thunderRes, base: 0, canUpgrade: false, show: thunderRes > 0 }
                                             ];

                                             return statsList.filter(stat => stat.show).map(stat => (
                                                 <div key={stat.key} 
                                                    onMouseEnter={(e) => setTooltipData({ content: { type: 'text', title: stat.label, body: STAT_DESCRIPTIONS[stat.key] || "No description." }, x: e.clientX, y: e.clientY })}
                                                    onMouseLeave={handleTooltipLeave}
                                                    className="bg-slate-800/50 p-3 rounded-xl border border-white/5 flex items-center justify-between group relative z-10 hover:bg-slate-800 transition-colors cursor-help"
                                                 >
                                                     <div className="flex items-center gap-2">
                                                         <div className={`p-1.5 rounded-lg bg-black/40 ${stat.color}`}><stat.icon className="w-3.5 h-3.5" /></div>
                                                         <span className="text-[10px] font-bold text-slate-400 uppercase">{stat.label}</span>
                                                     </div>
                                                     <div className="flex items-center gap-2">
                                                         <div className="flex items-center gap-1 font-mono text-xs">
                                                            <span className="text-white font-black">{stat.total}{stat.key === 'crit' || stat.key === 'pen' || stat.key === 'fire' || stat.key === 'ice' || stat.key === 'thunder' ? '%' : ''}</span>
                                                            {(stat.total > stat.base && stat.base > 0) && (
                                                               <span className="text-emerald-400 font-bold ml-1 text-[10px]">(+{stat.total - stat.base})</span>
                                                            )}
                                                         </div>
                                                         {stat.canUpgrade && player.statPoints > 0 && (
                                                             <button 
                                                                onClick={(e) => { 
                                                                    e.stopPropagation(); 
                                                                    e.preventDefault();
                                                                    allocateStat(stat.key as any); 
                                                                }} 
                                                                className="p-1 bg-indigo-600 hover:bg-indigo-500 rounded text-white transition-all cursor-pointer z-50 hover:scale-110 shadow-lg"
                                                             >
                                                                 <Plus className="w-3 h-3"/>
                                                             </button>
                                                         )}
                                                     </div>
                                                 </div>
                                             ));
                                         })()}
                                     </div>
                                 </div>

                                 <div className="mt-auto border-t border-white/10 pt-4">
                                     <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2"><Layers className="w-4 h-4"/> Active Skills</h3>
                                     <div className="space-y-2 overflow-y-auto custom-scrollbar max-h-[150px] pr-2">
                                         {(Object.keys(player.elemental) as Array<keyof typeof player.elemental>).map(elem => {
                                             const lvl = player.elemental[elem];
                                             if (lvl === 0) return null;
                                             const info = ELEMENT_INFO[elem];
                                             const scaling = info.scaling(lvl);
                                             
                                             return (
                                                 <div key={elem} className={`flex flex-col text-xs bg-black/30 p-2 rounded-lg border border-white/5 hover:bg-white/5 transition-colors`}>
                                                     <div className="flex justify-between items-center mb-1">
                                                        <span className={`${info.color} font-bold flex items-center gap-1`}>
                                                            <info.icon className="w-3 h-3"/> {info.name}
                                                        </span>
                                                        <span className="text-[8px] font-black uppercase text-slate-500 bg-black/40 px-1.5 py-0.5 rounded">Lvl {lvl}</span>
                                                     </div>
                                                     <p className="text-slate-400 text-[10px] leading-snug">{scaling.current}</p>
                                                 </div>
                                             );
                                         })}
                                         {Object.values(player.elemental).every(v => v === 0) && (
                                             <div className="text-center text-[10px] text-slate-500 italic py-4">No active skills learned. Visit the Skills menu to unlock power.</div>
                                         )}
                                     </div>
                                 </div>
                     </div>

                     {/* COL 3: Compact Inventory */}
                     <div className="lg:col-span-4 bg-slate-900/40 border border-white/5 rounded-3xl p-4 flex flex-col min-h-[400px]">
                         <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2"><Box className="w-3 h-3"/> Backpack</h3>
                         <div className="flex flex-wrap content-start gap-2 overflow-y-auto custom-scrollbar flex-1 pr-1 max-h-[500px]">
                             {player.inventory.map(item => {
                                 const theme = QUALITY_THEMES[item.quality];
                                 const isEquipped = false;
                                 return (
                                    <button 
                                      key={item.id} 
                                      onClick={() => equipItem(item)} 
                                      onMouseEnter={(e) => setTooltipData({ content: { type: 'item', data: item, equipped: player.equipment[item.type] }, x: e.clientX, y: e.clientY })}
                                      onMouseLeave={handleTooltipLeave}
                                      className={`w-14 h-14 md:w-16 md:h-16 rounded-xl border-2 flex items-center justify-center transition-all hover:scale-110 relative ${theme.border} ${theme.bg} shadow-sm group`}
                                    >
                                        <img src={item.iconUrl} className="w-10 h-10 md:w-12 md:h-12 object-contain p-1" />
                                        {item.upgradeLevel > 0 && <span className="absolute top-0 right-0 bg-amber-500 text-black text-[6px] font-black px-1 rounded-bl shadow-sm">+{item.upgradeLevel}</span>}
                                        {item.perk && <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>}
                                    </button>
                                 );
                             })}
                             {[...Array(Math.max(0, 20 - player.inventory.length))].map((_, i) => (
                                 <div key={`empty-${i}`} className="w-14 h-14 md:w-16 md:h-16 rounded-xl border-2 border-white/5 bg-black/20"></div>
                             ))}
                         </div>
                     </div>
                 </div>
             </div>
          </div>
      )}

      {/* ... (Map view code) ... */}
      {gamePhase === 'lobby' && lobbyView === 'map' && (
          <div className="fixed inset-0 z-[200] bg-[#020617] flex flex-col p-8 overflow-hidden">
             <CosmicDust />
             {/* Return Button */}
            <div className="absolute top-4 left-4 z-[210]">
                <button 
                  onClick={() => setLobbyView('main')} 
                  className="p-3 bg-black/40 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors shadow-lg"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto w-full h-full flex flex-col justify-center items-center space-y-16 animate-fade-in pt-16">
                
                {/* Levels */}
                <div className="relative w-full flex justify-between items-center px-4 md:px-12">
                     {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20 -translate-y-1/2 z-0 mx-8 md:mx-20"></div>
                    
                    {[1, 2, 3, 4, 5].map((offset) => { 
                        const waveNum = (viewingChapter - 1) * 5 + offset; 
                        return <MapNode key={waveNum} wave={waveNum} current={player.campaign.currentWave} onClick={() => startBattle(waveNum)} />; 
                    })}
                </div>

                {/* Region Navigation */}
                <div className="flex justify-center items-center gap-8 md:gap-16">
                    <button 
                        disabled={viewingChapter <= 1} 
                        onClick={() => setViewingChapter(c => c - 1)} 
                        className="p-4 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                        <ChevronLeft className="w-8 h-8 text-white"/>
                    </button>
                    
                    <div className="text-center w-full max-w-2xl px-4"> 
                        <div className="text-[10px] text-indigo-300 uppercase font-black tracking-[0.2em] mb-2 opacity-80 drop-shadow-md">Region {viewingChapter}</div>
                        <div className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter drop-shadow-lg leading-none truncate w-full">
                            {TRIVIA_DATA[viewingChapter-1]?.country || "Unknown"}
                        </div>
                    </div>
                    
                    <button 
                        disabled={viewingChapter >= 10} 
                        onClick={() => setViewingChapter(c => c + 1)} 
                        className="p-4 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                        <ChevronRight className="w-8 h-8 text-white"/>
                    </button>
                </div>
            </div>
            
            {/* Coins Display (Top Right) */}
             <div className="absolute top-4 right-4 pointer-events-auto bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/30 flex items-center gap-2 z-[210]">
                  <Coins className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-amber-100">{player.coins.toLocaleString()}</span>
              </div>
          </div>
      )}

    </div>
  );
};

export default RPGMode;
