import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentStep = 0;
    const duration = 1800;
    const intervalTime = 20;
    const steps = duration / intervalTime;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress === 100) {
        clearInterval(timer);
        setTimeout(() => {
          window.scrollTo(0, 0);

          if (preloaderRef.current) {
            gsap.to(preloaderRef.current, {
              opacity: 0,
              duration: 0.6,
              ease: "power2.out",
              onComplete: () => {
                setIsFinished(true);
                onComplete();
              },
            });
          }
        }, 350);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (isFinished) return null;

  return (
    <div
      id="preloader"
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] bg-[#030303] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* =========================================================================
          CARDS DE CÓDIGO FLUTUANTES NO BACKGROUND (IDÊNTICOS À IMAGEM)
          ========================================================================= */}

      {/* Card 1: Superior Esquerdo - server.ts */}
      <div className="absolute top-[8%] left-[5%] md:left-[7%] hidden sm:block pointer-events-none z-10 animate-float-1">
        <div className="rotate-[-4deg] bg-[#07090e]/75 border border-white/10 p-4 sm:p-5 rounded-xl shadow-2xl backdrop-blur-md opacity-30 w-72">
          <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-white/5">
            <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
            <span className="text-[10px] font-mono text-slate-500 ml-2">server.ts</span>
          </div>
          <pre className="font-mono text-[9px] text-slate-400 text-left leading-relaxed">
            <span className="text-[#a855f7]">import</span> express <span className="text-[#a855f7]">from</span> <span className="text-[#00ffa3]">"express"</span>;{"\n"}
            <span className="text-[#a855f7]">const</span> app = <span className="text-[#38bdf8]">express</span>();{"\n"}
            app.<span className="text-[#38bdf8]">get</span>(<span className="text-[#00ffa3]">"/api/v1/devs"</span>, (req, res) =&gt; &#123;{"\n"}
            {"  "}res.<span className="text-[#38bdf8]">json</span>(&#123; active: <span className="text-[#a855f7]">true</span>, total: <span className="text-[#fbbf24]">25000</span> &#125;);{"\n"}
            &#125;);
          </pre>
        </div>
      </div>

      {/* Card 2: Superior Direito - Button.tsx */}
      <div className="absolute top-[10%] right-[5%] md:right-[7%] hidden sm:block pointer-events-none z-10 animate-float-2">
        <div className="rotate-[5deg] bg-[#07090e]/75 border border-white/10 p-4 sm:p-5 rounded-xl shadow-2xl backdrop-blur-md opacity-25 w-80">
          <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-white/5">
            <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
            <span className="text-[10px] font-mono text-slate-500 ml-2">Button.tsx</span>
          </div>
          <pre className="font-mono text-[9px] text-slate-400 text-left leading-relaxed">
            <span className="text-[#a855f7]">import</span> &#123; useState &#125; <span className="text-[#a855f7]">from</span> <span className="text-[#00ffa3]">"react"</span>;{"\n"}
            <span className="text-[#a855f7]">export const</span> <span className="text-[#00ffa3]">DevButton</span> = () =&gt; &#123;{"\n"}
            {"  "}<span className="text-[#a855f7]">const</span> [state, setState] = <span className="text-[#38bdf8]">useState</span>(<span className="text-[#a855f7]">false</span>);{"\n"}
            {"  "}<span className="text-[#a855f7]">return</span> &lt;<span className="text-[#38bdf8]">button</span> onClick=&#123;() =&gt; <span className="text-[#38bdf8]">setState</span>(<span className="text-[#a855f7]">true</span>)&#125; /&gt;;{"\n"}
            &#125;
          </pre>
        </div>
      </div>

      {/* Card 3: Inferior Esquerdo - user-model.go */}
      <div className="absolute bottom-[10%] left-[4%] md:left-[6%] hidden sm:block pointer-events-none z-10 animate-float-3">
        <div className="rotate-[3deg] bg-[#07090e]/75 border border-white/10 p-4 sm:p-5 rounded-xl shadow-2xl backdrop-blur-md opacity-25 w-64">
          <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-white/5">
            <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
            <span className="text-[10px] font-mono text-slate-500 ml-2">user-model.go</span>
          </div>
          <pre className="font-mono text-[9px] text-slate-400 text-left leading-relaxed">
            <span className="text-[#a855f7]">package</span> main{"\n\n"}
            <span className="text-[#a855f7]">type</span> <span className="text-white">Developer</span> <span className="text-[#a855f7]">struct</span> &#123;{"\n"}
            {"  "}ID    <span className="text-[#38bdf8]">int</span>    <span className="text-[#00ffa3]">`json:"id"`</span>{"\n"}
            {"  "}Stack <span className="text-[#38bdf8]">string</span> <span className="text-[#00ffa3]">`json:"stack"`</span>{"\n"}
            &#125;
          </pre>
        </div>
      </div>

      {/* Card 4: Inferior Direito - tailwind.config.js */}
      <div className="absolute bottom-[12%] right-[5%] md:right-[7%] hidden sm:block pointer-events-none z-10 animate-float-1">
        <div className="rotate-[-4deg] bg-[#07090e]/75 border border-white/10 p-4 sm:p-5 rounded-xl shadow-2xl backdrop-blur-md opacity-25 w-80">
          <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-white/5">
            <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
            <span className="text-[10px] font-mono text-slate-500 ml-2">tailwind.config.js</span>
          </div>
          <pre className="font-mono text-[9px] text-slate-400 text-left leading-relaxed">
            <span className="text-[#a855f7]">module.exports</span> = &#123;{"\n"}
            {"  "}theme: &#123;{"\n"}
            {"    "}extend: &#123;{"\n"}
            {"      "}colors: &#123;{"\n"}
            {"        "}brand: &#123; green: <span className="text-[#00ffa3]">"#00ffa3"</span>, purple: <span className="text-[#a855f7]">"#7b2cbf"</span> &#125;{"\n"}
            {"      "}&#125;{"\n"}
            {"    "}&#125;{"\n"}
            {"  "}&#125;{"\n"}
            &#125;
          </pre>
        </div>
      </div>

      {/* Cards extras ultra sutis nas laterais (para preencher profundidade como na captura) */}
      <div className="absolute top-[44%] left-[1.5%] hidden lg:block pointer-events-none z-10 opacity-10 rotate-[-8deg]">
        <div className="bg-[#07090e]/50 border border-white/5 p-3 rounded-lg w-52">
          <pre className="font-mono text-[8px] text-slate-500">
            jwt.verify(token);{"\n"}
            return &#123; role: "dev" &#125;;
          </pre>
        </div>
      </div>

      <div className="absolute top-[48%] right-[1.5%] hidden lg:block pointer-events-none z-10 opacity-10 rotate-[8deg]">
        <div className="bg-[#07090e]/50 border border-white/5 p-3 rounded-lg w-52">
          <pre className="font-mono text-[8px] text-slate-500">
            services: app-prod{"\n"}
            replicas: 10{"\n"}
            status: online
          </pre>
        </div>
      </div>

      {/* =========================================================================
          CONTEÚDO CENTRAL: LOGO DEVCLUB COM GLOW VERDE
          ========================================================================= */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4">
        {/* Halo / Glow Verde Radiante atrás do logo */}
        <div className="absolute w-96 h-40 bg-[#00ffa3]/25 blur-3xl rounded-full pointer-events-none"></div>

        {/* Linha do Logo: Ícone + DevClub */}
        <div className="relative z-10 flex items-center gap-3.5 sm:gap-4 mb-2">
          {/* Ícone DevClub Arredondado */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#090b10] border border-white/10 flex items-center justify-center p-2.5 shadow-[0_0_40px_rgba(0,255,163,0.35)] shrink-0">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              className="w-full h-full text-[#00ffa3]"
            >
              <rect x="18" y="18" width="14" height="14" fill="#00ffa3" rx="1" />
              <rect x="21" y="21" width="8" height="8" fill="#090b10" />
              <rect x="23" y="23" width="4" height="4" fill="#00ffa3" rx="0.5" />
              <rect x="35" y="18" width="6" height="6" fill="#00ffa3" rx="1" />
              <rect x="45" y="18" width="22" height="6" fill="#00ffa3" rx="1" />
              <rect x="71" y="18" width="11" height="6" fill="#00ffa3" rx="1" />
              <rect x="86" y="18" width="6" height="12" fill="#00ffa3" rx="1" />
              <rect x="18" y="36" width="6" height="12" fill="#00ffa3" rx="1" />
              <rect x="18" y="52" width="6" height="6" fill="#00ffa3" rx="1" />
              <path d="M29 32H41C45 32 47 34 47 38V44C47 48 45 50 41 50H29V32Z" fill="#00ffa3" />
              <rect x="35" y="37" width="6" height="8" fill="#090b10" rx="0.5" />
              <path d="M51 32H67V37H57V45H67V50H51V32Z" fill="#00ffa3" />
              <rect x="71" y="28" width="6" height="28" fill="#00ffa3" rx="1" />
              <rect x="81" y="34" width="3" height="12" fill="#00ffa3" rx="0.5" />
              <path d="M18 64L28 69L18 74" stroke="#00ffa3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="31" y="72" width="10" height="10" fill="#00ffa3" rx="1" />
              <line x1="42" y1="78" x2="52" y2="62" stroke="#00ffa3" strokeWidth="4" strokeLinecap="round" />
              <path d="M68 64L58 69L68 74" stroke="#00ffa3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="73" y="62" width="16" height="16" fill="#00ffa3" rx="2" />
              <rect x="76" y="65" width="10" height="10" fill="#090b10" />
              <rect x="79" y="68" width="4" height="4" fill="#00ffa3" rx="0.5" />
            </svg>
          </div>

          {/* Nome DevClub */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-white flex items-center">
            Dev<span className="text-[#00ffa3] drop-shadow-[0_0_25px_rgba(0,255,163,0.7)]">Club</span>
          </h1>
        </div>

        {/* =========================================================================
            BARRA DE PROGRESSO HORIZONTAL COM PORCENTAGEM (IDÊNTICA À IMAGEM)
            ========================================================================= */}
        <div className="flex items-center gap-4 sm:gap-6 mt-10 sm:mt-12">
          {/* Trilho da barra de progresso */}
          <div className="w-[260px] sm:w-[360px] md:w-[420px] h-4 sm:h-5 bg-[#12141c] rounded-full p-0.5 border border-white/5 overflow-hidden">
            <div
              id="preloader-progress-bar"
              className="h-full bg-gradient-to-r from-[#00ffa3] via-[#00ffa3] to-[#10e676] rounded-full transition-all duration-75 ease-out shadow-[0_0_20px_rgba(0,255,163,0.6)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Porcentagem ao lado da barra */}
          <span
            id="preloader-progress-text"
            className="text-white font-bold text-lg sm:text-xl font-mono tracking-tight min-w-[3.5rem]"
          >
            {progress}%
          </span>
        </div>

        {/* Texto "CARREGANDO O SEU FUTURO..." com tracking largo */}
        <p className="mt-4 sm:mt-5 font-mono text-xs sm:text-[13px] font-bold tracking-[0.25em] sm:tracking-[0.3em] text-slate-200 uppercase text-center select-none">
          CARREGANDO O SEU FUTURO...
        </p>
      </div>
    </div>
  );
};
