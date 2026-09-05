import React, { useState, useEffect } from "react";
import { Code2, Layout, CheckCircle, Eye, Sparkles } from "lucide-react";
import { projectsList } from "../data/projects";
import { setupGlitchText } from "../utils/glitch";
import { SafeImage } from "./SafeImage";

export const Projetos: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  useEffect(() => {
    setupGlitchText("glitch-reais-target", { delay: 0.2, stagger: 0.07, maxFlickers: 5, useObserver: true });
  }, []);

  const activeProject = projectsList[activeIdx] || projectsList[0];

  return (
    <section id="projetos" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute right-1/4 top-1/4 w-[500px] h-[500px] bg-radial-gradient-purple pointer-events-none opacity-20"></div>
      <div className="absolute left-1/4 bottom-1/4 w-[500px] h-[500px] bg-radial-gradient-green pointer-events-none opacity-15"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="project-anim-item inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full">
            <Code2 className="text-brand-green w-3 h-3" />
            <span className="text-[10px] font-mono text-brand-green uppercase tracking-widest font-bold">
              Portfólio de Elite
            </span>
          </div>

          <h2 className="project-anim-item text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Projetos{" "}
            <span id="glitch-reais-target" className="text-brand-green text-glow-green font-mono font-bold inline-block">
              reais
            </span>{" "}
            do curso
          </h2>

          <p className="project-anim-item text-slate-400 text-sm font-light leading-relaxed">
            Nada de projetos de brinquedo ou 'todo list' simples. No DevClub você cria arquiteturas de software complexas que
            são idênticas ao que você vai encontrar no dia a dia do mercado internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div id="project-tabs" className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {projectsList.map((proj, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`project-tab-btn project-anim-item w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col gap-3 cursor-pointer ${
                    isActive
                      ? "bg-white/[0.04] border-brand-green/40 shadow-lg shadow-brand-green/5"
                      : "bg-white/[0.01] border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-500 tracking-wider">
                      {proj.category}
                    </span>
                    <span
                      className={`pulse-dot w-2 h-2 rounded-full bg-brand-green animate-pulse ${
                        isActive ? "" : "hidden"
                      }`}
                    ></span>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="w-20 h-16 shrink-0 rounded-xl overflow-hidden border border-white/10 bg-[#121214] relative group-hover:scale-105 transition-transform duration-300">
                      <SafeImage
                        src={proj.image}
                        alt={proj.title}
                        fallbackText={proj.category}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-sm md:text-base font-display truncate">{proj.title}</h3>
                      <p className="text-slate-400 text-xs font-light line-clamp-2 mt-0.5">{proj.desc}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {proj.techs.slice(0, 3).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-mono font-medium text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                    {proj.techs.length > 3 && (
                      <span className="text-[9px] font-mono font-medium text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        +{proj.techs.length - 3}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}

            <div className="project-anim-item p-5 border border-white/5 bg-white/[0.01] rounded-2xl flex items-start gap-4 mt-4 lg:mt-0">
              <Sparkles className="text-brand-green shrink-0 mt-0.5 w-4.5 h-4.5" />
              <div>
                <h4 className="text-white font-bold text-xs font-display">Código Real & Portfólio Ativo</h4>
                <p className="text-slate-500 text-[10px] leading-relaxed">
                  Todos os projetos construídos possuem repositórios abertos no GitHub de cada aluno, servindo como o maior
                  cartão de visitas técnico para processos seletivos.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <div className="project-code-card flex-1 border border-white/15 bg-[#0c0c0e] rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between">
              <div className="flex items-center justify-between px-5 py-3 bg-white/[0.04] border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span
                    id="project-header-title"
                    className="text-slate-400 font-mono text-[10px] font-bold flex items-center gap-1.5"
                  >
                    <Layout className="text-brand-green w-3.5 h-3.5" />
                    {activeProject.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                    Live Preview
                  </span>
                </div>
              </div>

              <div
                id="project-code-panel"
                className="p-3 sm:p-4 flex-1 bg-black/50 overflow-hidden flex items-center justify-center"
              >
                <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden rounded-xl border border-white/10 bg-[#09090b] group/img">
                  <SafeImage
                    src={activeProject.image}
                    alt={activeProject.title}
                    fallbackText={activeProject.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/90 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-3 left-3 bg-[#050505]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[10px] font-mono text-brand-green font-bold flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                    {activeProject.category}
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/[0.02] border-t border-white/5 space-y-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-widest">
                    Objetivo de Negócio & Entrega
                  </span>
                  <p id="project-desc" className="text-white text-xs md:text-sm font-light leading-relaxed font-sans">
                    {activeProject.desc}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs text-brand-green font-mono">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span id="project-outcome">{activeProject.outcome}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono select-none">
                    <Eye className="w-3 h-3" />
                    <span>Construído passo a passo em aula</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
