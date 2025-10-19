import type { Card } from './cards';

// 🎬 FILMES E SÉRIES
export const filmesCards: Card[] = [
  { word: "Vingadores", forbidden: ["heróis", "Marvel", "Thanos", "filme", "guerra"], category: "Filmes" },
  { word: "Batman", forbidden: ["morcego", "Gotham", "herói", "Robin", "capa"], category: "Filmes" },
  { word: "Harry Potter", forbidden: ["bruxo", "varinha", "magia", "Hogwarts", "feitiço"], category: "Filmes" },
  { word: "Star Wars", forbidden: ["Jedi", "força", "espaço", "sabre", "Darth"], category: "Filmes" },
  { word: "Frozen", forbidden: ["Elsa", "Anna", "gelo", "cantar", "princesa"], category: "Filmes" },
  { word: "Jurassic Park", forbidden: ["dinossauro", "ilha", "parque", "perigo", "fósseis"], category: "Filmes" },
  { word: "Matrix", forbidden: ["Neo", "realidade", "máquina", "código", "vermelho"], category: "Filmes" },
  { word: "Toy Story", forbidden: ["brinquedo", "Woody", "Buzz", "criança", "Pixar"], category: "Filmes" },
  { word: "Stranger Things", forbidden: ["monstro", "Eleven", "Netflix", "cidade", "portal"], category: "Filmes" },
  { word: "O Rei Leão", forbidden: ["Simba", "leão", "Disney", "savana", "Mufasa"], category: "Filmes" },
  { word: "Titanic", forbidden: ["navio", "afundar", "iceberg", "casal", "Jack"], category: "Filmes" },
  { word: "Pantera Negra", forbidden: ["Wakanda", "rei", "Marvel", "herói", "África"], category: "Filmes" },
  { word: "Shrek", forbidden: ["ogro", "princesa", "burro", "pântano", "verde"], category: "Filmes" },
  { word: "Homem-Aranha", forbidden: ["teia", "Peter", "herói", "cidade", "parede"], category: "Filmes" },
  { word: "Piratas do Caribe", forbidden: ["navio", "mar", "Jack Sparrow", "tesouro", "pirata"], category: "Filmes" },
];

// 💻 INTERNET E TECNOLOGIA
export const internetCards: Card[] = [
  { word: "Google", forbidden: ["pesquisa", "site", "internet", "buscar", "navegador"], category: "Internet" },
  { word: "Instagram", forbidden: ["foto", "rede", "seguidores", "postar", "stories"], category: "Internet" },
  { word: "TikTok", forbidden: ["vídeo", "curto", "dancinha", "rede", "viral"], category: "Internet" },
  { word: "YouTube", forbidden: ["vídeo", "canal", "assistir", "criador", "inscrito"], category: "Internet" },
  { word: "Twitter", forbidden: ["tweet", "rede", "post", "Elon Musk", "X"], category: "Internet" },
  { word: "Hacker", forbidden: ["computador", "invadir", "sistema", "senha", "segurança"], category: "Internet" },
  { word: "Email", forbidden: ["mensagem", "caixa", "enviar", "correio", "eletrônico"], category: "Internet" },
  { word: "Download", forbidden: ["arquivo", "internet", "baixar", "computador", "salvar"], category: "Internet" },
  { word: "Upload", forbidden: ["enviar", "arquivo", "internet", "nuvem", "servidor"], category: "Internet" },
  { word: "VPN", forbidden: ["internet", "segurança", "IP", "esconder", "rede"], category: "Internet" },
  { word: "Senha", forbidden: ["acesso", "digitar", "login", "segurança", "conta"], category: "Internet" },
  { word: "Notificação", forbidden: ["celular", "mensagem", "alerta", "som", "aplicativo"], category: "Internet" },
  { word: "Emoji", forbidden: ["rosto", "expressão", "celular", "mensagem", "símbolo"], category: "Internet" },
  { word: "Link", forbidden: ["internet", "clicar", "site", "endereço", "URL"], category: "Internet" },
  { word: "PDF", forbidden: ["arquivo", "documento", "formato", "Adobe", "ler"], category: "Internet" },
];

