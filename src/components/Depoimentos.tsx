import React, { useEffect } from "react";
import { MessageSquare, Star, Award, TrendingUp, ArrowUpRight } from "lucide-react";
import { testimonialsData } from "../data/testimonials";
import { setupGlitchText } from "../utils/glitch";
import { SafeImage } from "./SafeImage";

export const Depoimentos: React.FC = () => {
  useEffect(() => {
    setupGlitchText("glitch-alunos-target", { delay: 0.2, stagger: 0.07, maxFlickers: 5, useObserver: true });
  }, []);

  return (
    <section id="depoimentos" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-gradient-purple opacity-10 pointer-events-none rounded-full"></div>
      <div className="absolute right-10 bottom-10 w-[400px] h-[400px] bg-radial-gradient-green opacity-15 pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full">
            <MessageSquare className="text-brand-green w-3 h-3" />
            <span className="text-[10px] font-mono text-brand-green uppercase tracking-widest font-bold">
              Histórias Reais de Sucesso
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Depoimentos de{" "}
            <span id="glitch-alunos-target" className="text-brand-green text-glow-green font-mono font-bold inline-block">
              alunos
            </span>
          </h2>

          <p className="text-slate-400 text-sm font-light leading-relaxed">
            De balconistas e entregadores a desenvolvedores consolidados. Veja como a nossa metodologia focada em prática e
            comunidade transformou vidas reais.
          </p>
        </div>

        <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((test, idx) => (
            <div
              key={idx}
              className="testimonial-card flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-green/30 backdrop-blur-md transition-all duration-300 relative group"
            >
              <div className="space-y-6 relative z-10">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light italic">
                  "{test.text}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full shrink-0 aspect-square overflow-hidden border border-white/10 bg-[#121214] select-none shadow-md shadow-black">
                    <SafeImage
                      src={test.avatarImage}
                      alt={test.name}
                      fallbackText={test.name.slice(0, 2).toUpperCase()}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-bold text-xs md:text-sm font-display truncate">{test.name}</h4>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5 truncate">
                      Antes: <span className="text-slate-400 font-light">{test.formerJob}</span>
                    </p>
                    <p className="text-[10px] text-brand-green font-mono font-semibold flex items-center gap-1 mt-0.5 truncate">
                      Hoje: <span className="truncate">{test.currentJob}</span>
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wider">Salário</span>
                  <div className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-brand-green/10 border border-brand-green/20 rounded-md">
                    <Award className="text-brand-green w-3 h-3" />
                    <span className="text-[10px] font-mono text-brand-green font-bold">{test.salaryIncrease}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto testimonial-summary-card border border-white/10 bg-white/[0.01] backdrop-blur-md rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 min-w-[48px] min-h-[48px] shrink-0 aspect-square rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple border border-brand-purple/20">
              <TrendingUp className="text-brand-purple w-5.5 h-5.5" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm md:text-base font-display">
                Índice de Empregabilidade Superior a 94%
              </h3>
              <p className="text-slate-400 text-xs font-light">
                Nossos alunos que completam a trilha principal de formação conquistam posições no mercado nacional e internacional.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-green select-none shrink-0 border border-brand-green/20 bg-brand-green/5 px-4 py-2 rounded-xl">
            <span>Metodologia Validada</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </section>
  );
};
