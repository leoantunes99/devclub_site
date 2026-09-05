import React from "react";
import { Laptop, ArrowRight } from "lucide-react";

interface CommunityBannerProps {
  onOpenRegister: () => void;
}

export const CommunityBanner: React.FC<CommunityBannerProps> = ({ onOpenRegister }) => {
  return (
    <section className="bg-[#050505] pb-20 relative z-10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="section-card-anim border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green border border-brand-green/20">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm md:text-base">
                Aprenda as principais tecnologias do mercado
              </p>
              <p className="text-slate-400 text-xs md:text-sm mt-0.5">
                Do absoluto zero ao avançado, de forma 100% prática e didática, focada em empregabilidade.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenRegister}
            className="open-register w-full md:w-auto px-6 py-3 bg-brand-green text-[#04050a] hover:bg-[#00f799] font-semibold text-sm rounded-lg transition-all duration-300 shadow-md shadow-brand-green/15 flex items-center justify-center gap-2 group hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Escolher Minha Trilha</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
