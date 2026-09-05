import React, { useState, useRef } from "react";
import gsap from "gsap";
import { User, ArrowRight, Menu, X } from "lucide-react";
import { scrollToSection } from "../utils/navigation";

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenStudentArea: () => void;
}

const NAV_LINKS = [
  { label: "Formações", href: "#formacoes" },
  { label: "Faculdade", href: "#faculdade" },
  { label: "Recursos", href: "#recursos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Professores", href: "#professores" },
  { label: "Garantia", href: "#garantia" },
  { label: "FAQ", href: "#faq" },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenStudentArea }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    if (!mobileMenuRef.current || !menuBtnRef.current) return;

    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
      mobileMenuRef.current.classList.remove("hidden");

      gsap.fromTo(menuBtnRef.current, { scale: 0.85 }, { scale: 1, duration: 0.3, ease: "back.out(2)" });

      const tl = gsap.timeline();
      tl.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0, overflow: "hidden" },
        { height: "auto", opacity: 1, duration: 0.45, ease: "power3.out", clearProps: "overflow" }
      );

      const links = mobileMenuRef.current.querySelectorAll(".mobile-nav-link");
      if (links.length > 0) {
        tl.fromTo(
          links,
          { opacity: 0, y: 14, x: -6 },
          { opacity: 1, y: 0, x: 0, duration: 0.35, stagger: 0.04, ease: "power2.out" },
          "-=0.3"
        );
      }

      const actionBtns = mobileMenuRef.current.querySelectorAll(".mobile-menu-action-box button");
      if (actionBtns.length > 0) {
        tl.fromTo(
          actionBtns,
          { opacity: 0, y: 14, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.08, ease: "back.out(1.4)" },
          "-=0.2"
        );
      }
    } else {
      closeMobileMenu();
    }
  };

  const closeMobileMenu = () => {
    if (!mobileMenuRef.current || !isMobileMenuOpen) return;
    setIsMobileMenuOpen(false);

    if (menuBtnRef.current) {
      gsap.fromTo(menuBtnRef.current, { scale: 0.85 }, { scale: 1, duration: 0.3, ease: "back.out(2)" });
    }

    gsap.to(mobileMenuRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power3.inOut",
      onComplete: () => {
        if (mobileMenuRef.current) {
          mobileMenuRef.current.classList.add("hidden");
        }
      },
    });
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMobileMenu();
    scrollToSection(targetId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" onClick={(e) => handleNavLinkClick(e, "#")} className="flex items-center gap-3 select-none">
          <svg
            width="36"
            height="36"
            viewBox="0 0 100 100"
            fill="none"
            className="rounded-lg overflow-hidden shadow-md shadow-brand-purple/20 transition-transform duration-300 hover:scale-105"
          >
            <rect width="100" height="100" fill="#1E0C30" />
            <rect x="18" y="18" width="14" height="14" fill="#1CB85C" rx="1" />
            <rect x="21" y="21" width="8" height="8" fill="#1E0C30" />
            <rect x="23" y="23" width="4" height="4" fill="#1CB85C" rx="0.5" />
            <rect x="35" y="18" width="6" height="6" fill="#1CB85C" rx="1" />
            <rect x="45" y="18" width="22" height="6" fill="#1CB85C" rx="1" />
            <rect x="71" y="18" width="11" height="6" fill="#1CB85C" rx="1" />
            <rect x="86" y="18" width="6" height="12" fill="#1CB85C" rx="1" />
            <rect x="18" y="36" width="6" height="12" fill="#1CB85C" rx="1" />
            <rect x="18" y="52" width="6" height="6" fill="#1CB85C" rx="1" />
            <path d="M29 32H41C45 32 47 34 47 38V44C47 48 45 50 41 50H29V32Z" fill="#1CB85C" />
            <rect x="35" y="37" width="6" height="8" fill="#1E0C30" rx="0.5" />
            <path d="M51 32H67V37H57V45H67V50H51V32Z" fill="#1CB85C" />
            <rect x="71" y="28" width="6" height="28" fill="#1CB85C" rx="1" />
            <rect x="81" y="34" width="3" height="12" fill="#1CB85C" rx="0.5" />
            <path d="M18 64L28 69L18 74" stroke="#1CB85C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="31" y="72" width="10" height="10" fill="#1CB85C" rx="1" />
            <line x1="42" y1="78" x2="52" y2="62" stroke="#1CB85C" strokeWidth="4" strokeLinecap="round" />
            <path d="M68 64L58 69L68 74" stroke="#1CB85C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="73" y="62" width="16" height="16" fill="#1CB85C" rx="2" />
            <rect x="76" y="65" width="10" height="10" fill="#1E0C30" />
            <rect x="79" y="68" width="4" height="4" fill="#1CB85C" rx="0.5" />
          </svg>
          <span className="font-display font-bold tracking-tight text-white text-xl">
            Dev<span className="text-brand-green">Club</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="text-slate-300 hover:text-brand-green text-xs font-medium tracking-wide transition-colors font-sans py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenStudentArea}
            className="open-student-area flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-brand-purple/40 text-slate-300 hover:text-white rounded-lg text-xs font-semibold transition-all cursor-pointer bg-white/5 hover:bg-white/10"
          >
            <User className="text-brand-purple w-3.5 h-3.5" />
            <span>Área do Aluno</span>
          </button>
          <button
            onClick={onOpenRegister}
            className="open-register flex items-center gap-1.5 px-4 py-2.5 bg-brand-green hover:bg-[#00f799] text-[#04050a] font-bold text-xs rounded-lg transition-all duration-300 shadow-md shadow-brand-green/15 cursor-pointer group"
          >
            <span>Quero ser Aluno</span>
            <ArrowRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <button
          id="mobile-menu-toggle"
          ref={menuBtnRef}
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 border border-white/5 cursor-pointer"
          aria-label="Abrir menu mobile"
        >
          {isMobileMenuOpen ? (
            <X id="menu-icon-close" className="w-5 h-5" />
          ) : (
            <Menu id="menu-icon-open" className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* MENU EXPANDIDO PARA CELULAR */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className="hidden lg:hidden border-t border-white/5 bg-[#050505]/95 backdrop-blur-xl"
      >
        <div className="p-6 space-y-4">
          <div className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="mobile-nav-link text-slate-200 hover:text-brand-green text-sm font-medium py-2.5 px-2 rounded-lg transition-colors block hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/5 flex flex-col gap-3 mobile-menu-action-box">
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenStudentArea();
              }}
              className="open-student-area-mobile w-full flex items-center justify-center gap-2 px-4 py-3 border border-white/10 text-slate-300 rounded-lg text-sm font-semibold hover:bg-white/5 cursor-pointer"
            >
              <User className="text-brand-purple w-4 h-4" />
              <span>Área do Aluno</span>
            </button>
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenRegister();
              }}
              className="open-register-mobile w-full flex items-center justify-center gap-2 px-4 py-3 bg-brand-green text-[#04050a] font-bold rounded-lg text-sm cursor-pointer shadow-md shadow-brand-green/10"
            >
              <span>Quero ser Aluno</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
