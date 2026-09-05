export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
}

export const lessonsData: Lesson[] = [
  { id: "les-01", title: "Módulo 01 • Primeiros Passos e Estruturas de Pastas", duration: "12:15", isCompleted: true },
  { id: "les-02", title: "Módulo 01 • Lógica de Programação com Variáveis", duration: "22:40", isCompleted: true },
  { id: "les-03", title: "Módulo 02 • Loops, Funções e Arrays no JavaScript", duration: "18:50", isCompleted: true },
  { id: "les-04", title: "Módulo 02 • Manipulação de DOM para interfaces reais", duration: "25:10", isCompleted: false },
  { id: "les-05", title: "Módulo 03 • Introdução ao React & Componentes Reutilizáveis", duration: "32:00", isCompleted: false },
  { id: "les-06", title: "Módulo 04 • Integrando APIs externas de Inteligência Artificial", duration: "28:15", isCompleted: false }
];
