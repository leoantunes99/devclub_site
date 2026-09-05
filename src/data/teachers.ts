export interface Teacher {
  initials: string;
  name: string;
  role: string;
  avatarBg: string;
  image: string;
}

export const teachersList: Teacher[] = [
  { initials: "RM", name: "Rodolfo Mori", role: "Fundador & Dev Sênior", avatarBg: "bg-gradient-to-tr from-brand-green to-teal-500", image: "/assets/images/avatar_rodolfo_mori_1784817256472.jpg" },
  { initials: "FE", name: "Fernanda", role: "Tech Recruiter & Carreira", avatarBg: "bg-gradient-to-tr from-purple-500 to-indigo-600", image: "/assets/images/avatar_fernanda_1784817268009.jpg" },
  { initials: "AG", name: "Agustinho", role: "Especialista Cloud & DevOps", avatarBg: "bg-gradient-to-tr from-blue-500 to-cyan-400", image: "/assets/images/avatar_agustinho_1784817279438.jpg" },
  { initials: "HE", name: "Henrique", role: "Especialista Mobile", avatarBg: "bg-gradient-to-tr from-orange-400 to-rose-500", image: "/assets/images/avatar_henrique_1784817290051.jpg" },
  { initials: "MA", name: "Márcio", role: "Especialista em IA", avatarBg: "bg-gradient-to-tr from-pink-500 to-purple-600", image: "/assets/images/avatar_marcio_1784817304548.jpg" },
  { initials: "JU", name: "Juliana", role: "Especialista Back End", avatarBg: "bg-gradient-to-tr from-emerald-400 to-lime-500", image: "/assets/images/avatar_juliana_1784817315084.jpg" },
  { initials: "MT", name: "Mateus", role: "Coordenador de Suporte", avatarBg: "bg-gradient-to-tr from-indigo-500 to-pink-500", image: "/assets/images/avatar_mateus_1784817326393.jpg" }
];
