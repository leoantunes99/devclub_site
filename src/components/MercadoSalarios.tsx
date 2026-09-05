import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Wallet, DollarSign } from "lucide-react";
import { setupGlitchText } from "../utils/glitch";

gsap.registerPlugin(ScrollTrigger);

export const MercadoSalarios: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const jrBarRef = useRef<HTMLDivElement>(null);
  const plBarRef = useRef<HTMLDivElement>(null);
  const srBarRef = useRef<HTMLDivElement>(null);

  const [jrVal, setJrVal] = useState("R$ 0");
  const [plVal, setPlVal] = useState("R$ 0");
  const [srVal, setSrVal] = useState("R$ 0");

  useEffect(() => {
    setupGlitchText("glitch-sim-target", { delay: 0.2, stagger: 0.07, maxFlickers: 5, useObserver: true });
  }, []);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const targets = { jr: 3800, pl: 7200, sr: 13500 };
    const counts = { jr: 0, pl: 0, sr: 0 };

    const trigger = ScrollTrigger.create({
      trigger: chart,
      start: "top 80%",
      onEnter: () => {
        if (jrBarRef.current) gsap.fromTo(jrBarRef.current, { height: "0%" }, { height: "30%", duration: 1, ease: "power2.out" });
        if (plBarRef.current) gsap.fromTo(plBarRef.current, { height: "0%" }, { height: "55%", duration: 2, ease: "power2.out" });
        if (srBarRef.current) gsap.fromTo(srBarRef.current, { height: "0%" }, { height: "100%", duration: 3, ease: "power2.out" });

        counts.jr = 0;
        counts.pl = 0;
        counts.sr = 0;

        gsap.to(counts, {
          jr: targets.jr,
          duration: 1,
          ease: "power2.out",
          onUpdate: () => {
            setJrVal(`R$ ${Math.floor(counts.jr).toLocaleString("pt-BR")}`);
          },
        });

        gsap.to(counts, {
          pl: targets.pl,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            setPlVal(`R$ ${Math.floor(counts.pl).toLocaleString("pt-BR")}`);
          },
        });

        gsap.to(counts, {
          sr: targets.sr,
          duration: 3,
          ease: "power2.out",
          onUpdate: () => {
            setSrVal(`R$ ${Math.floor(counts.sr).toLocaleString("pt-BR")}`);
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section id="mercado" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-radial-gradient-green opacity-15 pointer-events-none"></div>
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-radial-gradient-purple opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16 section-header-anim">
          <span className="text-[10px] tracking-widest font-mono text-brand-green uppercase font-semibold flex items-center gap-1.5 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping"></span>
            E O MERCADO, PAGA BEM?
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-4 leading-tight">
            A resposta curta é:{" "}
            <span id="glitch-sim-target" className="text-brand-green text-glow-green font-mono font-bold inline-block">
              sim
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Salário médio mensal de profissionais de tecnologia no Brasil por nível de senioridade. Os números mostram por
            que essa é a área mais lucrativa da atualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="salary-info-card border border-white/10 bg-white/[0.03] backdrop-blur-md rounded-2xl p-6 md:p-8">
              <div className="w-10 h-10 rounded-lg bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green mb-5">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-lg md:text-xl mb-3">Trajetória real, não promessa</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-4">
                Nossos alunos entram como desenvolvedores júnior no mercado e evoluem rápido — porque aprendem resolvendo
                desafios práticos de empresas reais, guiados por mentores experientes, e não decorando apostilas teóricas obsoletas.
              </p>
              <div className="flex items-center gap-3 text-xs font-mono text-brand-green mt-4 bg-brand-green/5 border border-brand-green/10 rounded-lg px-4 py-3">
                <Wallet className="w-4 h-4" />
                <span>Dados de média nacional coletados via Glassdoor e Robert Half.</span>
              </div>
            </div>

            <div className="salary-info-card border border-white/10 bg-white/[0.03] backdrop-blur-md rounded-2xl p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple shrink-0">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Altas Taxas de Aumento Salarial</h4>
                <p className="text-slate-500 text-xs mt-0.5">
                  A transição de Júnior para Pleno costuma ocorrer em média entre 18 a 24 meses de dedicação consistente.
                </p>
              </div>
            </div>
          </div>

          {/* ENVOLTÓRIO DO GRÁFICO DE SALÁRIOS */}
          <div
            id="salary-chart"
            ref={chartRef}
            className="lg:col-span-7 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-brand-green/[0.02] to-transparent pointer-events-none"></div>

            <div className="relative h-80 md:h-96 flex items-end justify-between gap-4 md:gap-10 border-b border-white/10 pb-2">
              <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-between pointer-events-none">
                <div className="w-full border-t border-white/5 h-[1px]"></div>
                <div className="w-full border-t border-white/5 h-[1px]"></div>
                <div className="w-full border-t border-white/5 h-[1px]"></div>
                <div className="w-full border-t border-white/5 h-[1px]"></div>
                <div className="w-full h-[1px]"></div>
              </div>

              {/* Barra Júnior */}
              <div className="flex-1 flex flex-col items-center h-full justify-end relative z-10">
                <span id="salary-val-jr" className="text-sm md:text-lg font-mono font-bold text-slate-300 mb-2">
                  {jrVal}
                </span>
                <div
                  id="salary-bar-jr"
                  ref={jrBarRef}
                  className="salary-bar w-16 md:w-24 bg-brand-purple/80 rounded-t-xl hover:bg-brand-purple cursor-pointer transition-colors duration-300 relative group flex items-center justify-center shadow-lg shadow-brand-purple/10"
                  style={{ height: "0%" }}
                >
                  <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-purple text-white text-[10px] font-mono py-1 px-2 rounded-md whitespace-nowrap z-30">
                    Início de Carreira
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-400 mt-4 select-none">Júnior</span>
              </div>

              {/* Barra Pleno */}
              <div className="flex-1 flex flex-col items-center h-full justify-end relative z-10">
                <span id="salary-val-pl" className="text-sm md:text-lg font-mono font-bold text-brand-purple mb-2">
                  {plVal}
                </span>
                <div
                  id="salary-bar-pl"
                  ref={plBarRef}
                  className="salary-bar w-16 md:w-24 bg-gradient-to-t from-brand-purple to-brand-green/60 rounded-t-xl hover:from-brand-purple hover:to-brand-green cursor-pointer transition-colors duration-300 relative group flex items-center justify-center shadow-lg shadow-brand-purple/20"
                  style={{ height: "0%" }}
                >
                  <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-[#050505] border border-brand-green/30 text-white text-[10px] font-mono py-1 px-2 rounded-md whitespace-nowrap z-30">
                    1 a 3 anos de exp.
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-brand-purple mt-4 select-none">Pleno</span>
              </div>

              {/* Barra Sênior */}
              <div className="flex-1 flex flex-col items-center h-full justify-end relative z-10">
                <span id="salary-val-sr" className="text-sm md:text-lg font-mono font-bold text-brand-green mb-2 text-glow-green">
                  {srVal}
                </span>
                <div
                  id="salary-bar-sr"
                  ref={srBarRef}
                  className="salary-bar w-16 md:w-24 bg-brand-green rounded-t-xl hover:bg-[#00f799] cursor-pointer transition-colors duration-300 relative group flex items-center justify-center shadow-lg shadow-brand-green/20"
                  style={{ height: "0%" }}
                >
                  <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-green text-[#04050a] text-[10px] font-mono font-bold py-1 px-2 rounded-md whitespace-nowrap z-30">
                    Liderança & Especialidade
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-brand-green mt-4 select-none">Sênior</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
