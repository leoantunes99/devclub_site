import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, ShieldCheck, Terminal } from "lucide-react";
import { setupGlitchText } from "../utils/glitch";
import { SafeImage } from "./SafeImage";

interface HeroProps {
  onOpenRegister: () => void;
  triggerEntrance?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, triggerEntrance = true }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminalWrapperRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);
  const terminalLinesRef = useRef<HTMLDivElement>(null);
  const consoleLogRef = useRef<HTMLSpanElement>(null);
  const glitchTargetRef = useRef<HTMLSpanElement>(null);

  // 1. Interactive Particles Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const handleResize = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
      initParticles();
    };

    const mouse: { x: number | null; y: number | null; radius: number } = {
      x: null,
      y: null,
      radius: 120,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      density: number;
      color: string;
      speedX: number;
      speedY: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 3 + 1.5;
        this.density = Math.random() * 30 + 10;
        this.color = Math.random() > 0.5 ? "#00ffa3" : "#7b2cbf";
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = dx / distance;
            const directionY = dy / distance;
            this.x += directionX * force * 1.5;
            this.y += directionY * force * 1.5;
          }
        }
      }
    }

    function initParticles() {
      particles = [];
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 9000), 120);
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    }

    function connectParticles() {
      if (!ctx) return;
      const maxDistance = 130;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 0.25 * (1 - distance / maxDistance);
            if (particles[a].color === "#00ffa3" && particles[b].color === "#00ffa3") {
              ctx.strokeStyle = `rgba(0, 255, 163, ${opacity})`;
            } else if (particles[a].color === "#7b2cbf" && particles[b].color === "#7b2cbf") {
              ctx.strokeStyle = `rgba(123, 44, 191, ${opacity})`;
            } else {
              ctx.strokeStyle = `rgba(157, 78, 221, ${opacity * 0.85})`;
            }

            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    }

    handleResize();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // 2. Terminal Typing Simulation
  useEffect(() => {
    const terminalLogs = [
      { type: "cmd", text: "npx create-devclub-career --template elite" },
      { type: "log", text: "✓ Inicializando ambiente de desenvolvimento de elite..." },
      { type: "log", text: "✓ Baixando grade curricular: React, Next.js, Node.js, n8n, Orquestração de LLMs" },
      { type: "cmd", text: "npm run build" },
      { type: "log", text: "⠋ Compilando módulos personalizados do portfólio interativo..." },
      { type: "log", text: "✓ Compilação de produção concluída com sucesso em 0.85s." },
      { type: "cmd", text: "node server.js" },
      { type: "log", text: "🚀 Ecossistema DevClub ativo na porta: 3000 (0.0.0.0)" },
      { type: "log", text: "✓ Conectando Agente de Suporte de IA & Certificação do MEC homologada" },
      { type: "cmd", text: "git commit -m 'Carreira acelerada para jornada de júnior a sênior'" },
      { type: "log", text: "[main 799815a] Carreira acelerada!" },
      { type: "log", text: "✓ 1 arquivo alterado, mais de 1000 oportunidades criadas." },
    ];

    let logIndex = 0;
    let timeoutId: any = null;
    let isCancelled = false;

    function printTerminalLine() {
      if (isCancelled || !terminalLinesRef.current) return;

      if (logIndex >= terminalLogs.length) {
        timeoutId = setTimeout(() => {
          if (!terminalLinesRef.current || isCancelled) return;
          terminalLinesRef.current.innerHTML = "";
          logIndex = 0;
          printTerminalLine();
        }, 4000);
        return;
      }

      const log = terminalLogs[logIndex];
      const div = document.createElement("div");
      div.className = "flex items-start gap-2.5 opacity-0 transition-opacity duration-300";

      if (log.type === "cmd") {
        div.innerHTML = `<span class="text-brand-green font-bold select-none">&gt;</span> <span class="text-white">${log.text}</span>`;
      } else {
        div.innerHTML = `<span class="text-slate-500 font-bold select-none">#</span> <span class="text-slate-400 font-light text-xs leading-relaxed">${log.text}</span>`;
      }

      terminalLinesRef.current.appendChild(div);

      if (terminalContentRef.current) {
        terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
      }

      timeoutId = setTimeout(() => {
        div.classList.remove("opacity-0");
        logIndex++;
        timeoutId = setTimeout(printTerminalLine, log.type === "cmd" ? 1200 : 600);
      }, 50);
    }

    const startTimer = setTimeout(printTerminalLine, 2500);

    return () => {
      isCancelled = true;
      clearTimeout(startTimer);
      clearTimeout(timeoutId);
    };
  }, []);

  // 3. 3D Tilt & Parallax for Terminal
  useEffect(() => {
    const wrapper = terminalWrapperRef.current;
    const terminal = terminalRef.current;
    const glare = glareRef.current;
    if (!wrapper || !terminal) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const normalizedX = (x - centerX) / centerX;
      const normalizedY = (y - centerY) / centerY;

      const rotateX = -normalizedY * 16;
      const rotateY = normalizedX * 18;
      const translateX = normalizedX * 8;
      const translateY = normalizedY * 8;

      gsap.to(terminal, {
        rotateX: rotateX,
        rotateY: rotateY,
        x: translateX,
        y: translateY,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });

      if (glare) {
        const glareX = ((x / rect.width) * 100).toFixed(1);
        const glareY = ((y / rect.height) * 100).toFixed(1);
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(0, 255, 163, 0.22) 0%, rgba(255, 255, 255, 0.06) 40%, transparent 75%)`;
        glare.style.opacity = "1";
      }
    };

    const handleMouseEnter = () => {
      gsap.to(terminal, {
        scale: 1.025,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(terminal, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
        overwrite: "auto",
      });

      if (glare) {
        glare.style.opacity = "0";
      }
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseenter", handleMouseEnter);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseenter", handleMouseEnter);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // 4. Console log typing & Glitch Trigger
  useEffect(() => {
    if (!triggerEntrance) return;

    // Trigger hero entrance
    gsap.fromTo(".hero-tag", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
    gsap.fromTo(".hero-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 });
    gsap.fromTo(".hero-subtitle", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.4 });
    gsap.fromTo(".hero-buttons", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.5 });
    gsap.fromTo(".hero-avatars", { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.7 });
    gsap.fromTo(".terminal-container", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.2)", delay: 0.4, clearProps: "transform" });
    gsap.fromTo(
      ".layer-3d-floating-top, .layer-3d-floating-bottom",
      { opacity: 0, scale: 0.7, y: 15 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.5)",
        delay: 1.1,
      }
    );

    // Setup glitch text
    const glitchCtrl = setupGlitchText("glitch-tech-target", {
      delay: 0,
      stagger: 0.08,
      useObserver: false,
    });

    // Console.log() typing effect
    const el = consoleLogRef.current;
    if (el) {
      const fullText = "console.log()";
      let charsHtml = "";
      for (let i = 0; i < fullText.length; i++) {
        charsHtml += `<span class="console-char opacity-0">${fullText[i]}</span>`;
      }
      charsHtml += `<span id="console-cursor" class="inline-block bg-brand-green/90 w-[2px] h-[0.85em] align-baseline ml-[1px] animate-pulse"></span>`;
      el.innerHTML = charsHtml;

      const chars = el.querySelectorAll(".console-char");
      const cursor = document.getElementById("console-cursor");

      if (cursor && chars.length > 0) {
        chars[0].insertAdjacentElement("beforebegin", cursor);
      }

      const totalTypingTime = 0.3 + (chars.length - 1) * 0.07;
      const glitchDelay = Math.max(0, totalTypingTime + 0.15 - 0.3);

      gsap.delayedCall(glitchDelay, () => {
        glitchCtrl?.triggerReveal();
      });

      chars.forEach((char, idx) => {
        gsap.to(char, {
          opacity: 1,
          duration: 0.01,
          delay: 0.3 + idx * 0.07,
          onStart: () => {
            if (cursor) {
              char.insertAdjacentElement("afterend", cursor);
            }
          },
        });
      });

      gsap.delayedCall(0.3 + chars.length * 0.07 + 1.0, () => {
        if (cursor) {
          gsap.to(cursor, { opacity: 0, duration: 0.4, onComplete: () => cursor.remove() });
        }
      });
    }
  }, [triggerEntrance]);

  return (
    <section
      id="hero"
      className="relative min-h-[75vh] md:min-h-[80vh] flex items-center py-12 md:py-20 bg-[#050505] overflow-hidden"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-gradient-purple opacity-30 pointer-events-none rounded-full"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none"></div>

      {/* Canvas de Partículas Interativas */}
      <canvas
        id="particles-canvas"
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
      ></canvas>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full -mt-6 sm:-mt-10 lg:-mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna Esquerda: Texto Principal */}
          <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8">
            <div className="hero-tag opacity-0 self-start flex items-center gap-2 px-3 py-1.5 bg-brand-green/10 border border-brand-green/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-ping"></span>
              <span className="text-[10px] font-mono text-brand-green uppercase tracking-widest font-bold">
                COMUNIDADE ATIVA AGORA
              </span>
            </div>

            <h1 className="hero-title opacity-0 text-4xl md:text-6xl font-display font-black tracking-tight leading-tight text-white">
              Do primeiro
              <br />
              <span
                id="hero-console-log"
                ref={consoleLogRef}
                className="text-brand-purple font-mono tracking-tight font-extrabold text-glow-purple inline-block"
              >
                console.log()
              </span>
              <br />
              ao seu primeiro
              <br />
              <span
                id="glitch-tech-target"
                ref={glitchTargetRef}
                className="text-brand-green text-glow-green font-mono font-bold inline-block"
              >
                emprego em tech
              </span>
            </h1>

            <p className="hero-subtitle opacity-0 text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl font-light">
              Formações completas e robustas em programação e IA, mentoria semanal diretamente com profissionais seniores
              que estão no mercado hoje, e uma comunidade engajada que não te deixa travar sozinho.
            </p>

            <div className="hero-buttons opacity-0 flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={onOpenRegister}
                className="open-register w-full sm:w-auto px-8 py-4 bg-brand-green hover:bg-[#00f799] text-[#04050a] font-bold text-sm md:text-base rounded-xl transition-all duration-300 shadow-xl shadow-brand-green/20 cursor-pointer flex items-center justify-center gap-2 group hover:-translate-y-0.5"
              >
                <span>Quero ser aluno</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#formacoes"
                className="w-full sm:w-auto px-6 py-3.5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-xl text-sm md:text-base font-semibold transition-all hover:bg-white/5 flex items-center justify-center"
              >
                Ver formações
              </a>
            </div>

            <div className="hero-avatars opacity-0 flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <div className="w-9 h-9 min-w-[36px] min-h-[36px] rounded-full shrink-0 aspect-square border border-[#04050a] overflow-hidden bg-[#121214]">
                  <SafeImage
                    src="/assets/images/avatar_rodolfo_mori_1784817256472.jpg"
                    alt="Rodolfo Mori"
                    fallbackText="RM"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-9 h-9 min-w-[36px] min-h-[36px] rounded-full shrink-0 aspect-square border border-[#04050a] overflow-hidden bg-[#121214]">
                  <SafeImage
                    src="/assets/images/avatar_leonardo_1784817337734.jpg"
                    alt="Leonardo Antunes"
                    fallbackText="LA"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-9 h-9 min-w-[36px] min-h-[36px] rounded-full shrink-0 aspect-square border border-[#04050a] overflow-hidden bg-[#121214]">
                  <SafeImage
                    src="/assets/images/avatar_fernanda_1784817268009.jpg"
                    alt="Fernanda"
                    fallbackText="FE"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-9 h-9 min-w-[36px] min-h-[36px] rounded-full shrink-0 aspect-square border border-[#04050a] overflow-hidden bg-[#121214]">
                  <SafeImage
                    src="/assets/images/avatar_agustinho_1784817279438.jpg"
                    alt="Agustinho"
                    fallbackText="AG"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-mono font-bold text-sm md:text-base text-glow-green">+25.000</span>
                  <span className="text-[10px] md:text-xs text-brand-green font-mono">alunos ativos</span>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500">já passaram pelo ecossistema devclub</p>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Terminal 3D Interativo */}
          <div className="lg:col-span-5 w-full flex justify-center items-center py-4 sm:py-6">
            <div ref={terminalWrapperRef} className="terminal-3d-wrapper relative w-full max-w-lg">
              {/* Efeito de iluminação 3D de fundo */}
              <div className="layer-3d-back absolute -inset-4 bg-gradient-to-tr from-brand-purple/25 via-brand-green/20 to-teal-500/15 rounded-3xl blur-2xl opacity-70 pointer-events-none"></div>

              {/* Badge Flutuante 3D Superior Direita */}
              <div className="layer-3d-floating-top opacity-0 absolute -top-4 -right-2 md:-right-4 z-40 bg-[#0e121a]/90 border border-brand-green/30 backdrop-blur-xl px-3 py-1.5 rounded-full flex items-center gap-2 pointer-events-none select-none">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-ping"></span>
                <span className="text-[11px] font-mono text-brand-green font-semibold tracking-wide">
                  Node.js v20.11 • Active
                </span>
              </div>

              {/* Badge Flutuante 3D Inferior Esquerda */}
              <div className="layer-3d-floating-bottom opacity-0 absolute -bottom-4 -left-2 md:-left-4 z-40 bg-[#0e121a]/90 border border-brand-purple/30 backdrop-blur-xl px-3 py-1.5 rounded-full flex items-center gap-2 pointer-events-none select-none">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-purple" />
                <span className="text-[11px] font-mono text-white font-medium">
                  Server Status: <span className="text-brand-green font-bold">200 OK</span>
                </span>
              </div>

              {/* Card Principal do Terminal */}
              <div
                ref={terminalRef}
                className="terminal-container opacity-0 relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#080a10]/90 shadow-2xl shadow-brand-green/10 backdrop-blur-xl"
              >
                {/* Camada de Reflexo de Vidro Interativo */}
                <div id="terminal-glare" ref={glareRef} className="terminal-glare"></div>

                {/* Barra de Cabeçalho do Terminal */}
                <div className="layer-3d-content flex items-center justify-between px-4 py-3 bg-white/[0.04] border-b border-white/5 select-none">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm shadow-rose-500/50"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm shadow-amber-500/50"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm shadow-emerald-500/50"></span>
                  </div>
                  <div className="text-xs font-mono text-white/50 tracking-wide flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-brand-green" />
                    <span>devclub@terminal: ~/career</span>
                  </div>
                  <div className="w-12"></div>
                </div>

                {/* Conteúdo de Código do Terminal */}
                <div
                  id="terminal-content"
                  ref={terminalContentRef}
                  className="layer-3d-content p-5 h-80 overflow-y-auto font-mono text-sm leading-relaxed text-slate-300 scroll-smooth custom-scrollbar"
                >
                  <div id="terminal-last-login" className="text-xs text-slate-500 mb-2 select-none">
                    Last login: --/--/---- on ttys001
                  </div>
                  <div id="terminal-lines" ref={terminalLinesRef} className="space-y-2.5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
