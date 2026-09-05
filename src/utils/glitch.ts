import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface GlitchOptions {
  delay?: number;
  stagger?: number;
  maxFlickers?: number;
  flickerInterval?: number;
  duration?: number;
  useObserver?: boolean;
  scrollTrigger?: {
    trigger?: string | HTMLElement;
    start?: string;
  };
}

export function setupGlitchText(elementIdOrEl: string | HTMLElement | null, options: GlitchOptions = {}) {
  const target = typeof elementIdOrEl === "string" ? document.getElementById(elementIdOrEl) : elementIdOrEl;
  if (!target) return null;

  const originalText = target.textContent?.trim() || "";
  const words = originalText.split(" ");
  target.innerHTML = "";
  const charSpans: HTMLSpanElement[] = [];

  words.forEach((word, wIdx) => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "inline-block whitespace-nowrap";

    Array.from(word).forEach((char) => {
      const span = document.createElement("span");
      span.className = "glitch-char inline-block";
      span.textContent = char;
      span.dataset.char = char;
      span.style.opacity = "0";
      span.style.transform = "scale(0.8) translateY(4px)";

      wordSpan.appendChild(span);
      charSpans.push(span);
    });

    target.appendChild(wordSpan);

    if (wIdx < words.length - 1) {
      const space = document.createElement("span");
      space.className = "inline-block";
      space.innerHTML = "&nbsp;";
      target.appendChild(space);
    }
  });

  const techGlyphs = ["0", "1", "X", "#", "%", "&", "*", "$", "@", "<", ">", "/", "!", "?", "Z", "µ", "§"];
  let hasTriggered = false;

  const triggerReveal = () => {
    if (hasTriggered || charSpans.length === 0) return;
    hasTriggered = true;

    const indices = charSpans.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    const tl = gsap.timeline({ delay: options.delay || 0.1 });

    indices.forEach((charIndex, step) => {
      const span = charSpans[charIndex];
      const realChar = span.dataset.char || "";
      const startTime = step * (options.stagger !== undefined ? options.stagger : 0.07);

      tl.to(
        span,
        {
          duration: options.duration || 0.18,
          opacity: 1,
          ease: "none",
          onStart: () => {
            let flickerCount = 0;
            const maxFlickers = options.maxFlickers || 5;
            const intervalTime = options.flickerInterval || 30;
            const interval = setInterval(() => {
              flickerCount++;
              if (flickerCount < maxFlickers) {
                span.textContent = techGlyphs[Math.floor(Math.random() * techGlyphs.length)];
                span.style.color = "#00ffff";
                span.style.textShadow = "-3px 0 #ff0055, 3px 0 #00ffff, 0 0 12px #00ffa3";
                span.style.transform = `translate(${(Math.random() - 0.5) * 6}px, ${(Math.random() - 0.5) * 4}px) scale(1.2)`;
              } else {
                clearInterval(interval);
                span.textContent = realChar;
                span.style.color = "";
                span.style.textShadow = "";
                gsap.to(span, {
                  x: 0,
                  y: 0,
                  scale: 1,
                  duration: 0.12,
                  ease: "back.out(2)",
                });
              }
            }, intervalTime);
          },
        },
        startTime
      );
    });

    tl.call(() => {
      startIdleGlitchLoop(charSpans);
    });
  };

  if (options.scrollTrigger || options.useObserver !== false) {
    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              triggerReveal();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );
      observer.observe(target);
    }

    if (options.scrollTrigger && typeof options.scrollTrigger === "object") {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: options.scrollTrigger.trigger || target,
        start: options.scrollTrigger.start || "top 85%",
        once: true,
        onEnter: () => {
          triggerReveal();
        },
      });
    }
  }

  return { triggerReveal, charSpans };
}

function startIdleGlitchLoop(charSpans: HTMLSpanElement[]) {
  if (!charSpans || charSpans.length === 0) return;
  const techGlyphs = ["0", "1", "X", "#", "%", "&", "*", "$", "@", "<", ">", "/", "!", "?", "Z"];

  setInterval(() => {
    if (Math.random() > 0.3) {
      const randomIndex = Math.floor(Math.random() * charSpans.length);
      const span = charSpans[randomIndex];
      if (!span) return;
      const realChar = span.dataset.char || "";

      span.textContent = techGlyphs[Math.floor(Math.random() * techGlyphs.length)];
      span.style.color = "#00ffff";
      span.style.textShadow = "-2px 0 #ff0055, 2px 0 #00ffff, 0 0 10px #00ffa3";
      span.style.transform = `translate(${(Math.random() - 0.5) * 4}px, 0) scale(1.1)`;

      setTimeout(() => {
        span.textContent = realChar;
        span.style.color = "";
        span.style.textShadow = "";
        span.style.transform = "none";
      }, 120);
    }
  }, 3200);
}
