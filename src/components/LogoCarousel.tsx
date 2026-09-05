import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { companies, companySVGs } from "../data/companies";

export const LogoCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const anim = gsap.to(scrollEl, {
      xPercent: -33.3,
      ease: "none",
      duration: 32,
      repeat: -1,
    });

    return () => {
      anim.kill();
    };
  }, []);

  const companyListRepeated = [
    ...companies,
    ...companies,
    ...companies,
    ...companies,
    ...companies,
  ];

  return (
    <>
      <div id="logo-carousel-section" className="w-full overflow-hidden py-10 bg-[#05060b] border-y border-white/5 relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#04050a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#04050a] to-transparent z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
          <p className="text-[10px] tracking-widest font-mono text-slate-500 uppercase">
            Nossos alunos foram contratados por empresas globais
          </p>
        </div>

        <div className="relative w-full flex overflow-hidden">
          <div
            id="carousel-scroll"
            ref={scrollRef}
            className="flex whitespace-nowrap gap-16 md:gap-24 items-center pl-10"
          >
            {companyListRepeated.map((comp, idx) => (
              <div
                key={`${comp}-${idx}`}
                className="flex items-center gap-2 md:gap-3 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer select-none"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox={companySVGs[comp]?.viewBox || "0 0 24 24"}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  dangerouslySetInnerHTML={{ __html: companySVGs[comp]?.content || "" }}
                />
                <span className="font-display font-bold text-white text-sm md:text-base tracking-tight">
                  {comp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ESPAÇADOR PARA EVITAR GRUDAR NO CARROSSEL INFINITO */}
      <div className="h-16 md:h-24 bg-[#050505] border-t border-white/5"></div>
    </>
  );
};
