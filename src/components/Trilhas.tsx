import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import {
  Layout,
  Database,
  Globe,
  Smartphone,
  BarChart2,
  Cpu,
  Check,
  ArrowRight,
  MousePointer,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { trilhasList } from "../data/trilhas";
import { setupGlitchText } from "../utils/glitch";
import { SafeImage } from "./SafeImage";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface TrilhasProps {
  onOpenRegister: () => void;
  isPreloaderDone?: boolean;
}

export const Trilhas: React.FC<TrilhasProps> = ({ onOpenRegister, isPreloaderDone = true }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const progressIndicatorRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    setupGlitchText("glitch-zero-target", { delay: 0.2, stagger: 0.07, maxFlickers: 5, useObserver: true });
    setupGlitchText("glitch-avancado-target", { delay: 0.2, stagger: 0.07, maxFlickers: 5, useObserver: true });
  }, []);

  useEffect(() => {
    // Aguarda o preloader terminar para que o layout final esteja estabelecido
    if (!isPreloaderDone) return;

    const sliderContainer = sliderRef.current;
    const section = sectionRef.current;
    if (!sliderContainer || !section) return;

    // Garante que o contêiner interno não oculte os cards na horizontal
    gsap.set(sliderContainer, { overflowX: "visible" });

    // Calcula a distância exata necessária para mostrar todas as formações
    const getScrollAmount = () => {
      const scrollW = sliderContainer.scrollWidth;
      const clientW = window.innerWidth;
      // Adiciona margem de segurança no final para o último card ficar 100% visível e centralizado
      const padding = window.innerWidth < 768 ? 48 : 96;
      const diff = scrollW - clientW + padding;
      return diff > 0 ? diff : 0;
    };

    // Identifica se o ScrollSmoother está ativo
    const smoother = ScrollSmoother.get() || (window as any).__smoother;
    const hasSmoother = !!smoother;

    // Mata trigger anterior se já existir
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
      scrollTriggerRef.current = null;
    }

    const scrollTween = gsap.to(sliderContainer, {
      x: () => -getScrollAmount(),
      ease: "none",
      scrollTrigger: {
        id: "trilhas-slider",
        trigger: section,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        // PONTO FUNDAMENTAL: com ScrollSmoother ativo, pinType precisa ser 'transform'
        // para que a seção se fixe na viewport durante a transformação do #smooth-content
        pinType: hasSmoother ? "transform" : "fixed",
        scrub: 1,
        start: "top top",
        end: () => {
          const toScroll = getScrollAmount();
          return `+=${Math.max(toScroll + 400, 1400)}`;
        },
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (progressIndicatorRef.current) {
            const p = Math.min(100, Math.max(0, self.progress * 100));
            progressIndicatorRef.current.style.width = `${p}%`;
          }
          setCanScrollPrev(self.progress > 0.05);
          setCanScrollNext(self.progress < 0.95);
        },
      },
    });

    scrollTriggerRef.current = scrollTween.scrollTrigger || null;

    // Atualiza o ScrollTrigger para registrar com precisão as dimensões com o ScrollSmoother
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Efeito sutil de inclinação 3D no hover dos cards
    const cards = sliderContainer.querySelectorAll<HTMLDivElement>(".trilha-card");
    const cleanupFns: Array<() => void> = [];

    cards.forEach((card) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPercent = (x / rect.width - 0.5) * 8;
        const yPercent = (y / rect.height - 0.5) * -8;
        card.style.transform = `perspective(1000px) translateY(-8px) rotateX(${yPercent}deg) rotateY(${xPercent}deg) scale3d(1.015, 1.015, 1.015)`;
      };

      const handleMouseLeave = () => {
        card.style.transform = "perspective(1000px) translateY(0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      cleanupFns.push(() => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    // Suporte inteligente a gesto de deslize lateral (touch swipe) no mobile
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches.length) return;
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const deltaX = touchStartX - currentX;
      const deltaY = Math.abs(touchStartY - currentY);

      // Se o movimento for predominantemente horizontal no slider de cards
      if (Math.abs(deltaX) > 10 && Math.abs(deltaX) > deltaY) {
        const st = scrollTriggerRef.current;
        if (st) {
          const smoother = ScrollSmoother.get() || (window as any).__smoother;
          const currentPos = smoother ? smoother.scrollTop() : window.scrollY;
          const newPos = currentPos + deltaX * 1.5;
          if (smoother) {
            smoother.scrollTop(newPos);
          } else {
            window.scrollTo({ top: newPos });
          }
          touchStartX = currentX;
          touchStartY = currentY;
        }
      }
    };

    sliderContainer.addEventListener("touchstart", handleTouchStart, { passive: true });
    sliderContainer.addEventListener("touchmove", handleTouchMove, { passive: true });

    cleanupFns.push(() => {
      sliderContainer.removeEventListener("touchstart", handleTouchStart);
      sliderContainer.removeEventListener("touchmove", handleTouchMove);
    });

    return () => {
      clearTimeout(timer);
      cleanupFns.forEach((fn) => fn());
      scrollTween.kill();
      if (scrollTween.scrollTrigger) {
        scrollTween.scrollTrigger.kill();
      }
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, [isPreloaderDone]);

  // Controles rápidos de navegação através de botões laterais
  const handleScrollStep = (direction: "prev" | "next") => {
    const st = scrollTriggerRef.current;
    const smoother = ScrollSmoother.get() || (window as any).__smoother;

    if (st) {
      const totalDistance = st.end - st.start;
      const stepDistance = totalDistance / (trilhasList.length - 1);
      const currentScroll = smoother ? smoother.scrollTop() : window.scrollY;
      const targetScroll =
        direction === "next"
          ? Math.min(st.end, Math.max(st.start, currentScroll + stepDistance))
          : Math.max(st.start, currentScroll - stepDistance);

      if (smoother) {
        smoother.scrollTo(targetScroll, true);
      } else {
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      }
    }
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case "layout":
        return <Layout className="w-4 h-4" />;
      case "database":
        return <Database className="w-4 h-4" />;
      case "globe":
        return <Globe className="w-4 h-4" />;
      case "smartphone":
        return <Smartphone className="w-4 h-4" />;
      case "bar-chart-2":
        return <BarChart2 className="w-4 h-4" />;
      case "cpu":
        return <Cpu className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <section ref={sectionRef} id="formacoes" className="relative bg-[#050505] overflow-hidden h-screen">
      {/* Elementos de brilho de fundo */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-radial-gradient-green pointer-events-none opacity-30"></div>
      <div className="absolute -left-1/4 bottom-1/4 w-[600px] h-[600px] bg-radial-gradient-purple pointer-events-none opacity-20"></div>

      {/* Este contêiner fixa durante a rolagem horizontal */}
      <div className="pin-container h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 shrink-0">
          <div className="max-w-2xl section-header-anim">
            <span className="text-[10px] tracking-widest font-mono text-brand-green uppercase font-semibold flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping"></span>
              TRILHAS DE FORMAÇÃO
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white mb-2 leading-tight">
              Formações completas para aprender <br />
              tudo{" "}
              <span id="glitch-zero-target" className="text-brand-green text-glow-green font-mono font-bold inline-block">
                do zero
              </span>{" "}
              ao{" "}
              <span id="glitch-avancado-target" className="text-brand-green text-glow-green font-mono font-bold inline-block">
                avançado
              </span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              Escolha sua trilha e siga um caminho estruturado — sem depender de tutorial solto no YouTube ou se perder no limbo
              do conteúdo desorganizado.
            </p>
          </div>

          {/* Status de Rolagem, Indicador de Progresso e Navegação Interativa */}
          <div className="flex flex-row md:flex-col items-center justify-between md:items-end gap-3 mt-6 md:mt-0 font-mono text-xs text-slate-500 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <MousePointer className="w-3.5 h-3.5 text-brand-green animate-bounce" />
                <span className="hidden sm:inline">Role para avançar</span>
                <span className="sm:hidden">Role ou avance</span>
              </div>
              {/* Botões para avançar e retroceder os cards */}
              <div className="flex items-center gap-1.5 ml-2">
                <button
                  type="button"
                  onClick={() => handleScrollStep("prev")}
                  aria-label="Formação anterior"
                  disabled={!canScrollPrev}
                  className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                    canScrollPrev
                      ? "border-white/15 bg-white/5 text-white hover:bg-brand-green/20 hover:border-brand-green/40 hover:text-brand-green"
                      : "border-white/5 bg-white/[0.02] text-slate-600 cursor-not-allowed opacity-50"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleScrollStep("next")}
                  aria-label="Próxima formação"
                  disabled={!canScrollNext}
                  className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                    canScrollNext
                      ? "border-white/15 bg-white/5 text-white hover:bg-brand-green/20 hover:border-brand-green/40 hover:text-brand-green"
                      : "border-white/5 bg-white/[0.02] text-slate-600 cursor-not-allowed opacity-50"
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="w-24 md:w-36 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                id="scroll-progress-indicator"
                ref={progressIndicatorRef}
                className="h-full bg-brand-green w-0 transition-all duration-150"
              ></div>
            </div>
          </div>
        </div>

        {/* Envoltório do Contêiner da Lista Slider */}
        <div className="cards-scroll-wrapper overflow-hidden -mx-6 px-6 py-2">
          <div
            id="trilhas-slider-container"
            ref={sliderRef}
            className="flex gap-6 pt-4 select-none scrollbar-none"
            style={{ scrollbarWidth: "none" }}
          >
            {trilhasList.map((trilha, idx) => (
              <div
                key={idx}
                className="trilha-card shrink-0 w-[295px] sm:w-[380px] rounded-2xl bg-[#0a0a0c]/90 border border-white/10 p-5 flex flex-col justify-between hover:border-brand-green/30 hover:shadow-[0_0_30px_rgba(0,255,163,0.08)] transition-all duration-500 relative overflow-hidden group"
              >
                {/* Camada de brilho do card */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-green/5 blur-3xl pointer-events-none rounded-full group-hover:bg-brand-green/10 transition-colors duration-500"></div>

                <div className="space-y-4">
                  {/* Imagem da tecnologia */}
                  <div className="relative h-44 rounded-xl overflow-hidden border border-white/10 bg-[#121214] mb-3">
                    <SafeImage
                      src={trilha.image}
                      alt={trilha.title}
                      fallbackText={trilha.stack}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80"></div>
                    <span className="absolute top-3 left-3 text-[9px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#050505]/85 backdrop-blur-md border border-white/15 text-white uppercase tracking-wider shadow-md">
                      {trilha.badge}
                    </span>
                  </div>

                  {/* Título e tecnologia */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="p-1.5 bg-white/5 rounded-lg border border-white/5 text-slate-300">
                        {renderIcon(trilha.icon)}
                      </span>
                      <span className="text-xs font-mono font-bold text-brand-green drop-shadow-[0_0_10px_rgba(0,255,163,0.3)]">
                        {trilha.stack}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg font-display leading-tight mb-2">{trilha.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed font-light line-clamp-3">{trilha.desc}</p>
                  </div>

                  {/* Grade curricular */}
                  <div className="border-t border-white/5 pt-4 space-y-2">
                    <span className="text-[9px] font-mono font-bold text-slate-500 block uppercase tracking-wider mb-2">
                      Grade curricular principal
                    </span>
                    {trilha.curriculum.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-1.5 text-[10px] text-slate-400">
                        <Check className="text-brand-green w-3 h-3 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rodapé do card */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono text-slate-500">{trilha.duration}</span>
                  <button
                    onClick={onOpenRegister}
                    className="open-register group/btn flex items-center gap-1.5 text-xs font-mono font-bold text-brand-green cursor-pointer hover:text-white transition-colors"
                  >
                    <span>Fazer matrícula</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  </button>
                </div>
              </div>
            ))}
            <div className="shrink-0 w-12 sm:w-24 md:w-36 lg:w-48 pointer-events-none" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

