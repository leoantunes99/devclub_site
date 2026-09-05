import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

declare global {
  interface Window {
    __smoother?: ScrollSmoother;
    __lenis?: any;
  }
}

export function scrollToSection(targetId: string, customOffset = 80) {
  if (!targetId) return;

  const smoother = ScrollSmoother.get() || window.__smoother;

  if (targetId === "#" || targetId === "#hero") {
    if (smoother) {
      smoother.scrollTo(0, true);
    } else {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: 0 },
        ease: "power2.out",
      });
    }
    return;
  }

  const el = document.querySelector(targetId) as HTMLElement | null;
  if (!el) {
    console.warn(`Target section ${targetId} not found`);
    return;
  }

  // Para seções com pinning no topo da tela (ex: #formacoes), o scroll deve ir para o topo exato
  const offset = targetId === "#formacoes" ? 0 : customOffset;

  if (smoother) {
    // GSAP ScrollSmoother scrollTo smoothly scrolls to the target with navbar offset
    smoother.scrollTo(el, true, offset === 0 ? "top top" : `top ${offset}px`);
  } else {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: el, offsetY: offset },
      ease: "power2.out",
    });
  }
}
