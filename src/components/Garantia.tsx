import React from "react";
import { Check } from "lucide-react";

export const Garantia: React.FC = () => {
  return (
    <section id="garantia" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial-gradient-purple opacity-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="guarantee-card relative p-[2px] rounded-3xl overflow-hidden group shadow-2xl shadow-brand-green/10">
          {/* Luz Neon Conic Giratória de Borda (Rotating Border Beam) */}
          <div className="guarantee-card-beam-light animate-spin-beam pointer-events-none"></div>
          {/* Aura Neon de Brilho Difuso Externa */}
          <div className="guarantee-card-beam-glow animate-spin-beam pointer-events-none"></div>

          {/* Conteúdo Interno Escuro do Cartão */}
          <div className="relative z-10 bg-[#0c0e17] rounded-[22px] p-8 md:p-12 overflow-hidden h-full w-full">
            {/* Glow sutil de fundo interno no canto */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-brand-green/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-brand-green/5 border border-brand-green/20 flex items-center justify-center shrink-0 relative shadow-inner group-hover:border-brand-green/40 transition-colors">
                <span className="text-7xl md:text-9xl font-display font-black text-brand-green text-glow-green select-none">
                  7
                </span>
                <span className="absolute bottom-2 font-mono text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  DIAS DE GARANTIA
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-brand-green bg-brand-green/10 border border-brand-green/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold mb-3 inline-block">
                  Compromisso de Risco Zero
                </span>
                <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                  Garantia incondicional de 7 dias
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4">
                  O nosso objetivo é a sua evolução profissional. Por isso, oferecemos um período de teste sem riscos. Entrou
                  no portal, navegou pelas aulas, acessou a comunidade de alunos e achou que a metodologia não é pra você?
                  Devolvemos <strong>100% do seu dinheiro</strong> investido em até 7 dias, de forma rápida, sem burocracia e
                  sem ressentimentos.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-green select-none">
                  <Check className="w-3.5 h-3.5" />
                  <span>Seu futuro assegurado, com total tranquilidade.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
