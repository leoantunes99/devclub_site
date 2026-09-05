import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAllTitlesAndCardsScrollAnimations() {
  const animateFromBottom = (targets: any, trigger: any, options: any = {}) => {
    const elements = typeof targets === "string" ? document.querySelectorAll(targets) : targets;
    if (!elements || elements.length === 0) return;

    const triggerEl = typeof trigger === "string" ? document.querySelector(trigger) : trigger;
    if (!triggerEl) return;

    gsap.set(elements, { opacity: 0, y: 28 });

    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.8,
      stagger: options.stagger !== undefined ? options.stagger : 0.1,
      ease: options.ease || "power2.out",
      scrollTrigger: {
        trigger: triggerEl,
        start: options.start || "top 85%",
        once: true
      }
    });
  };

  const animateCards = (selector: string, defaultTrigger: any, options: any = {}) => {
    const cards = document.querySelectorAll(selector);
    if (!cards || cards.length === 0) return;

    gsap.set(cards, { opacity: 0, y: 24 });

    const isMobile = window.innerWidth < 768;

    if (isMobile && !options.forceContainerTrigger) {
      cards.forEach((card) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true
          }
        });
      });
    } else {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: options.duration || 0.8,
        stagger: options.stagger !== undefined ? options.stagger : 0.1,
        ease: options.ease || "power2.out",
        scrollTrigger: {
          trigger: defaultTrigger,
          start: options.start || "top 85%",
          once: true
        }
      });
    }
  };

  // 1. Animação de todos os cabeçalhos de seção (selo, título h2/h3 e subtítulo p)
  document.querySelectorAll(".section-header-anim").forEach((header) => {
    if (header.children && header.children.length > 0) {
      animateFromBottom(header.children, header, { start: "top 85%", stagger: 0.12 });
    }
  });

  // 2. Animação do cabeçalho da seção FAQ
  const faqHeader = document.querySelector(".faq-header-anim");
  if (faqHeader && faqHeader.children) {
    animateFromBottom(faqHeader.children, faqHeader, { start: "top 85%", stagger: 0.12 });
  }

  // 3. Animação dos cards da seção Formações (Trilhas)
  animateCards("#trilhas-slider-container .trilha-card", "#formacoes", { start: "top 80%", stagger: 0.08, forceContainerTrigger: true });

  // 4. Animação do card de banner de destaque
  animateCards(".section-card-anim", ".section-card-anim", { start: "top 85%" });

  // 5. Animação dos cards e do banner CTA da Faculdade MBA
  animateCards("#mba-features-container .mba-animate-item, .mba-cta-card, .mba-cta-mobile-btn", "#faculdade", { start: "top 78%", stagger: 0.12 });

  // 6. Animação dos cards da seção Recursos (Além do Código)
  animateCards("#recursos-grid .recurso-card", "#recursos", { start: "top 78%", stagger: 0.1 });

  // 7. Animação dos cards do Bento Grid da Plataforma
  animateCards("#plataforma .bento-card", "#plataforma", { start: "top 78%", stagger: 0.12 });

  // 8. Animação das abas de projetos e do painel de código
  animateCards("#project-tabs > button, .project-code-card", "#projetos", { start: "top 78%", stagger: 0.12 });

  // 9. Animação do corpo docente e do selo do MEC
  animateCards("#teachers-grid > div, #mec-card", "#professores", { start: "top 78%", stagger: 0.08 });

  // 10. Animação dos depoimentos de alunos e cartão de índice de empregabilidade
  animateCards("#testimonials-grid .testimonial-card, .testimonial-summary-card", "#depoimentos", { start: "top 78%", stagger: 0.12 });

  // 11. Animação dos cards de módulos bônus
  animateCards("#bonus-grid > div", "#bonus", { start: "top 78%", stagger: 0.12 });

  // 12. Animação dos cartões de informação de salário e do gráfico de salários
  animateCards(".salary-info-card, #salary-chart", "#mercado", { start: "top 78%", stagger: 0.15 });

  // 13. Animação do cartão de garantia incondicional
  animateCards(".guarantee-card", "#garantia", { start: "top 80%" });

  // 14. Animação dos cartões de suporte do WhatsApp (FAQ)
  animateCards(".faq-support-card", "#faq", { start: "top 78%", stagger: 0.12 });

  // 15. Animação do cabeçalho da seção CTA final
  const ctaElements = document.querySelectorAll(".cta-content > *:not(button)");
  if (ctaElements && ctaElements.length > 0) {
    animateFromBottom(ctaElements, ".cta-section", { start: "top 82%", stagger: 0.12 });
  }
}
