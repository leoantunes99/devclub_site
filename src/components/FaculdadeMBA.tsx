import React, { useEffect } from "react";
import { Sparkles, Bot, Cpu, Zap, GraduationCap, ShieldCheck, ArrowRight } from "lucide-react";
import { mbaFeaturesList } from "../data/mba";
import { setupGlitchText } from "../utils/glitch";

interface FaculdadeMBAProps {
  onOpenRegister: () => void;
}

export const FaculdadeMBA: React.FC<FaculdadeMBAProps> = ({ onOpenRegister }) => {
  useEffect(() => {
    setupGlitchText("glitch-ia-target", { delay: 0.2, stagger: 0.07, maxFlickers: 5, useObserver: true });
  }, []);

  const renderIcon = (name: string) => {
    switch (name) {
      case "bot":
        return <Bot className="text-brand-green w-5 h-5" />;
      case "cpu":
        return <Cpu className="text-brand-green w-5 h-5" />;
      case "zap":
        return <Zap className="text-brand-green w-5 h-5" />;
      case "graduation-cap":
        return <GraduationCap className="text-brand-green w-5 h-5" />;
      default:
        return <Bot className="text-brand-green w-5 h-5" />;
    }
  };

  return (
    <section id="faculdade" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-radial-gradient-purple opacity-20 pointer-events-none rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-radial-gradient-green opacity-15 pointer-events-none rounded-full"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:48px_48px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 section-header-anim">
          <div className="mba-animate-item inline-flex items-center gap-2 px-3 py-1 bg-brand-purple/10 border border-brand-purple/20 rounded-full">
            <Sparkles className="text-brand-purple w-3 h-3" />
            <span className="text-[10px] font-mono text-brand-purple uppercase tracking-widest font-bold">
              Pós-Graduação Oficial Reconhecida pelo MEC
            </span>
          </div>

          <h2 className="mba-animate-item text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            MBA em Engenharia de <br />
            <span id="glitch-ia-target" className="text-brand-green text-glow-green font-mono font-bold inline-block">
              IA & Automações
            </span>
          </h2>

          <p className="mba-animate-item text-slate-400 text-sm md:text-base font-light leading-relaxed">
            Deixe de ser apenas um programador executor e torne-se o profissional mais disputado do mercado de tecnologia: o
            arquiteto de soluções inteligentes que gera valor real para empresas usando Inteligência Artificial.
          </p>
        </div>

        {/* Grade do MBA */}
        <div id="mba-features-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mbaFeaturesList.map((feature, idx) => (
            <div
              key={idx}
              className="mba-animate-item bento-card rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-green/30 backdrop-blur-md p-6 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-green/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:bg-brand-green/10 group-hover:border-brand-green/20 transition-all duration-300">
                    {renderIcon(feature.icon)}
                  </div>
                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2 group-hover:text-brand-green transition-colors font-display">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light">{feature.desc}</p>
              </div>
              <div className="h-[1px] w-full bg-white/5 mt-6 group-hover:bg-brand-green/30 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Banner de CTA do MBA */}
        <div className="mba-cta-card border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-1/4 -bottom-1/4 w-96 h-96 bg-brand-green/10 blur-[80px] pointer-events-none rounded-full"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-brand-green w-4 h-4" />
                <span className="text-[10px] font-mono text-brand-green tracking-wider uppercase font-semibold">
                  Certificado Válido de Especialização Lato Sensu
                </span>
              </div>
              <h3 className="text-xl md:text-3xl font-display font-bold text-white">
                Pronto para se destacar no mercado global?
              </h3>
              <p className="text-slate-400 text-xs md:text-sm max-w-3xl leading-relaxed font-light">
                O MBA da Faculdade DevClub combina a excelência acadêmica exigida pelo MEC com a velocidade extrema das
                atualizações do mercado real. Nosso cronograma é focado em engenharia de IA, orquestração corporativa de
                dados e liderança técnica para você liderar a transformação digital das empresas.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
              <div className="text-center lg:text-right">
                <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-widest">Duração média</span>
                <span className="text-white font-bold font-display text-base md:text-lg">12 meses • 360h</span>
              </div>
              <div className="text-center lg:text-right">
                <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-widest">Modalidade</span>
                <span className="text-brand-green font-bold font-display text-base md:text-lg">100% Online e Prático</span>
              </div>
              <button
                onClick={onOpenRegister}
                className="open-register group hidden lg:flex items-center justify-center gap-2 mt-2 px-6 py-3 bg-brand-green hover:bg-[#00f799] text-[#04050a] font-bold text-xs tracking-wider rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-green/20 cursor-pointer"
              >
                <span>Fazer matrícula</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Botão de Matrícula no Mobile */}
        <div className="mt-5 flex justify-center lg:hidden mba-cta-mobile-btn">
          <button
            onClick={onOpenRegister}
            className="open-register group w-full sm:w-auto px-8 py-4 bg-brand-green hover:bg-[#00f799] text-[#04050a] font-bold text-sm tracking-wider rounded-2xl transition-all duration-300 shadow-lg shadow-brand-green/20 cursor-pointer flex items-center justify-center gap-2 active:scale-95"
          >
            <span>Fazer matrícula</span>
            <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