// 🎶 MÚSICA E CULTURA POP
export const musicaCards: Card[] = [
  { word: "Rock", forbidden: ["guitarra", "banda", "som", "música", "pesado"], category: "Música" },
  { word: "Samba", forbidden: ["Brasil", "carnaval", "ritmo", "dança", "batucada"], category: "Música" },
  { word: "Pop", forbidden: ["música", "famoso", "rádio", "artista", "sucesso"], category: "Música" },
  { word: "Rap", forbidden: ["rima", "batida", "hip-hop", "cantar", "letra"], category: "Música" },
  { word: "Piano", forbidden: ["instrumento", "tecla", "som", "música", "tocar"], category: "Música" },
  { word: "Violão", forbidden: ["corda", "tocar", "música", "acústico", "instrumento"], category: "Música" },
  { word: "DJ", forbidden: ["música", "festa", "som", "remix", "pista"], category: "Música" },
  { word: "Microfone", forbidden: ["cantar", "som", "voz", "palco", "falar"], category: "Música" },
  { word: "Show", forbidden: ["palco", "música", "artista", "cantar", "público"], category: "Música" },
  { word: "Banda", forbidden: ["grupo", "tocar", "música", "instrumentos", "show"], category: "Música" },
  { word: "Karaoke", forbidden: ["cantar", "microfone", "letra", "música", "bar"], category: "Música" },
  { word: "Spotify", forbidden: ["aplicativo", "música", "playlist", "ouvir", "artista"], category: "Música" },
  { word: "Ritmo", forbidden: ["batida", "som", "música", "movimento", "tempo"], category: "Música" },
  { word: "Funk", forbidden: ["batida", "Brasil", "dançar", "ritmo", "festa"], category: "Música" },
  { word: "Heavy Metal", forbidden: ["guitarra", "bateria", "som", "banda", "grito"], category: "Música" },
];

// 🧙‍♂️ MITOLOGIA E FANTASIA
export const mitologiaCards: Card[] = [
  { word: "Zeus", forbidden: ["raio", "deus", "grego", "trovão", "Olimpo"], category: "Mitologia" },
  { word: "Thor", forbidden: ["martelo", "deus", "trovão", "nórdico", "Asgard"], category: "Mitologia" },
  { word: "Medusa", forbidden: ["cobra", "cabelo", "pedra", "olhar", "grego"], category: "Mitologia" },
  { word: "Hércules", forbidden: ["força", "deus", "herói", "grego", "mitologia"], category: "Mitologia" },
  { word: "Fênix", forbidden: ["fogo", "renascer", "pássaro", "imortal", "cinzas"], category: "Mitologia" },
  { word: "Dragão", forbidden: ["fogo", "voar", "asas", "monstro", "escamas"], category: "Mitologia" },
  { word: "Elfo", forbidden: ["orelha", "floresta", "mágico", "pequeno", "Legolas"], category: "Mitologia" },
  { word: "Mago", forbidden: ["magia", "feitiço", "varinha", "poder", "bruxo"], category: "Mitologia" },
  { word: "Bruxa", forbidden: ["vassoura", "caldeirão", "mágica", "chapéu", "poção"], category: "Mitologia" },
  { word: "Vampiro", forbidden: ["sangue", "noite", "dente", "mordida", "escuro"], category: "Mitologia" },
  { word: "Lobisomem", forbidden: ["lua", "animal", "noite", "transformar", "uivo"], category: "Mitologia" },
  { word: "Anjo", forbidden: ["asa", "céu", "luz", "Deus", "proteger"], category: "Mitologia" },
  { word: "Demônio", forbidden: ["inferno", "mal", "chifre", "fogo", "diabo"], category: "Mitologia" },
  { word: "Centauro", forbidden: ["cavalo", "homem", "corpo", "mitologia", "arqueiro"], category: "Mitologia" },
  { word: "Grifo", forbidden: ["águia", "leão", "criatura", "mitologia", "asas"], category: "Mitologia" },
];

// 🧒 INFANTIL
export const infantilCards: Card[] = [
  { word: "Brinquedo", forbidden: ["criança", "brincar", "loja", "diversão", "presente"], category: "Infantil" },
  { word: "Parquinho", forbidden: ["balanço", "escorregador", "brincar", "criança", "diversão"], category: "Infantil" },
  { word: "Bolo", forbidden: ["aniversário", "doce", "festa", "vela", "chocolate"], category: "Infantil" },
  { word: "Pirulito", forbidden: ["doce", "língua", "chupar", "açúcar", "colorido"], category: "Infantil" },
  { word: "Super-herói", forbidden: ["poder", "capa", "salvar", "vilão", "quadrinho"], category: "Infantil" },
  { word: "Dinossauro", forbidden: ["grande", "antigo", "extinto", "animal", "fóssil"], category: "Infantil" },
  { word: "Princesa", forbidden: ["castelo", "coroa", "realeza", "conto", "príncipe"], category: "Infantil" },
  { word: "Monstro", forbidden: ["medo", "assustar", "bicho", "escuro", "feio"], category: "Infantil" },
  { word: "Ursinho", forbidden: ["pelúcia", "dormir", "brinquedo", "fofinho", "cama"], category: "Infantil" },
  { word: "Picolé", forbidden: ["frio", "sorvete", "verão", "doce", "gelado"], category: "Infantil" },
  { word: "Balão", forbidden: ["ar", "festa", "colorido", "encher", "estourar"], category: "Infantil" },
  { word: "Castelo", forbidden: ["princesa", "rei", "torre", "muralha", "reino"], category: "Infantil" },
  { word: "Fantasia", forbidden: ["roupa", "carnaval", "vestir", "personagem", "festa"], category: "Infantil" },
  { word: "Lancheira", forbidden: ["escola", "comida", "levar", "almoço", "merenda"], category: "Infantil" },
  { word: "Conto de fadas", forbidden: ["história", "princesa", "mágica", "livro", "infantil"], category: "Infantil" },
];

