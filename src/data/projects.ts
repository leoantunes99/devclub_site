export interface Project {
  title: string;
  category: string;
  desc: string;
  techs: string[];
  outcome: string;
  image: string;
}

export const projectsList: Project[] = [
  {
    title: "Orquestrador de Agentes Autônomos",
    category: "Inteligência Artificial & Automações",
    desc: "Um sistema de agentes de IA construído do zero que monitora canais de tickets do Slack, analisa erros críticos do código, desenvolve correções de bugs, cria pull requests no GitHub e alerta o time técnico.",
    techs: ["Gemini API", "Node.js", "GitHub API", "n8n", "Docker"],
    outcome: "Automatizou 70% das tarefas de triagem de incidentes na empresa parceira.",
    image: "/assets/images/project_ai_orchestrator_1784816502609.jpg"
  },
  {
    title: "FinTech SaaS com Multi-Tenancy",
    category: "Desenvolvimento Full Stack",
    desc: "Plataforma de gestão financeira robusta com integrações de assinatura recorrente (Stripe), dashboards dinâmicos, relatórios em PDF/CSV de performance, controle de fluxo de caixa e infraestrutura elástica.",
    techs: ["React", "Express", "PostgreSQL", "Stripe SDK", "Recharts"],
    outcome: "Simulação de transações reais, webhook de cobrança e autenticação com JWT segura.",
    image: "/assets/images/project_fintech_saas_1784816515582.jpg"
  },
  {
    title: "Portal de Ensino & Gamificação",
    category: "Desenvolvimento Full Stack",
    desc: "Clone avançado da própria plataforma de ensino do DevClub. Conta com player de vídeo otimizado, sistema de XP acumulado por aulas assistidas, ranking interativo semanal, fórum em tempo real e chat de suporte com IA.",
    techs: ["Next.js", "WebSockets", "Drizzle ORM", "TailwindCSS"],
    outcome: "Sistema de ranking em tempo real testado para suportar milhares de conexões.",
    image: "/assets/images/project_edtech_portal_1784816531688.jpg"
  }
];
