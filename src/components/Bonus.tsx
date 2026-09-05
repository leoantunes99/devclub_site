import React, { useEffect } from "react";
import { Gift, Globe, TrendingUp, Sparkles, Terminal, Check } from "lucide-react";
import { bonusList } from "../data/bonus";
import { setupGlitchText } from "../utils/glitch";

export const Bonus: React.FC = () => {
  useEffect(() => {
    setupGlitchText("glitch-bonus-target", { delay: 0.2, stagger: 0.07, maxFlickers: 5, useObserver: true });
  }, []);

  const renderIcon = (name: string) => {
    switch (name) {
      case "globe":
        return <Globe className="text-brand-purple w-5 h-5" />;
      case "trending-up":
        return <TrendingUp className="text-brand-purple w-5 h-5" />;
      case "sparkles":
        return <Sparkles className="text-brand-purple w-5 h-5" />;
      case "terminal":
        return <Terminal className="text-brand-purple w-5 h-5" />;
      default:
        return <Gift className="text-brand-purple w-5 h-5" />;
    }
  };

  return (
    <section id="bonus" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute right-1/4 top-1/4 w-[400px] h-[400px] bg-radial-gradient-purple opacity-10 pointer-events-none rounded-full"></div>
      <div className="absolute left-1/4 bottom-1/4 w-[500px] h-[500px] bg-radial-gradient-green opacity-10 pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="bonus-header-anim inline-flex items-center gap-2 px-3 py-1 bg-brand-purple/10 border border-brand-purple/20 rounded-full">
            <Gift className="text-brand-purple w-3 h-3" />
            <span className="text-[10px] font-mono text-brand-purple uppercase tracking-widest font-bold">
              Super Bônus Inclusos Sem Custo Extra
            </span>
          </div>

          <h2 className="bonus-header-anim text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Módulos{" "}
            <span id="glitch-bonus-target" className="text-brand-green text-glow-green font-mono font-bold inline-block">
              bônus
            </span>{" "}
            de carreira
          </h2>

          <p className="bonus-header-anim text-slate-400 text-sm font-light leading-relaxed">
            Formamos desenvolvedores completos de verdade. Por isso, oferecemos módulos adicionais que vão te ajudar a decolar
            sua performance e maximizar seus ganhos financeiros.
          </p>
        </div>

        <div id="bonus-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonusList.map((bonus, idx) => (
            <div
              key={idx}
              className="bonus-card-anim rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-purple/30 backdrop-blur-md p-6 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:bg-brand-purple/10 group-hover:border-brand-purple/20 transition-all duration-300">
                    {renderIcon(bonus.icon)}
                  </div>
                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5">
                    {bonus.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-white font-bold text-sm md:text-base font-display group-hover:text-brand-purple transition-colors">
                    {bonus.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">{bonus.desc}</p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/5 space-y-2">
                <span className="text-[9px] font-mono font-bold text-slate-500 block uppercase tracking-widest mb-1">
                  O que você vai aprender
                </span>
                {bonus.topics.map((t, tIdx) => (
                  <div key={tIdx} className="flex items-center gap-1.5 text-[10px] text-slate-400">
                    <Check className="text-brand-purple w-3 h-3 shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
