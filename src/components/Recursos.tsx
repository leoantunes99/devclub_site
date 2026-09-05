import React, { useEffect } from "react";
import { UserCheck, Heart, MessageSquare, Cpu, Briefcase, TrendingUp } from "lucide-react";
import { recursosList } from "../data/recursos";
import { setupGlitchText } from "../utils/glitch";

export const Recursos: React.FC = () => {
  useEffect(() => {
    setupGlitchText("glitch-evoluir-target", { delay: 0.2, stagger: 0.07, maxFlickers: 5, useObserver: true });
  }, []);

  const renderIcon = (name: string) => {
    switch (name) {
      case "user-check":
        return <UserCheck className="text-brand-purple w-5 h-5" />;
      case "heart":
        return <Heart className="text-brand-purple w-5 h-5" />;
      case "message-square":
        return <MessageSquare className="text-brand-purple w-5 h-5" />;
      case "cpu":
        return <Cpu className="text-brand-purple w-5 h-5" />;
      case "briefcase":
        return <Briefcase className="text-brand-purple w-5 h-5" />;
      case "trending-up":
        return <TrendingUp className="text-brand-purple w-5 h-5" />;
      default:
        return <UserCheck className="text-brand-purple w-5 h-5" />;
    }
  };

  return (
    <section id="recursos" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute left-1/3 top-1/2 w-[400px] h-[400px] bg-radial-gradient-purple opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 section-header-anim">
          <span className="text-[10px] tracking-widest font-mono text-brand-green uppercase font-semibold flex items-center justify-center gap-1.5 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping"></span>
            ALÉM DO CÓDIGO
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-4">
            Tudo que você precisa para <br />
            <span id="glitch-evoluir-target" className="text-brand-green text-glow-green font-mono font-bold inline-block">
              evoluir mais rápido
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Aprender a programar é só parte do caminho. A gente cuida de todo o resto pra você decolar.
          </p>
        </div>

        <div id="recursos-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recursosList.map((r, idx) => (
            <div
              key={idx}
              className="recurso-card bento-card rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-purple/30 backdrop-blur-md p-6 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 group-hover:bg-brand-purple/10 group-hover:border-brand-purple/20 transition-all duration-300">
                    {renderIcon(r.icon)}
                  </div>
                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5">
                    {r.badge}
                  </span>
                </div>
                <h3 className="text-white font-bold text-sm md:text-base mb-2 group-hover:text-brand-purple transition-colors font-display">
                  {r.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light">{r.desc}</p>
              </div>
              <div className="h-[1px] w-full bg-white/5 mt-6 group-hover:bg-brand-purple/30 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
