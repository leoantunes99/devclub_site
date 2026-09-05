export interface Trilha {
  title: string;
  stack: string;
  badge: string;
  desc: string;
  icon: string;
  image: string;
  duration: string;
  color: string;
  curriculum: string[];
}

export const trilhasList: Trilha[] = [
  {
    title: "Programação Front End",
    stack: "(React)",
    badge: "Mais Vagas",
    desc: "Domine a biblioteca líder do desenvolvimento web mundial. Aprenda a criar interfaces interativas de alta fidelidade, rápidas e responsivas utilizando React, TypeScript e Tailwind CSS.",
    icon: "layout",
    image: "/assets/images/front_end_react_1784629227743.jpg",
    duration: "6 meses • 180h",
    color: "from-brand-green/10 to-teal-900/10 border-brand-green/20 text-brand-green",
    curriculum: [
      "Fundamentos de HTML5, CSS3 e JS",
      "React Hooks & State Management",
      "TypeScript Avançado",
      "Tailwind CSS & Design Systems",
      "Next.js & Server Components"
    ]
  },
  {
    title: "Programação Back End",
    stack: "(Node)",
    badge: "Alta Demanda",
    desc: "Torne-se o motor de sistemas escaláveis corporativos. Aprenda a projetar APIs RESTful e GraphQL robustas, gerenciar bancos de dados eficientes, lidar com Docker e hospedar na nuvem.",
    icon: "database",
    image: "/assets/images/back_end_node_1784629238440.jpg",
    duration: "6 meses • 180h",
    color: "from-brand-purple/10 to-indigo-950/10 border-brand-purple/20 text-brand-purple",
    curriculum: [
      "APIs escaláveis em Node.js & Express",
      "Bancos Relacionais (PostgreSQL)",
      "Containers e Ambientes Docker",
      "Autenticação & Segurança (JWT, OAuth)",
      "Testes Unitários com Jest & NestJS"
    ]
  },
  {
    title: "Programação Full Stack",
    stack: "(JavaScript)",
    badge: "Mais Completo",
    desc: "O desenvolvedor definitivo cobiçado por empresas nacionais e internacionais. Una o poder do React no front e Node.js no back-end em uma única linguagem, dominando o ciclo completo.",
    icon: "globe",
    image: "/assets/images/full_stack_js_1784629250420.jpg",
    duration: "10 meses • 300h",
    color: "from-emerald-950/15 to-teal-950/10 border-brand-green/30 text-brand-green",
    curriculum: [
      "Lógica com JavaScript Moderno",
      "Desenvolvimento Front End com React",
      "Sistemas e Bancos no Back End",
      "Arquiteturas Serverless",
      "Deploy na Nuvem (AWS & Vercel)"
    ]
  },
  {
    title: "Programação Mobile",
    stack: "(React Native)",
    badge: "Salários Premium",
    desc: "Crie aplicativos nativos incríveis para Android e iOS simultaneamente. Domine Expo, consumo de recursos nativos dos smartphones (câmera, gps) e publicação nas lojas oficiais.",
    icon: "smartphone",
    image: "/assets/images/mobile_react_native_1784629262550.jpg",
    duration: "4 meses • 120h",
    color: "from-amber-950/10 to-orange-950/10 border-amber-500/20 text-amber-500",
    curriculum: [
      "Configuração React Native & Expo",
      "Estilização & Componentes de Tela",
      "Navegação por Abas & Stacks",
      "Consumo de APIs e Storage Local",
      "Build e Lançamento (Play Store & App Store)"
    ]
  },
  {
    title: "Análise de Dados",
    stack: "(Power BI)",
    badge: "Inteligência Estratégica",
    desc: "Transforme grandes volumes de dados brutos em inteligência para tomada de decisões executivas. Domine ETL, modelagem avançada, linguagem DAX e dashboards interativos.",
    icon: "bar-chart-2",
    image: "/assets/images/data_power_bi_1784629274470.jpg",
    duration: "4 meses • 120h",
    color: "from-blue-950/10 to-cyan-950/10 border-blue-500/20 text-blue-400",
    curriculum: [
      "Cultura de Business Intelligence",
      "Bancos de Dados & Queries SQL",
      "Modelagem de Dados & DAX",
      "Design de Dashboards de Alto Impacto",
      "KPIs de Negócio & Compartilhamento"
    ]
  },
  {
    title: "Gestor de IA e Automações",
    stack: "(Claude, N8N)",
    badge: "Tendência Global",
    desc: "Arquitete a eficiência operacional do futuro. Crie robôs de automação inteligente de processos e interligue modelos generativos avançados (Claude, GPT) via n8n sem depender de código.",
    icon: "cpu",
    image: "/assets/images/ai_n8n_claude_1784629288359.jpg",
    duration: "6 meses • 180h",
    color: "from-purple-950/20 to-indigo-950/25 border-brand-purple/30 text-brand-purple",
    curriculum: [
      "Prompt Engineering com Claude AI",
      "Design de Fluxos Avançados no n8n",
      "Integração e Orquestração de APIs",
      "Criação de Agentes Autônomos de IA",
      "Métricas de Performance & Custos"
    ]
  }
];
