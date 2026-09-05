export interface Testimonial {
  name: string;
  avatarInitials: string;
  avatarBg: string;
  avatarImage: string;
  formerJob: string;
  currentJob: string;
  salaryIncrease: string;
  text: string;
}

export const testimonialsData: Testimonial[] = [
  {
    name: "Guilherme Santos",
    avatarInitials: "GS",
    avatarBg: "bg-gradient-to-br from-emerald-500 to-teal-700",
    avatarImage: "/assets/images/avatar_gabriel_1784817350711.jpg",
    formerJob: "Atendente de Telemarketing",
    currentJob: "Dev Full Stack Senior @ Loft",
    salaryIncrease: "6.8x maior",
    text: "Eu estava cansado da rotina exaustiva do telemarketing e não via saída. Com as formações do DevClub e o suporte constante da comunidade, eu saí do zero absoluto ao meu primeiro emprego em apenas 7 meses. Hoje sou sênior e mudei totalmente de vida."
  },
  {
    name: "Mariana Alencar",
    avatarInitials: "MA",
    avatarBg: "bg-gradient-to-br from-purple-500 to-indigo-700",
    avatarImage: "/assets/images/avatar_mariana_1784817362050.jpg",
    formerJob: "Vendedora de Loja",
    currentJob: "Dev Frontend @ Nubank",
    salaryIncrease: "4.2x maior",
    text: "Sempre achei que programação fosse coisa de outro mundo. O DevClub tem uma didática perfeita para quem está começar. Fiz o curso, as mentorias semanais me ajudaram a montar meu portfólio de projetos reais e passei na minha primeira entrevista."
  },
  {
    name: "Felipe Oliveira",
    avatarInitials: "FO",
    avatarBg: "bg-gradient-to-br from-amber-500 to-orange-700",
    avatarImage: "/assets/images/avatar_felipe_1784817370822.jpg",
    formerJob: "Entregador",
    currentJob: "AI & Automation Dev @ TechForge",
    salaryIncrease: "5.5x maior",
    text: "Quando lançaram o módulo de inteligência artificial e automações, decidi focar 100% nisso. No MBA, construí agentes inteligentes reais que automatizavam processos para clientes. Hoje atuo desenvolvendo soluções com IA e n8n."
  }
];
