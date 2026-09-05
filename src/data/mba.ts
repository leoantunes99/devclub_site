export interface MBAFeature {
  icon: string;
  title: string;
  desc: string;
  badge: string;
}

export const mbaFeaturesList: MBAFeature[] = [
  {
    icon: "bot",
    title: "Agentes Autônomos de IA",
    desc: "Aprenda a arquitetar sistemas multi-agentes inteligentes que tomam decisões, resolvem problemas e executam tarefas complexas sem supervisão constante.",
    badge: "Tendência"
  },
  {
    icon: "cpu",
    title: "Orquestração de LLMs",
    desc: "Domine a engenharia de prompts, fine-tuning e integração com modelos de fronteira (Gemini, OpenAI, Claude) para criar soluções corporativas sob medida.",
    badge: "Avançado"
  },
  {
    icon: "zap",
    title: "Automações e Fluxos Inteligentes",
    desc: "Conecte ferramentas, crie pipelines de dados robustos e automatize processos de ponta a ponta integrando ferramentas como n8n, Make e APIs personalizadas.",
    badge: "Produtividade"
  },
  {
    icon: "graduation-cap",
    title: "Título de Especialista / MBA",
    desc: "Formação formal de pós-graduação reconhecida pelas principais instituições, conferindo autoridade acadêmica e alta valorização para cargos de liderança tech.",
    badge: "MEC Oficial"
  }
];
