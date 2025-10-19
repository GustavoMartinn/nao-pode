export type Card = {
  word: string;
  forbidden: string[];
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard' | 'chaotic';
};

export const cards: Card[] = [
  {
    word: "Praia",
    forbidden: ["mar", "areia", "sol", "verão", "calor"],
  },
  {
    word: "Cachorro",
    forbidden: ["animal", "pet", "latir", "gato", "osso"],
  },
  {
    word: "Pizza",
    forbidden: ["queijo", "massa", "forno", "comida", "tomate"],
  },
  {
    word: "Futebol",
    forbidden: ["bola", "gol", "campo", "jogador", "esporte"],
  },
  {
    word: "Livro",
    forbidden: ["ler", "página", "papel", "história", "texto"],
  },
  {
    word: "Carro",
    forbidden: ["veículo", "motor", "roda", "dirigir", "estrada"],
  },
  {
    word: "Café",
    forbidden: ["bebida", "manhã", "xícara", "quente", "cafeína"],
  },
  {
    word: "Cinema",
    forbidden: ["filme", "tela", "pipoca", "sessão", "sala"],
  },
  {
    word: "Escola",
    forbidden: ["professor", "aluno", "aula", "estudar", "ensino"],
  },
  {
    word: "Computador",
    forbidden: ["teclado", "mouse", "tela", "digital", "máquina"],
  },
  {
    word: "Telefone",
    forbidden: ["celular", "ligar", "chamar", "aparelho", "número"],
  },
  {
    word: "Música",
    forbidden: ["som", "cantar", "melodia", "ritmo", "nota"],
  },
  {
    word: "Relógio",
    forbidden: ["hora", "tempo", "ponteiro", "pulso", "segundos"],
  },
  {
    word: "Chocolate",
    forbidden: ["doce", "cacau", "barra", "sobremesa", "açúcar"],
  },
  {
    word: "Avião",
    forbidden: ["voar", "aeroporto", "asa", "piloto", "céu"],
  },
  {
    word: "Médico",
    forbidden: ["hospital", "doente", "remédio", "consulta", "saúde"],
  },
  {
    word: "Guitarra",
    forbidden: ["instrumento", "cordas", "música", "tocar", "rock"],
  },
  {
    word: "Floresta",
    forbidden: ["árvore", "mata", "verde", "natureza", "madeira"],
  },
  {
    word: "Sapato",
    forbidden: ["pé", "calçado", "andar", "tênis", "meia"],
  },
  {
    word: "Chuva",
    forbidden: ["água", "molhar", "guarda-chuva", "nuvem", "tempo"],
  },
];

// Importar todas as cartas dos volumes
import { allCards } from './allCards';
import { volume3Cards } from './volume3Cards';

// Exportar array combinado com todas as cartas
export const allGameCards: Card[] = [
  ...cards,
  ...allCards,
  ...volume3Cards,
];

// Função para obter cartas por categoria
export const getCardsByCategory = (category: string): Card[] => {
  return allGameCards.filter(card => card.category === category);
};

// Função para obter cartas por dificuldade
export const getCardsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard' | 'chaotic'): Card[] => {
  return allGameCards.filter(card => card.difficulty === difficulty);
};

// Obter todas as categorias disponíveis
export const getCategories = (): string[] => {
  const categories = new Set(allGameCards.map(card => card.category).filter(Boolean));
  return Array.from(categories) as string[];
};
