import React, { useState, useEffect } from "react";
import { X, ArrowRight, ShieldCheck, Check, Sparkles } from "lucide-react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [track, setTrack] = useState("fullstack");
  const [experience, setExperience] = useState("zero");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setIsLoading(false);
    setName("");
    setEmail("");
    setPhone("");
    onClose();
  };

  return (
    <div
      id="register-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onWheel={(e) => e.stopPropagation()}
    >
      <div
        id="register-modal-overlay"
        onClick={handleClose}
        className="absolute inset-0 bg-[#050505]/90 backdrop-blur-md cursor-pointer"
      ></div>

      <div className="relative w-full max-w-xl bg-[#0c0c0e] border border-white/15 rounded-2xl p-6 md:p-8 overflow-hidden shadow-2xl shadow-brand-green/10 z-10 animate-scale-up">
        <div className="absolute -right-16 -top-16 w-32 h-32 bg-brand-green/15 blur-2xl pointer-events-none"></div>
        <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-brand-purple/20 blur-2xl pointer-events-none"></div>

        <button
          id="close-register-modal"
          onClick={handleClose}
          className="absolute right-4 top-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors z-20 cursor-pointer"
        >
          <X className="w-4.5 h-4.5" />
        </button>

        {!isSuccess ? (
          <div id="register-form-container">
            <div className="mb-6 text-center md:text-left">
              <div className="flex items-center gap-3 select-none justify-center md:justify-start mb-4">
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none" className="rounded-lg overflow-hidden">
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
                <span className="font-display font-bold tracking-tight text-white text-lg">
                  Dev<span className="text-brand-green">Club</span>
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                Dê o próximo passo na sua carreira
              </h2>
              <p className="text-slate-400 text-xs md:text-sm mt-1">
                Preencha seus dados para receber o contato do nosso time de admissões com ofertas exclusivas.
              </p>
            </div>

            <form id="register-form" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="reg-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full bg-[#050505] border border-white/10 focus:border-brand-green/50 hover:border-white/15 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-green/30 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Seu Melhor E-mail
                  </label>
                  <input
                    type="email"
                    id="reg-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ex@gmail.com"
                    className="w-full bg-[#050505] border border-white/10 focus:border-brand-green/50 hover:border-white/15 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-green/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    WhatsApp / Telefone
                  </label>
                  <input
                    type="tel"
                    id="reg-phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-[#050505] border border-white/10 focus:border-brand-green/50 hover:border-white/15 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-green/30 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Trilha de Preferência
                  </label>
                  <select
                    id="reg-track"
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                    className="w-full bg-[#050505] border border-white/10 focus:border-brand-green/50 hover:border-white/15 text-white rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                  >
                    <option value="fullstack">Programação Full Stack (Recomendada)</option>
                    <option value="frontend">Programação Front End</option>
                    <option value="backend">Programação Back End</option>
                    <option value="mobile">Programação Mobile</option>
                    <option value="ia">IA & Automações</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Nível de Experiência
                  </label>
                  <select
                    id="reg-experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-[#050505] border border-white/10 focus:border-brand-green/50 hover:border-white/15 text-white rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                  >
                    <option value="zero">Começando do absoluto zero</option>
                    <option value="basic">Já conheço o básico de lógica</option>
                    <option value="advanced">Já sei programar e busco especialização</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                id="reg-submit-btn"
                disabled={isLoading}
                className="w-full mt-6 py-4 bg-brand-green hover:bg-[#00f799] text-[#04050a] font-bold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-brand-green/15 flex items-center justify-center gap-2 cursor-pointer active:scale-95 hover:-translate-y-0.5"
              >
                <span id="reg-btn-text">
                  {isLoading ? "Processando Inscrição..." : "Confirmar Pré-Inscrição"}
                </span>
                {isLoading ? (
                  <div id="reg-btn-spinner" className="w-5 h-5 border-2 border-[#04050a] border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <ArrowRight className="w-4 h-4" id="reg-btn-icon" />
                )}
              </button>

              <div className="pt-4 flex items-center justify-center gap-6 text-[10px] font-mono text-slate-500 border-t border-white/5">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="text-brand-green w-3 h-3" /> Privacidade Protegida
                </span>
                <span>•</span>
                <span>Garantia de 7 Dias Incondicional</span>
              </div>
            </form>
          </div>
        ) : (
          <div id="register-success-container" className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green mb-6 animate-pulse-slow">
              <Check className="w-8 h-8" />
            </div>

            <span className="text-[10px] tracking-widest font-mono text-brand-green bg-brand-green/10 border border-brand-green/20 px-3 py-1 rounded-full uppercase font-semibold mb-3">
              PRÉ-INSCRIÇÃO REALIZADA
            </span>
            <h2 className="text-3xl font-display font-bold text-white mb-3">
              Parabéns, <span id="success-user-name">{name.split(" ")[0] || "Dev"}</span>!
            </h2>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
              Sua vaga na lista de espera exclusiva foi garantida. Um especialista do DevClub entrará em contato em breve no
              número <strong id="success-user-phone" className="text-slate-200">{phone}</strong> para te dar acesso às
              vagas com descontos especiais!
            </p>

            <div className="w-full max-w-md bg-[#04050a] border border-white/5 rounded-xl p-4 mb-6 flex items-center gap-3 text-left">
              <Sparkles className="text-amber-400 shrink-0 w-5 h-5" />
              <p className="text-xs text-slate-400">
                <strong>Enquanto espera:</strong> fique de olho no seu WhatsApp e e-mail. Nós enviamos um mini-curso gratuito
                para você dar o seu primeiro console.log() hoje mesmo!
              </p>
            </div>

            <button
              id="close-success-btn"
              onClick={handleClose}
              className="px-6 py-2.5 border border-white/10 hover:border-brand-green/30 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm cursor-pointer"
            >
              Fechar Janela
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
