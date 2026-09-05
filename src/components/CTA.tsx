import React, { useEffect } from "react";
import { Laptop, ArrowRight } from "lucide-react";
import { setupGlitchText } from "../utils/glitch";

interface CTAProps {
  onOpenRegister: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenRegister }) => {
  useEffect(() => {
    setupGlitchText("glitch-deploy-target", { delay: 0.2, stagger: 0.07, maxFlickers: 5, useObserver: true });
  }, []);

  return (
    <section className="cta-section py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,223,137,0.08)_0%,transparent_60%)] pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="cta-content flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green mb-6 animate-pulse">
            <Laptop className="w-6 h-6" />
          </div>

          <span className="text-[10px] tracking-widest font-mono text-brand-green uppercase font-semibold flex items-center justify-center gap-1.5 mb-3">
            COMECE HOJE MESMO
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-6 max-w-2xl leading-tight">
            Seu próximo{" "}
            <span id="glitch-deploy-target" className="text-brand-green text-glow-green font-mono font-bold inline-block">
              deploy
            </span>{" "}
            <br />é o sucesso da sua carreira
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-xl mb-10 leading-relaxed">
            Junte-se hoje a mais de 25 mil alunos dedicados que tomaram a decisão inteligente de aprender tecnologia de
            verdade e conquistaram vagas nas maiores empresas tech do mundo.
          </p>

          <button
            onClick={onOpenRegister}
            className="open-register w-full sm:w-auto px-10 py-5 bg-brand-green hover:bg-[#00f799] text-[#04050a] font-bold text-base md:text-lg rounded-2xl transition-all duration-300 shadow-xl shadow-brand-green/20 cursor-pointer flex items-center justify-center gap-3 group hover:-translate-y-0.5"
          >
            <span>Quero ser aluno agora mesmo</span>
            <ArrowRight className="w-4.5 h-4.5 transform group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-4 justify-center text-[10px] font-mono text-slate-500 mt-6 select-none">
            <span>Acesso imediato</span>
            <span>•</span>
            <span>Garantia oficial de 7 dias</span>
            <span>•</span>
            <span>Suporte 7 dias por semana</span>
          </div>
        </div>
      </div>
    </section>
  );
};
