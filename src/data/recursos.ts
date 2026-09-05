export interface Recurso {
  icon: string;
  title: string;
  desc: string;
  badge: string;
}

export const recursosList: Recurso[] = [
  {
    icon: "user-check",
    title: "Recrutadora tech parceira",
    desc: "Sua vitrine profissional otimizada. Temos uma recrutadora sênior na comunidade que revisa seu LinkedIn e currículo e conduz simulações semanais de entrevistas de emprego de forma individualizada.",
    badge: "Empregabilidade"
  },
  {
    icon: "heart",
    title: "Suporte emocional de terapeuta",
    desc: "Cuidamos de você. Uma psicóloga corporativa realiza sessões em grupo semanais focadas em controle da ansiedade, superação da síndrome do impostor e manutenção do foco saudável durante os estudos.",
    badge: "Soft Skills"
  },
  {
    icon: "message-square",
    title: "Plantão de suporte de domingo a domingo",
    desc: "O melhor suporte do país. Nosso time de tutores experientes está online de domingo a domingo no Discord para tirar dúvidas técnicas do seu código via chamada de áudio e compartilhamento de tela.",
    badge: "Humanizado"
  },
  {
    icon: "cpu",
    title: "Suporte com agentes de IA 24h",
    desc: "Atendimento instantâneo. Nossos robôs assistentes integrados à plataforma revisam seu código em segundos e respondem suas dúvidas sobre programação e infraestrutura em tempo real.",
    badge: "Tecnologia"
  },
  {
    icon: "briefcase",
    title: "Canal de vagas exclusivo",
    desc: "Seu atalho para o mercado. Temos parcerias com mais de 40 empresas nacionais e internacionais que publicam vagas de estágio e nível júnior exclusivas para nossos alunos no Discord.",
    badge: "Carreira"
  },
  {
    icon: "trending-up",
    title: "Mentoria de investimentos e finanças",
    desc: "Gerencie o seu patrimônio. Módulos exclusivos ministrados por profissionais do mercado financeiro para você aprender a investir de forma segura o alto salário que vai conquistar em tecnologia.",
    badge: "Educação Financeira"
  }
];
