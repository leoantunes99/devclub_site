import React, { useState, useEffect } from "react";
import { HelpCircle, Plus } from "lucide-react";
import { faqData } from "../data/faq";
import { setupGlitchText } from "../utils/glitch";
import { SafeImage } from "./SafeImage";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setupGlitchText("glitch-frequentes-target", { delay: 0.2, stagger: 0.07, maxFlickers: 5, useObserver: true });
  }, []);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute right-1/4 top-1/4 w-[500px] h-[500px] bg-radial-gradient-purple opacity-15 pointer-events-none"></div>
      <div className="absolute -left-1/4 bottom-0 w-[500px] h-[500px] bg-radial-gradient-green opacity-15 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Título, Selo e Cartão de Suporte */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-start lg:h-[440px] lg:justify-between">
            <div className="faq-header-anim">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-[11px] font-mono text-brand-green mb-6">
                <span>FAQ</span>
                <HelpCircle className="w-3 h-3 text-brand-green" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-bold tracking-tight text-white leading-tight">
                Perguntas
                <br />
                <span
                  id="glitch-frequentes-target"
                  className="text-brand-green text-glow-green font-mono font-bold inline-block"
                >
                  frequentes
                </span>
              </h2>
            </div>

            {/* Cartão de Suporte do WhatsApp (Desktop) */}
            <div className="faq-support-card bg-white/[0.02] border border-white/5 rounded-2xl p-5 relative overflow-hidden backdrop-blur-md max-w-[260px] w-full shadow-xl hidden lg:block">
              <div className="absolute -right-12 -bottom-12 w-24 h-24 bg-brand-green/10 rounded-full blur-xl pointer-events-none"></div>

              <div className="flex flex-col gap-4 relative z-10">
                <div className="relative w-11 h-11 shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden border border-white/10 bg-[#121214]">
                    <SafeImage
                      src="/assets/images/avatar_suporte_1784817380520.jpg"
                      alt="Suporte DevClub"
                      fallbackText="DEV"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-brand-green border-2 border-[#050505] rounded-full z-10"></span>
                </div>

                <p className="text-slate-100 text-[17px] font-bold leading-relaxed">
                  Se ainda estiver com dúvidas nossa equipe está a disposição:
                </p>

                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-brand-green hover:bg-[#00f799] text-[#04050a] font-bold text-sm rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-green/20 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Falar com o suporte</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Sanfona + Cartão de Suporte Mobile */}
          <div className="lg:col-span-7">
            <div id="faq-accordion" className="space-y-4">
              {faqData.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`faq-item border backdrop-blur-md rounded-2xl transition-all duration-300 overflow-hidden hover:border-brand-green/30 ${
                      isOpen
                        ? "faq-open border-brand-green/30 bg-white/[0.05]"
                        : "border-white/5 bg-white/[0.02]"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="faq-toggle w-full flex items-center justify-between p-6 md:p-7 text-left cursor-pointer select-none"
                    >
                      <h3
                        className={`faq-question font-display font-semibold text-sm md:text-base transition-colors duration-300 ${
                          isOpen ? "text-brand-green" : "text-slate-200"
                        }`}
                      >
                        {item.question}
                      </h3>
                      <div
                        className={`faq-icon-wrapper w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                          isOpen
                            ? "bg-brand-green/20 border-brand-green/30 text-brand-green rotate-45"
                            : "bg-white/5 border-white/5 text-slate-400"
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                      </div>
                    </button>

                    <div
                      className={`faq-collapse-body transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-6 md:p-7 text-xs md:text-sm text-slate-400 leading-relaxed bg-white/[0.01] border-t border-white/5">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cartão de Suporte Mobile */}
            <div className="faq-support-card bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md w-full shadow-xl mt-8 lg:hidden">
              <div className="absolute -right-12 -bottom-12 w-24 h-24 bg-brand-green/10 rounded-full blur-xl pointer-events-none"></div>

              <div className="flex flex-col gap-4 relative z-10">
                <div className="relative w-12 h-12 shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden border border-white/10 bg-[#121214]">
                    <SafeImage
                      src="/assets/images/avatar_suporte_1784817380520.jpg"
                      alt="Suporte DevClub"
                      fallbackText="DEV"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-brand-green border-2 border-[#050505] rounded-full z-10"></span>
                </div>

                <p className="text-slate-200 text-sm font-medium leading-relaxed">
                  Se ainda estiver com dúvidas nossa equipe está a disposição:
                </p>

                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 bg-brand-green hover:bg-[#00f799] text-[#04050a] font-bold text-sm rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-brand-green/20 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Falar com o suporte</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
