export interface Leader {
  rank: number;
  name: string;
  initials: string;
  xp: string;
  level: string;
  avatarBg: string;
  image: string;
}

export const leadersData: Leader[] = [
  { rank: 1, name: "Leonardo Antunes", initials: "LA", xp: "4.250 XP", level: "Nível 12", avatarBg: "bg-brand-purple", image: "/assets/images/avatar_leonardo_1784817337734.jpg" },
  { rank: 2, name: "Fernanda Ribeiro", initials: "FR", xp: "3.980 XP", level: "Nível 11", avatarBg: "bg-gradient-to-tr from-brand-green to-teal-500", image: "/assets/images/avatar_fernanda_1784817268009.jpg" },
  { rank: 3, name: "Augusto César", initials: "AC", xp: "3.810 XP", level: "Nível 10", avatarBg: "bg-blue-600", image: "/assets/images/avatar_agustinho_1784817279438.jpg" },
  { rank: 4, name: "Juliana Santos", initials: "JS", xp: "3.540 XP", level: "Nível 9", avatarBg: "bg-orange-500", image: "/assets/images/avatar_juliana_1784817315084.jpg" },
  { rank: 5, name: "Matheus Almeida", initials: "MA", xp: "3.200 XP", level: "Nível 8", avatarBg: "bg-pink-500", image: "/assets/images/avatar_mateus_1784817326393.jpg" },
  { rank: 6, name: "Beatriz Costa", initials: "BC", xp: "3.050 XP", level: "Nível 8", avatarBg: "bg-purple-600", image: "/assets/images/avatar_beatriz_1784817717362.jpg" },
  { rank: 7, name: "Gabriel Silva", initials: "GS", xp: "2.890 XP", level: "Nível 7", avatarBg: "bg-teal-600", image: "/assets/images/avatar_gabriel_1784817350711.jpg" },
  { rank: 8, name: "Mariana Alencar", initials: "MA", xp: "2.740 XP", level: "Nível 7", avatarBg: "bg-indigo-600", image: "/assets/images/avatar_mariana_1784817362050.jpg" },
  { rank: 9, name: "Felipe Oliveira", initials: "FO", xp: "2.510 XP", level: "Nível 6", avatarBg: "bg-amber-600", image: "/assets/images/avatar_felipe_1784817370822.jpg" },
  { rank: 10, name: "Camila Duarte", initials: "CD", xp: "2.380 XP", level: "Nível 6", avatarBg: "bg-rose-600", image: "/assets/images/avatar_camila_1784817732656.jpg" }
];
