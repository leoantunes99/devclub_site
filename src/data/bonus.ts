export interface Bonus {
  icon: string;
  title: string;
  badge: string;
  desc: string;
  topics: string[];
}

export const bonusList: Bonus[] = [
  {
    icon: "globe",
    title: "Inglês para Programadores",
    badge: "Carreira Internacional",
    desc: "Prepare-se para conquistar vagas remotas no exterior e ganhar em dólar ou euro. Foque no vocabulário técnico e conversação corporativa real.",
    topics: ["Simulações de Entrevista", "Standup Meetings em Inglês", "Termos Técnicos e Docs"]
  },
  {
    icon: "dollar-sign",
    title: "Finanças e Investimentos",
    badge: "Liberdade Financeira",
    desc: "Não basta ganhar muito, você precisa saber gerir. Aprenda a organizar suas finanças, investir de forma segura e acelerar sua independência financeira.",
    topics: ["Organização de Orçamento", "Introdução a Ativos Globais", "Tributação & Investimento"]
  },
  {
    icon: "brain-circuit",
    title: "Mindset & Produtividade",
    badge: "Soft Skills",
    desc: "Gerencie a ansiedade, supere a síndrome do impostor e domine rotinas de alta performance para render o dobro trabalhando de forma saudável.",
    topics: ["Técnicas de Foco e Pomodoro", "Controle de Ansiedade", "Planejamento Consistente"]
  },
  {
    icon: "award",
    title: "LinkedIn & Atração Ativa",
    badge: "Networking",
    desc: "Descubra como estruturar seu LinkedIn e GitHub para fazer os recrutadores nacionais e globais procurarem por você, sem precisar mandar currículo.",
    topics: ["SEO de Palavras-Chave", "Abordagem a Headhunters", "Atração Passiva & Posts"]
  }
];
