import React, { useState, useEffect, useRef } from "react";
import {
  X,
  BookOpen,
  Award,
  Cpu,
  Play,
  CheckCircle2,
  PlayCircle,
  Trophy,
  ArrowDown,
  Brain,
  User,
  Send,
} from "lucide-react";
import { lessonsData, Lesson } from "../data/lessons";
import { leadersData } from "../data/leaders";
import { SafeImage } from "./SafeImage";

interface StudentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  sender: "bot" | "user";
  text: string;
}

export const StudentPortalModal: React.FC<StudentPortalModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"lessons" | "mural" | "ai">("lessons");
  const [activeLesson, setActiveLesson] = useState<Lesson>(lessonsData[3]);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Olá Leonardo! Eu sou o Club Agent. Como sou configurado com expertise sênior, posso analisar trechos de código, dar dicas de arquitetura ou te ajudar a resolver erros de terminal. O que está desenvolvendo hoje?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (activeTab === "ai") {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, isTyping, activeTab]);

  if (!isOpen) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputMessage.trim();
    if (!text) return;

    setChatHistory((prev) => [...prev, { sender: "user", text }]);
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let answer = "";
      const query = text.toLowerCase();

      if (query.includes("error") || query.includes("undefined") || query.includes("cannot read")) {
        answer = `Isso é um clássico! O erro 'Cannot read properties of undefined' acontece quando você tenta ler uma chave de um objeto que ainda não existe no estado ou no escopo.\n\nComo resolver:\n1. Adicione um operador opcional (?.) no React:\n\`\`\`javascript\nconsole.log(usuario?.perfil?.nome);\n\`\`\`\n2. Ou adicione uma validação com operador lógico:\n\`\`\`javascript\nif (usuario) { console.log(usuario.perfil); }\n\`\`\``;
      } else if (query.includes("let") || query.includes("const") || query.includes("var")) {
        answer = `Em Javascript moderno:\n- **const**: Cria uma variável constante. O escopo é de bloco e o valor não pode ser reatribuído.\n- **let**: Cria uma variável mutável, também com escopo de bloco.\n- **var**: É a forma antiga obsoleta de declarar variáveis, possui escopo de função e gera 'hoisting', o que costuma causar bugs no código. Prefira sempre const e let!`;
      } else if (query.includes("react") || query.includes("hooks") || query.includes("useeffect")) {
        answer = `Os React Hooks permitem usar estado e ciclo de vida dentro de componentes funcionais.\n- **useState**: Gerencia o estado reativo local.\n- **useEffect**: Lida com efeitos colaterais (chamadas de APIs, timers). Cuidado com loops infinitos de re-render! Sempre configure o array de dependências corretamente.`;
      } else {
        answer = `Ótima pergunta! Esse conceito é abordado detalhadamente no Módulo 2 da nossa Trilha de Formação. No DevClub estruturamos as soluções sempre de forma modular e limpa.\n\nCaso precise testar, pode usar nossa API para estruturar uma função assíncrona. Continue codando firme!`;
      }

      setChatHistory((prev) => [...prev, { sender: "bot", text: answer }]);
    }, 1200);
  };

  return (
    <div
      id="student-modal"
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
      onWheel={(e) => e.stopPropagation()}
    >
      <div
        id="student-modal-overlay"
        onClick={onClose}
        className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md cursor-pointer"
      ></div>

      <div className="relative w-full max-w-5xl h-[92vh] sm:h-[85vh] bg-[#0c0c0e] border border-white/15 rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-2xl shadow-brand-green/10 z-10 animate-scale-up">
        {/* Barra lateral vertical esquerda */}
        <div className="w-full md:w-64 bg-[#09090b] border-b md:border-b-0 md:border-r border-white/10 flex flex-row md:flex-col justify-between p-4 md:p-6">
          <div className="flex flex-col w-full">
            <div className="hidden md:flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2">
                <svg width="28" height="28" viewBox="0 0 100 100" fill="none" className="rounded-md overflow-hidden">
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
                <span className="font-display font-bold tracking-tight text-white text-base">
                  Dev<span className="text-brand-green">Club</span>
                </span>
              </div>
              <span className="text-[9px] font-mono bg-brand-green/10 text-brand-green border border-brand-green/20 px-1.5 py-0.5 rounded uppercase font-bold">
                ALUNO
              </span>
            </div>

            <nav className="flex flex-row md:flex-col gap-1 md:gap-2 w-full justify-around md:justify-start">
              <button
                id="tab-btn-lessons"
                onClick={() => setActiveTab("lessons")}
                className={`tab-button flex items-center gap-2.5 px-3 py-2 md:py-3 rounded-lg text-xs md:text-sm font-semibold transition-all w-full md:text-left justify-center md:justify-start cursor-pointer ${
                  activeTab === "lessons"
                    ? "bg-brand-green/10 text-brand-green border-l-2 border-brand-green md:border-l-4"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Aulas & Trilhas</span>
              </button>

              <button
                id="tab-btn-mural"
                onClick={() => setActiveTab("mural")}
                className={`tab-button flex items-center gap-2.5 px-3 py-2 md:py-3 rounded-lg text-xs md:text-sm font-semibold transition-all w-full md:text-left justify-center md:justify-start cursor-pointer ${
                  activeTab === "mural"
                    ? "bg-brand-green/10 text-brand-green border-l-2 border-brand-green md:border-l-4"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Award className="w-4 h-4" />
                <span className="hidden sm:inline">Mural da Fama</span>
              </button>

              <button
                id="tab-btn-ai"
                onClick={() => setActiveTab("ai")}
                className={`tab-button flex items-center gap-2.5 px-3 py-2 md:py-3 rounded-lg text-xs md:text-sm font-semibold transition-all w-full md:text-left justify-center md:justify-start cursor-pointer relative ${
                  activeTab === "ai"
                    ? "bg-brand-green/10 text-brand-green border-l-2 border-brand-green md:border-l-4"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span className="hidden sm:inline">Club Agent (IA)</span>
                <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-brand-green animate-ping hidden md:inline"></span>
              </button>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-3 pt-6 border-t border-white/5 mt-auto">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0 bg-[#121214]">
              <SafeImage
                src="/assets/images/avatar_leonardo_1784817337734.jpg"
                alt="Leonardo Antunes"
                fallbackText="LA"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-white font-bold text-xs">Leonardo Antunes</p>
              <p className="text-brand-green text-[10px] font-mono">Nível 12 • 4.250 XP</p>
            </div>
          </div>
        </div>

        {/* Painel do Dashboard à direita */}
        <div className="flex-1 flex flex-col h-full bg-[#0c0c0e] overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b border-white/10 bg-[#09090b]/50">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse"></span>
              <p className="text-slate-300 font-mono text-xs hidden sm:inline-block">
                Ambiente de Estudos Conectado • Servidor: São Paulo
              </p>
            </div>
            <button
              id="close-student-modal"
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Conteúdo das Abas */}
          <div id="student-tab-content" className="flex-1 overflow-hidden flex flex-col min-h-0 relative">
            {/* ABA 1: AULAS E VÍDEOS */}
            {activeTab === "lessons" && (
              <div id="tab-content-lessons" className="tab-pane flex flex-col lg:flex-row h-full overflow-hidden">
                <div className="flex-1 p-4 md:p-6 overflow-y-auto flex flex-col">
                  <div className="relative w-full aspect-video rounded-xl bg-[#050505] border border-white/10 overflow-hidden group flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(75,0,148,0.3)_0%,transparent_70%)] flex flex-col items-center justify-center"></div>
                    <div className="absolute left-4 top-4 font-mono text-[9px] text-brand-green bg-black/60 border border-brand-green/20 px-2 py-1 rounded">
                      console.log("Play: <span id="player-log-title">{activeLesson.title.split(" • ")[1] || activeLesson.title}</span>")
                    </div>

                    <button
                      id="video-play-btn"
                      className="w-16 h-16 rounded-full bg-brand-green hover:bg-[#00f799] text-[#04050a] flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg shadow-brand-green/20 cursor-pointer"
                    >
                      <Play className="w-6 h-6 ml-1 fill-current" />
                    </button>

                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-white text-xs font-mono">
                          00:00 / <span id="player-duration-label">{activeLesson.duration}</span>
                        </span>
                      </div>
                      <div className="w-1/2 h-1 bg-white/20 rounded overflow-hidden">
                        <div className="w-0 h-full bg-brand-green"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                        <span className="text-[9px] font-mono text-brand-green">1080p HD</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <span className="text-[10px] font-mono text-brand-green bg-brand-green/10 border border-brand-green/20 px-2 py-0.5 rounded uppercase font-semibold">
                      AULA ATUAL
                    </span>
                    <h1 id="lesson-active-title" className="text-xl md:text-2xl font-display font-bold text-white mt-2 mb-3">
                      {activeLesson.title}
                    </h1>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-4">
                      Nesta aula prática da nossa trilha de formação, vamos configurar as ferramentas fundamentais para
                      programar com eficiência, entender a estrutura básica de pastas, conceitos básicos e dar nosso primeiro
                      console.log()!
                    </p>

                    <div className="border border-white/10 bg-[#09090b]/60 rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-brand-green w-4.5 h-4.5" />
                        <div>
                          <p className="text-white text-xs font-semibold">Desafio prático disponível</p>
                          <p className="text-slate-500 text-[10px]">Crie sua primeira página web e envie no link ao lado.</p>
                        </div>
                      </div>
                      <button className="px-4 py-1.5 bg-brand-green/10 hover:bg-brand-green/20 text-brand-green border border-brand-green/20 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer">
                        ENVIAR PROJETO
                      </button>
                    </div>
                  </div>
                </div>

                {/* Playlist à direita */}
                <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-white/10 bg-[#09090b]/40 overflow-y-auto p-4 flex flex-col h-72 lg:h-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="text-brand-green w-4 h-4" />
                    <h3 className="text-white font-bold text-sm">Cronograma da Trilha</h3>
                  </div>
                  <div id="playlist-container" className="space-y-2">
                    {lessonsData.map((lesson) => {
                      const isActive = lesson.id === activeLesson.id;
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => setActiveLesson(lesson)}
                          className={`playlist-item w-full flex items-center justify-between p-3.5 rounded-xl border text-left cursor-pointer transition-colors ${
                            isActive
                              ? "bg-brand-green/10 border-brand-green/30 text-brand-green"
                              : "bg-white/[0.02] border-white/5 hover:border-white/10 text-slate-300 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                                lesson.isCompleted ? "bg-brand-green/10 text-brand-green" : "bg-white/5 text-slate-500"
                              }`}
                            >
                              {lesson.isCompleted ? (
                                <CheckCircle2 className="w-4 h-4" />
                              ) : (
                                <PlayCircle className="w-4 h-4" />
                              )}
                            </div>
                            <div className="pr-2">
                              <p className="text-xs font-semibold leading-tight line-clamp-1">{lesson.title}</p>
                              <span className="text-[9px] font-mono text-slate-500">{lesson.duration}</span>
                            </div>
                          </div>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* ABA 2: MURAL DA FAMA */}
            {activeTab === "mural" && (
              <div
                id="tab-content-mural"
                data-lenis-prevent
                className="tab-pane flex-1 h-full min-h-0 p-4 md:p-6 overflow-y-auto custom-scrollbar overscroll-contain"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-white/5 pb-6">
                  <div>
                    <div className="flex items-center gap-2 text-amber-400 mb-2">
                      <Award className="w-4.5 h-4.5" />
                      <span className="text-xs font-mono font-bold tracking-wider uppercase">LÍDERES DA COMUNIDADE</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Mural da fama</h2>
                    <p className="text-slate-400 text-xs md:text-sm mt-1">
                      Os alunos com maior pontuação em projetos entregues e mentoria ativa na comunidade neste mês.
                    </p>
                  </div>

                  <div className="bg-brand-purple/10 border border-brand-purple/20 px-4 py-2.5 rounded-xl flex items-center gap-3">
                    <span className="w-4.5 h-4.5 text-brand-purple animate-pulse flex items-center justify-center">✨</span>
                    <div>
                      <p className="text-white text-xs font-bold">Temporada de Julho/2026</p>
                      <p className="text-slate-500 text-[10px] font-mono">Premiação: R$ 500 em cupons de AWS</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between max-w-4xl mx-auto mb-3 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" /> Ranking dos 10 Melhores Alunos
                  </span>
                  <span className="text-[11px] text-brand-green flex items-center gap-1 font-semibold">
                    <ArrowDown className="w-3 h-3 animate-bounce" /> Role para ver todos
                  </span>
                </div>

                <div id="mural-rankings-list" className="space-y-3 max-w-4xl mx-auto pb-8">
                  {leadersData.map((user) => {
                    const isMe = user.rank === 1;
                    return (
                      <div
                        key={user.rank}
                        className={`flex items-center justify-between p-4 rounded-xl border backdrop-blur-md transition-all ${
                          isMe ? "bg-brand-green/5 border-brand-green/30" : "bg-white/[0.01] border-white/5 hover:border-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-8 flex items-center justify-center">
                            {user.rank === 1 && (
                              <span className="text-amber-400">
                                <Award className="w-5 h-5 fill-current" />
                              </span>
                            )}
                            {user.rank === 2 && (
                              <span className="text-slate-300">
                                <Award className="w-5 h-5" />
                              </span>
                            )}
                            {user.rank === 3 && (
                              <span className="text-amber-600">
                                <Award className="w-5 h-5" />
                              </span>
                            )}
                            {user.rank > 3 && (
                              <span className="font-mono text-slate-500 text-xs font-bold w-5 text-center">
                                {user.rank}
                              </span>
                            )}
                          </div>

                          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0 bg-[#121214] select-none shadow">
                            <SafeImage
                              src={user.image}
                              alt={user.name}
                              fallbackText={user.name.slice(0, 2).toUpperCase()}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div>
                            <p className="text-white text-xs md:text-sm font-bold flex items-center gap-2">
                              {user.name}
                              {isMe && (
                                <span className="text-[9px] font-mono text-brand-green bg-brand-green/10 border border-brand-green/20 px-1.5 py-0.2 rounded font-semibold uppercase">
                                  Você
                                </span>
                              )}
                            </p>
                            <p className="text-slate-500 text-[10px]">{user.level}</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-brand-green font-mono font-bold text-xs md:text-sm text-glow-green">
                            {user.xp}
                          </span>
                          <p className="text-[9px] text-slate-500 font-mono">projetos homologados</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ABA 3: CLUB AGENT (IA) */}
            {activeTab === "ai" && (
              <div id="tab-content-ai" className="tab-pane flex-1 flex flex-col h-full overflow-hidden">
                <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4" id="ai-chat-messages">
                  <div className="border border-brand-purple/20 bg-brand-purple/5 rounded-xl p-4 flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center text-brand-purple">
                      <Brain className="animate-pulse w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-bold flex items-center gap-1.5">
                        Club Agent Sênior v2
                        <span className="w-2 h-2 rounded-full bg-brand-green inline-block"></span>
                      </h3>
                      <p className="text-slate-400 text-xs">
                        IA focada em engenharia de software e revisão de código. Tire suas dúvidas sobre bugs, Git, Docker ou
                        React!
                      </p>
                    </div>
                  </div>

                  <div id="chat-thread-container" className="space-y-4">
                    {chatHistory.map((msg, idx) => {
                      const isBot = msg.sender === "bot";
                      return (
                        <div key={idx} className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
                          <div
                            className={`max-w-[85%] rounded-2xl p-4 text-xs md:text-sm leading-relaxed ${
                              isBot
                                ? "bg-[#09090b] border border-white/5 text-slate-300"
                                : "bg-brand-purple text-white shadow-md shadow-brand-purple/20"
                            }`}
                          >
                            <div className="flex items-center gap-1.5 mb-1 text-[9px] font-mono text-slate-500 uppercase tracking-wide">
                              {isBot ? (
                                <Cpu className="w-3 h-3 text-brand-purple" />
                              ) : (
                                <User className="w-3 h-3 text-white" />
                              )}
                              <span>{isBot ? "Club Agent v2" : "Leonardo (Você)"}</span>
                            </div>
                            <p className="whitespace-pre-line">{msg.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {isTyping && (
                    <div id="ai-typing-indicator" className="flex justify-start">
                      <div className="bg-white/5 border border-white/5 text-slate-400 rounded-2xl p-4 text-xs flex items-center gap-2">
                        <Cpu className="animate-spin text-brand-purple w-3.5 h-3.5" />
                        <span>Club Agent está digitando solução...</span>
                      </div>
                    </div>
                  )}
                  <div ref={chatBottomRef} />
                </div>

                <form
                  id="ai-chat-form"
                  onSubmit={handleSendMessage}
                  className="p-4 bg-[#09090b]/60 border-t border-white/10 flex gap-2"
                >
                  <input
                    type="text"
                    id="ai-chat-input"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ex: Como consertar o erro Cannot read properties of undefined? ou Qual a diferença de let e const?"
                    className="flex-1 bg-[#050505] border border-white/10 focus:border-brand-purple/50 focus:outline-none text-white text-xs md:text-sm rounded-lg px-4 py-3"
                  />
                  <button
                    type="submit"
                    className="w-12 h-12 rounded-lg bg-brand-purple hover:bg-brand-purple/90 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
