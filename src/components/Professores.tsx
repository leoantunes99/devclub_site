import React, { useEffect } from "react";
import { teachersList } from "../data/teachers";
import { setupGlitchText } from "../utils/glitch";
import { SafeImage } from "./SafeImage";

export const Professores: React.FC = () => {
  useEffect(() => {
    setupGlitchText("glitch-melhores-target", { delay: 0.2, stagger: 0.07, maxFlickers: 5, useObserver: true });
  }, []);

  return (
    <section id="professores" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gradient-purple opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 section-header-anim">
          <span className="text-[10px] tracking-widest font-mono text-brand-green uppercase font-semibold flex items-center justify-center gap-1.5 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping"></span>
            CORPO DOCENTE
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-4">
            Aprenda com{" "}
            <span id="glitch-melhores-target" className="text-brand-green text-glow-green font-mono font-bold inline-block">
              os melhores
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Profissionais que atuam no mercado hoje — não apenas ensinam teoria de livros, eles vivem e respiram o dia a dia da
            tecnologia em grandes empresas.
          </p>
        </div>

        <div
          id="teachers-grid"
          className="flex flex-wrap lg:flex-nowrap justify-center items-start gap-y-8 gap-x-6 sm:gap-x-10 lg:gap-x-6 mb-20 max-w-6xl mx-auto"
        >
          {teachersList.map((t, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group cursor-pointer lg:shrink-0">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full p-[2px] bg-white/5 group-hover:bg-gradient-to-r group-hover:from-brand-green group-hover:to-brand-purple transition-all duration-500 mb-4 shadow-lg shadow-black">
                <div className="absolute inset-[3px] bg-[#050505] rounded-full z-10 overflow-hidden"></div>
                <div className="teacher-avatar relative w-full h-full rounded-full overflow-hidden z-20 flex items-center justify-center font-display font-bold text-white text-lg md:text-xl shadow-inner select-none transition-transform duration-500 group-hover:scale-95 bg-[#121214]">
                  <SafeImage
                    src={t.image}
                    alt={t.name}
                    fallbackText={t.initials}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 rounded-full bg-[#04050a]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-1.5 z-30">
                    <span className="text-[10px] font-mono font-medium text-brand-green uppercase tracking-wide leading-tight">
                      {t.role.split(" & ")[0]}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-slate-200 font-semibold text-sm md:text-base group-hover:text-brand-green transition-colors">
                {t.name}
              </h3>
              <p className="text-slate-500 text-xs mt-0.5 max-w-[120px] leading-tight select-none">{t.role}</p>
            </div>
          ))}
        </div>

        <div
          id="mec-card"
          className="max-w-4xl mx-auto border border-white/10 bg-white/[0.03] backdrop-blur-md rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-brand-purple/30 transition-all duration-300"
        >
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-radial-gradient-purple opacity-40 pointer-events-none"></div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 relative z-10">
            <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center shrink-0 mb-4 md:mb-0">
              {/* Fitas atrás */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-16 h-12 z-0 opacity-90 pointer-events-none">
                <svg viewBox="0 0 60 40" className="w-full h-full">
                  <defs>
                    <linearGradient id="ribbon-grad-l" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#7b2cbf" />
                      <stop offset="100%" stopColor="#3d1461" />
                    </linearGradient>
                    <linearGradient id="ribbon-grad-r" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#5a189a" />
                      <stop offset="100%" stopColor="#240046" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 22 0 L 12 38 L 22 32 L 30 38 L 26 0 Z"
                    fill="url(#ribbon-grad-l)"
                    stroke="#7b2cbf"
                    strokeWidth="1"
                  />
                  <path
                    d="M 38 0 L 48 38 L 38 32 L 30 38 L 34 0 Z"
                    fill="url(#ribbon-grad-r)"
                    stroke="#7b2cbf"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              {/* Distintivo Giratório Externo */}
              <div className="absolute inset-0 animate-spin-slow z-10 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-brand-purple fill-current drop-shadow-[0_0_8px_rgba(123,44,191,0.3)]"
                >
                  <defs>
                    <linearGradient id="seal-border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00ffa3" />
                      <stop offset="50%" stopColor="#7b2cbf" />
                      <stop offset="100%" stopColor="#00df89" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M50 2 L58.5 10.5 L70 5.5 L74 17 L86.5 17.5 L84.5 30 L94.5 35 L88 46 L95 56.5 L85 64.5 L88.5 77 L76.5 81 L71.5 93 L59.5 90 L50 98 L40.5 90 L28.5 93 L23.5 81 L11.5 77 L15 64.5 L5 56.5 L12 46 L5.5 35 L15.5 30 L13.5 17.5 L26 17 L30 5.5 L41.5 10.5 Z"
                    fill="#050505"
                    stroke="url(#seal-border-grad)"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="39"
                    fill="none"
                    stroke="#00ffa3"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                    opacity="0.8"
                  />
                </svg>
              </div>

              {/* Escudo Central Interno */}
              <div className="absolute w-[76%] h-[76%] rounded-full bg-[#050505] border border-white/10 flex flex-col items-center justify-center p-2 text-center z-20 shadow-xl shadow-black/80">
                <span className="text-[11px] md:text-xs font-display font-black tracking-wider text-brand-green leading-none">
                  MEC
                </span>
                <div className="flex gap-0.5 my-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[6.5px] text-slate-400 font-mono uppercase tracking-[1.5px] font-bold leading-none">
                  OFICIAL
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono text-brand-purple bg-brand-purple/15 border border-brand-purple/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                  Credenciamento Oficial
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                Escola de tecnologia reconhecida pelo MEC
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Ao concluir suas trilhas, você recebe certificados oficiais de extensão universitária válidos em todo o
                território nacional. Módulos bônus exclusivos e grade homologada para te levar mais longe e agregar peso real
                ao seu currículo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
