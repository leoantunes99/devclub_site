import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { Preloader } from "./components/Preloader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LogoCarousel } from "./components/LogoCarousel";
import { Trilhas } from "./components/Trilhas";
import { CommunityBanner } from "./components/CommunityBanner";
import { FaculdadeMBA } from "./components/FaculdadeMBA";
import { Recursos } from "./components/Recursos";
import { Plataforma } from "./components/Plataforma";
import { Projetos } from "./components/Projetos";
import { Professores } from "./components/Professores";
import { Depoimentos } from "./components/Depoimentos";
import { Bonus } from "./components/Bonus";
import { MercadoSalarios } from "./components/MercadoSalarios";
import { Garantia } from "./components/Garantia";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { RegisterModal } from "./components/RegisterModal";
import { StudentPortalModal } from "./components/StudentPortalModal";

import { initAllTitlesAndCardsScrollAnimations } from "./utils/scrollAnimations";
import { scrollToSection } from "./utils/navigation";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

export const App: React.FC = () => {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isStudentAreaOpen, setIsStudentAreaOpen] = useState(false);

  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    // Create GSAP ScrollSmoother instance
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: false,
    });

    smootherRef.current = smoother;
    (window as any).__smoother = smoother;

    smoother.scrollTop(0);
    smoother.paused(true);

    // Global smooth scroll interceptor for anchor tags with href="#..."
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;
      if (
        target.closest("#student-modal") ||
        target.closest("#register-modal") ||
        target.classList.contains("tab-selector")
      ) {
        return;
      }
      e.preventDefault();
      scrollToSection(href);
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      smoother.kill();
      delete (window as any).__smoother;
    };
  }, []);

  const handlePreloaderComplete = () => {
    setIsPreloaderDone(true);
    const smoother = ScrollSmoother.get() || smootherRef.current;
    if (smoother) {
      smoother.paused(false);
      smoother.scrollTop(0);
    }
    // Initialize all scroll animations across the landing page and refresh triggers
    setTimeout(() => {
      ScrollTrigger.refresh();
      initAllTitlesAndCardsScrollAnimations();
    }, 150);
  };

  const handleOpenRegister = () => {
    const smoother = ScrollSmoother.get() || smootherRef.current;
    if (smoother) smoother.paused(true);
    setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    const smoother = ScrollSmoother.get() || smootherRef.current;
    if (smoother) smoother.paused(false);
    setIsRegisterOpen(false);
  };

  const handleOpenStudentArea = () => {
    const smoother = ScrollSmoother.get() || smootherRef.current;
    if (smoother) smoother.paused(true);
    setIsStudentAreaOpen(true);
  };

  const handleCloseStudentArea = () => {
    const smoother = ScrollSmoother.get() || smootherRef.current;
    if (smoother) smoother.paused(false);
    setIsStudentAreaOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-brand-green selection:text-[#04050a] font-sans antialiased">
      {/* Preloader - Overlay fixo fora do ScrollSmoother */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Navbar Fixa no topo fora do ScrollSmoother para evitar conflitos de transform */}
      <Navbar
        onOpenRegister={handleOpenRegister}
        onOpenStudentArea={handleOpenStudentArea}
      />

      {/* Estrutura Oficial do GSAP ScrollSmoother (wrapper + content) */}
      <div id="smooth-wrapper">
        <div id="smooth-content" className="pt-20">
          {/* Hero Section */}
          <Hero
            isPreloaderDone={isPreloaderDone}
            onOpenRegister={handleOpenRegister}
          />

          {/* Infinite Logo Carousel */}
          <LogoCarousel />

          {/* Trilhas / Formações */}
          <Trilhas
            isPreloaderDone={isPreloaderDone}
            onOpenRegister={handleOpenRegister}
          />

          {/* Comunidade Ativa Banner */}
          <CommunityBanner />

          {/* Faculdade e MBA */}
          <FaculdadeMBA onOpenRegister={handleOpenRegister} />

          {/* Recursos (Além do Código) */}
          <Recursos />

          {/* Plataforma Bento Grid */}
          <Plataforma onOpenRegister={handleOpenRegister} />

          {/* Projetos Práticos */}
          <Projetos />

          {/* Professores e MEC */}
          <Professores onOpenRegister={handleOpenRegister} />

          {/* Depoimentos */}
          <Depoimentos />

          {/* Bônus */}
          <Bonus onOpenRegister={handleOpenRegister} />

          {/* Mercado e Salários */}
          <MercadoSalarios onOpenRegister={handleOpenRegister} />

          {/* Garantia de 7 Dias */}
          <Garantia />

          {/* Perguntas Frequentes (FAQ) */}
          <FAQ />

          {/* CTA Final */}
          <CTA onOpenRegister={handleOpenRegister} />

          {/* Footer */}
          <Footer
            onOpenRegister={handleOpenRegister}
            onOpenStudentArea={handleOpenStudentArea}
          />
        </div>
      </div>

      {/* Modais - Fixos fora do ScrollSmoother */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
      />

      <StudentPortalModal
        isOpen={isStudentAreaOpen}
        onClose={handleCloseStudentArea}
      />
    </div>
  );
};
export default App;

