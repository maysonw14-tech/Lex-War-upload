
import React from 'react';
import { Star, Flame, Zap, Award, Orbit, AlertTriangle, Sword, Shield, Heart, Activity } from 'lucide-react';

interface StatsDashboardProps {
  masteredCount: number;
  totalWords: number;
  streak: number;
  dueCount?: number; 
  level: number;
  rpgStats: {
      atk: number;
      def: number;
      maxHp: number;
      maxMana: number;
  };
  avatarUrl?: string;
}

const StatsDashboard: React.FC<StatsDashboardProps> = ({ 
    masteredCount, 
    totalWords, 
    streak, 
    dueCount = 0, 
    level,
    rpgStats,
    avatarUrl
}) => {

  // Reusable Stat Row Component for RPG Stats
  const StatRow = ({ icon: Icon, label, value, color, barColor }: any) => (
    <div className="flex items-center gap-3 w-full">
        <div className={`p-1.5 rounded-lg bg-black/40 border border-white/5 ${color}`}>
            <Icon className="w-3 h-3" />
        </div>
        <div className="flex-1 min-w-0">
            <div className="flex justify-between items-end mb-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{label}</span>
                <span className="text-sm font-black text-white font-mono">{value}</span>
            </div>
            {/* Decorative Bar */}
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full ${barColor} w-full opacity-80`} style={{ width: '100%' }}></div>
            </div>
        </div>
    </div>
  );

  // Reusable Tile for Learning Stats
  const MetricTile = ({ icon: Icon, label, value, subtext, accent }: any) => (
      <div className="bg-black/20 border border-white/5 rounded-xl p-3 flex items-center justify-between group hover:bg-white/5 transition-colors relative overflow-hidden">
          <div className={`absolute left-0 top-0 bottom-0 w-1 ${accent} opacity-50`}></div>
          <div className="flex flex-col">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">{label}</span>
              <span className="text-lg font-black text-white leading-none">{value}</span>
          </div>
          <Icon className={`w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity ${accent.replace('bg-', 'text-')}`} />
      </div>
  );

  return (
    <div className="w-full max-w-5xl mb-8 animate-fade-in px-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* LEFT: Combat Profile (Hero & Attributes) */}
        <div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-5 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center">
                
                {/* Hero Avatar Section */}
                <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-2 border-white/10 bg-black/40 overflow-hidden shadow-2xl relative group">
                        {avatarUrl ? (
                            <img src={avatarUrl} alt="Hero" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-700">No Signal</div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm py-1 text-center border-t border-white/10">
                            <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest">Lvl {level}</span>
                        </div>
                    </div>
                </div>

                {/* Attributes Grid */}
                <div className="flex-1 w-full grid grid-cols-2 gap-x-6 gap-y-4">
                    <StatRow 
                        icon={Heart} 
                        label="Health" 
                        value={rpgStats.maxHp} 
                        color="text-emerald-400" 
                        barColor="bg-emerald-500" 
                    />
                    <StatRow 
                        icon={Sword} 
                        label="Attack" 
                        value={rpgStats.atk} 
                        color="text-rose-400" 
                        barColor="bg-rose-500" 
                    />
                    <StatRow 
                        icon={Zap} 
                        label="Mana" 
                        value={rpgStats.maxMana} 
                        color="text-blue-400" 
                        barColor="bg-blue-500" 
                    />
                    <StatRow 
                        icon={Shield} 
                        label="Defense" 
                        value={rpgStats.def} 
                        color="text-amber-200" 
                        barColor="bg-amber-400" 
                    />
                </div>
            </div>
        </div>

        {/* RIGHT: Neural Link (Learning Metrics) */}
        <div className="lg:col-span-5 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2 h-full">
                <MetricTile 
                    icon={Flame} 
                    label="Day Streak" 
                    value={streak} 
                    accent="bg-orange-500" 
                />
                <MetricTile 
                    icon={Orbit} 
                    label="Discovered" 
                    value={totalWords} 
                    accent="bg-indigo-500" 
                />
                <MetricTile 
                    icon={AlertTriangle} 
                    label="Neural Decay" 
                    value={dueCount} 
                    accent="bg-rose-500" 
                />
                <MetricTile 
                    icon={Award} 
                    label="Mastered" 
                    value={masteredCount} 
                    accent="bg-purple-500" 
                />
            </div>
        </div>

      </div>
    </div>
  );
};

export default StatsDashboard;
