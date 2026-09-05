import React from "react";
import { Heart, Coffee } from "lucide-react";
import { scrollToSection } from "../utils/navigation";

interface FooterProps {
  onOpenRegister: () => void;
  onOpenStudentArea: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegister, onOpenStudentArea }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToSection(targetId);
  };
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-16 text-slate-400 font-sans relative overflow-hidden">
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-80 h-40 bg-radial-gradient-green opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3 select-none">
              <svg
                width="36"
                height="36"
                viewBox="0 0 100 100"
                fill="none"
                className="rounded-lg overflow-hidden shadow-md shadow-brand-purple/20"
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
                <path
                  d="M18 64L28 69L18 74"
                  stroke="#1CB85C"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="31" y="72" width="10" height="10" fill="#1CB85C" rx="1" />
                <line x1="42" y1="78" x2="52" y2="62" stroke="#1CB85C" strokeWidth="4" strokeLinecap="round" />
                <path
                  d="M68 64L58 69L68 74"
                  stroke="#1CB85C"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="73" y="62" width="16" height="16" fill="#1CB85C" rx="2" />
                <rect x="76" y="65" width="10" height="10" fill="#1E0C30" />
                <rect x="79" y="68" width="4" height="4" fill="#1CB85C" rx="0.5" />
              </svg>
              <span className="font-display font-bold tracking-tight text-white text-xl">
                Dev<span className="text-brand-green">Club</span>
              </span>
            </div>
            <p className="text-xs md:text-sm leading-relaxed text-slate-500 max-w-sm">
              A maior e mais ativa comunidade de tecnologia do Brasil. Formações de alto desempenho que te levam do absoluto
              zero até a sua primeira vaga, com suporte humano real de domingo a domingo.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-mono font-bold tracking-widest uppercase">FORMAÇÕES</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#formacoes" onClick={(e) => handleNavClick(e, "#formacoes")} className="hover:text-brand-green transition-colors">
                  Front End
                </a>
              </li>
              <li>
                <a href="#formacoes" onClick={(e) => handleNavClick(e, "#formacoes")} className="hover:text-brand-green transition-colors">
                  Back End
                </a>
              </li>
              <li>
                <a href="#formacoes" onClick={(e) => handleNavClick(e, "#formacoes")} className="hover:text-brand-green transition-colors">
                  Full Stack
                </a>
              </li>
              <li>
                <a href="#formacoes" onClick={(e) => handleNavClick(e, "#formacoes")} className="hover:text-brand-green transition-colors">
                  IA & Automações
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-mono font-bold tracking-widest uppercase">DEVCLUB</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#faculdade" onClick={(e) => handleNavClick(e, "#faculdade")} className="hover:text-brand-green transition-colors">
                  Faculdade & MBA
                </a>
              </li>
              <li>
                <a href="#recursos" onClick={(e) => handleNavClick(e, "#recursos")} className="hover:text-brand-green transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#projetos" onClick={(e) => handleNavClick(e, "#projetos")} className="hover:text-brand-green transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#professores" onClick={(e) => handleNavClick(e, "#professores")} className="hover:text-brand-green transition-colors">
                  Professores
                </a>
              </li>
              <li>
                <a href="#garantia" onClick={(e) => handleNavClick(e, "#garantia")} className="hover:text-brand-green transition-colors">
                  Garantia
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")} className="hover:text-brand-green transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-mono font-bold tracking-widest uppercase">ALUNO</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={onOpenStudentArea}
                  className="open-student-area hover:text-brand-green transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Área do Aluno
                </button>
              </li>
              <li>
                <a href="#garantia" onClick={(e) => handleNavClick(e, "#garantia")} className="hover:text-brand-green transition-colors">
                  Garantia de 7 dias
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenRegister}
                  className="open-register hover:text-brand-green transition-colors cursor-pointer text-left focus:outline-none"
                >
                  Quero ser Aluno
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/5 my-8"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] md:text-xs text-slate-600">
          <p>© 2026 devclub. Todos os direitos reservados. CNPJ: 43.140.231/0001-90</p>
          <div className="flex items-center gap-1">
            <span>Feito com</span>
            <Heart className="text-rose-500 fill-current animate-pulse w-3 h-3" />
            <span>e muito café</span>
            <Coffee className="text-amber-700 fill-current w-3.5 h-3.5" />
            <span>para acelerar carreiras.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