// 📺 ANOS 2000
export const anos2000Cards: Card[] = [
  { word: "MSN", forbidden: ["chat", "mensagem", "online", "emoticon", "status"], category: "Anos 2000" },
  { word: "Orkut", forbidden: ["rede", "scrap", "amigos", "depoimento", "comunidade"], category: "Anos 2000" },
  { word: "Tamagotchi", forbidden: ["bicho", "eletrônico", "cuidar", "brinquedo", "alimentar"], category: "Anos 2000" },
  { word: "CD", forbidden: ["música", "disco", "ouvir", "tocar", "aparelho"], category: "Anos 2000" },
  { word: "DVD", forbidden: ["filme", "assistir", "aparelho", "mídia", "vídeo"], category: "Anos 2000" },
  { word: "Nokia", forbidden: ["celular", "tijolão", "indestrutível", "antigo", "jogo"], category: "Anos 2000" },
  { word: "iPod", forbidden: ["música", "Apple", "tocar", "MP3", "ouvir"], category: "Anos 2000" },
  { word: "The Sims", forbidden: ["jogo", "casa", "personagem", "vida", "computador"], category: "Anos 2000" },
  { word: "PlayStation 2", forbidden: ["console", "jogo", "Sony", "controle", "videogame"], category: "Anos 2000" },
  { word: "MP3 Player", forbidden: ["música", "aparelho", "ouvir", "portátil", "som"], category: "Anos 2000" },
  { word: "Lan house", forbidden: ["internet", "jogar", "computador", "local", "galera"], category: "Anos 2000" },
  { word: "Blog", forbidden: ["internet", "escrever", "post", "diário", "site"], category: "Anos 2000" },
  { word: "Emo", forbidden: ["cabelo", "preto", "chorar", "música", "adolescente"], category: "Anos 2000" },
  { word: "Lost", forbidden: ["ilha", "série", "avião", "mistério", "personagens"], category: "Anos 2000" },
  { word: "Crepúsculo", forbidden: ["vampiro", "lobisomem", "Bella", "Edward", "saga"], category: "Anos 2000" },
];

// 🇧🇷 BRASILZÃO
export const brasilCards: Card[] = [
  { word: "Carnaval", forbidden: ["festa", "samba", "fantasia", "avenida", "desfile"], category: "Brasil" },
  { word: "Feijoada", forbidden: ["comida", "feijão", "prato", "arroz", "carne"], category: "Brasil" },
  { word: "Caipirinha", forbidden: ["bebida", "limão", "cachaça", "álcool", "açúcar"], category: "Brasil" },
  { word: "Pão de queijo", forbidden: ["Minas", "queijo", "café", "comida", "redondo"], category: "Brasil" },
  { word: "Churrasco", forbidden: ["carne", "fogo", "grelha", "domingo", "família"], category: "Brasil" },
  { word: "Samba", forbidden: ["ritmo", "dança", "carnaval", "música", "Brasil"], category: "Brasil" },
  { word: "Forró", forbidden: ["dança", "música", "Nordeste", "casal", "festa"], category: "Brasil" },
  { word: "Guaraná", forbidden: ["refrigerante", "bebida", "doce", "bolha", "Brasil"], category: "Brasil" },
  { word: "Brigadeiro", forbidden: ["doce", "chocolate", "festa", "leite condensado", "enrolar"], category: "Brasil" },
  { word: "Novela", forbidden: ["TV", "ator", "drama", "assistir", "história"], category: "Brasil" },
  { word: "Caipira", forbidden: ["interior", "sotaque", "fazenda", "rural", "roça"], category: "Brasil" },
  { word: "Capoeira", forbidden: ["luta", "dança", "ritmo", "Brasil", "corpo"], category: "Brasil" },
  { word: "Saci", forbidden: ["perna", "mito", "folclore", "cachimbo", "gorro"], category: "Brasil" },
  { word: "Cuscuz", forbidden: ["milho", "Nordeste", "comida", "prato", "farinha"], category: "Brasil" },
  { word: "Copacabana", forbidden: ["praia", "Rio", "areia", "mar", "famosa"], category: "Brasil" },
];

export const volume3Cards: Card[] = [
  ...filmesCards,
  ...internetCards,
  ...musicaCards,
  ...mitologiaCards,
  ...infantilCards,
  ...anos2000Cards,
  ...brasilCards,
];
