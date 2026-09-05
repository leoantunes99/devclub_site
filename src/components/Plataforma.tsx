import React, { useEffect } from "react";
import { Play, Hash, Bot, Sparkles, Code, Award, ArrowUpRight } from "lucide-react";
import { setupGlitchText } from "../utils/glitch";

export const Plataforma: React.FC = () => {
  useEffect(() => {
    setupGlitchText("glitch-moderna-target", { delay: 0.2, stagger: 0.07, maxFlickers: 5, useObserver: true });
    setupGlitchText("glitch-travar-target", { delay: 0.2, stagger: 0.07, maxFlickers: 5, useObserver: true });
  }, []);

  return (
    <section id="plataforma" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-radial-gradient-purple opacity-30 pointer-events-none"></div>
      <div className="absolute -left-1/4 bottom-0 w-[500px] h-[500px] bg-radial-gradient-green opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16 section-header-anim">
          <span className="text-[10px] tracking-widest font-mono text-brand-green uppercase font-semibold flex items-center gap-1.5 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping"></span>
            PLATAFORMA DEVCLUB
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-4 leading-tight">
            Uma plataforma{" "}
            <span id="glitch-moderna-target" className="text-brand-green text-glow-green font-mono font-bold inline-block">
              moderna
            </span>
            , feita <br />
            para você{" "}
            <span id="glitch-travar-target" className="text-brand-green text-glow-green font-mono font-bold inline-block">
              não travar sozinho
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl">
            Aulas interativas, comunidade integrada, banco de vagas e suporte ágil — tudo num só lugar com uma experiência
            gamer e imersiva.
          </p>
        </div>

        {/* Grade Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="bento-card lg:col-span-7 h-[400px] xs:h-[420px] md:h-[420px] rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-5 md:p-8 flex flex-col justify-between overflow-hidden relative group hover:border-brand-green/30 transition-all duration-300 shadow-xl shadow-[#04050a]">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div>
              <div className="flex items-center gap-2 text-brand-green mb-4">
                <Play className="animate-pulse w-4 h-4 fill-current" />
                <span className="text-xs font-mono tracking-widest uppercase">EAD DE ALTO DESEMPENHO</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">Plataforma de ensino</h3>
              <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                Aulas organizadas por trilhas de formação claras e objetivas, com player inteligente, anotações interativas
                e material complementar sempre à mão. Estude no seu ritmo, com foco no que realmente importa.
              </p>
            </div>

            {/* Mockup da tela do editor */}
            <div className="h-32 sm:h-36 md:h-36 bg-[#04050a]/90 rounded-xl border border-white/5 p-3 sm:p-4 flex gap-3 sm:gap-4 overflow-hidden transform translate-y-3 group-hover:translate-y-1 transition-transform duration-500">
              <div className="w-24 sm:w-28 md:w-36 shrink-0 bg-[#0a0c16] rounded-lg p-2.5 flex flex-col justify-between border border-white/5">
                <div className="w-full h-1.5 bg-brand-green/30 rounded"></div>
                <div className="w-4/5 h-1.5 bg-white/10 rounded"></div>
                <div className="w-2/3 h-1.5 bg-white/10 rounded"></div>
                <div className="w-1/2 h-1.5 bg-white/10 rounded"></div>
              </div>
              <div className="flex-1 bg-[#0c0e17] rounded-lg p-3 relative flex flex-col justify-between border border-white/5 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-[10px] font-mono text-slate-500 truncate">aula_04_react_hooks.mp4</span>
                </div>
                <div className="w-full h-12 bg-white/5 rounded-md flex items-center justify-center border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                    <Play className="w-3 h-3 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card glow-card-purple lg:col-span-5 h-[400px] xs:h-[420px] md:h-[420px] rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-5 md:p-8 flex flex-col justify-between overflow-hidden relative group hover:border-brand-purple/30 transition-all duration-300 shadow-xl shadow-[#04050a]">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase font-semibold">
                  ECOSSISTEMA VIVO
                </span>
                <div className="flex gap-1.5 items-center bg-[#050505]/60 backdrop-blur px-2.5 py-1 rounded-full border border-white/5">
                  <span className="text-[9px] font-mono text-slate-400">ativo agora: 2.140</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">Comunidade de alunos</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Nunca trave sozinho em um bug às 2h da manhã. Compartilhe conhecimentos, tire dúvidas e faça networking de alto
                nível no nosso servidor do Discord.
              </p>
            </div>

            {/* Mockup da tela do Discord */}
            <div className="h-32 sm:h-36 md:h-36 bg-[#04050a]/90 rounded-xl border border-white/5 p-3 sm:p-4 flex gap-3 sm:gap-4 overflow-hidden transform translate-y-3 group-hover:translate-y-1 transition-transform duration-500">
              <div className="w-24 sm:w-28 md:w-36 shrink-0 bg-[#0a0c16] rounded-lg p-2.5 sm:p-3 flex flex-col justify-between border border-white/5">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                  <span className="text-[8px] font-mono text-slate-400 font-bold uppercase tracking-wider">DEVCLUB</span>
                </div>
                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <div className="flex items-center gap-1 text-[8px] text-brand-purple font-semibold">
                    <Hash className="w-2.5 h-2.5 shrink-0" />
                    <span className="truncate">geral</span>
                  </div>
                  <div className="flex items-center gap-1 text-[8px] text-slate-500">
                    <Hash className="w-2.5 h-2.5 shrink-0" />
                    <span className="truncate">tirar-duvidas</span>
                  </div>
                  <div className="flex items-center gap-1 text-[8px] text-slate-500">
                    <Hash className="w-2.5 h-2.5 shrink-0" />
                    <span className="truncate">vagas-carreira</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-[#0c0e17] rounded-lg p-2.5 sm:p-3 relative flex flex-col justify-between border border-white/5 gap-2 min-w-0">
                <div className="flex items-center justify-between border-b border-white/5 pb-1">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                    <span className="text-[9px] font-mono text-slate-400 font-semibold">#geral</span>
                  </div>
                  <span className="text-[7px] font-mono text-slate-500">Discord</span>
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <div className="flex gap-1.5 items-start">
                    <div className="w-5 h-5 rounded-full bg-brand-purple/20 flex items-center justify-center border border-brand-purple/30 text-[9px] font-bold text-brand-purple shrink-0">
                      A
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[9px] font-bold text-white">Alex S.</span>
                        <span className="text-[6px] text-slate-500">14:02</span>
                      </div>
                      <p className="text-[8px] text-slate-400 leading-tight truncate sm:whitespace-normal">
                        Galera, consegui minha primeira vaga de Júnior! 🚀
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-start">
                    <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center border border-brand-green/30 text-[9px] font-bold text-brand-green shrink-0">
                      G
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[9px] font-bold text-white">Gustavo M.</span>
                        <span className="text-[6px] text-slate-500">14:03</span>
                      </div>
                      <p className="text-[8px] text-slate-400 leading-tight truncate sm:whitespace-normal">
                        Parabéns demais, mano! O DevClub é outro nível!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card lg:col-span-3 h-[180px] rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-6 flex flex-col justify-between relative overflow-hidden group hover:border-brand-green/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center justify-between">
              <Bot className="text-brand-green w-5 h-5" />
              <Sparkles className="text-brand-green animate-pulse w-3.5 h-3.5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Club Agents</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Modelos e IAs próprias configuradas especificamente para acelerar seu aprendizado na plataforma.
              </p>
            </div>
          </div>

          <div className="bento-card lg:col-span-3 h-[180px] rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-6 flex flex-col justify-between relative overflow-hidden group hover:border-brand-green/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Code className="text-brand-green w-5 h-5" />
            <div>
              <h4 className="text-base font-bold text-white mb-1">Playground Integrado</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Escreva e teste seu código diretamente no navegador. Sem configurações complexas na sua máquina no início.
              </p>
            </div>
          </div>

          <div className="bento-card glow-card-amber lg:col-span-6 h-auto min-h-[180px] lg:h-[180px] rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-6 flex flex-col justify-between relative overflow-hidden group hover:border-amber-400/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center justify-between">
              <Award className="text-amber-400 w-5 h-5" />
              <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">PRÊMIO MENSAL</span>
            </div>
            <div className="mt-4 lg:mt-0">
              <h4 className="text-base font-bold text-white mb-1 flex items-center gap-1.5">
                Mural da fama
                <ArrowUpRight className="text-slate-500 group-hover:text-amber-400 transition-colors w-3.5 h-3.5" />
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Reconhecemos o seu esforço. Os alunos mais dedicados e que concluem projetos em destaque ganham evidência no
                mural nacional de profissionais indicados e recebem prêmios exclusivos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
