# 🕹️ Jogo "Não Pode"

Uma versão digital do clássico jogo de palavras, onde você precisa fazer seus amigos adivinharem uma palavra sem usar as palavras proibidas!

## 🎯 Sobre o Jogo

No jogo "Não Pode", você recebe uma **palavra principal** e deve explicá-la aos outros jogadores **sem usar as 5 palavras proibidas** listadas no cartão. É divertido, desafiador e perfeito para jogar com amigos e família!

## ✨ Funcionalidades

- 🃏 **20 cartas** com palavras variadas
- ⏱️ **Cronômetro configurável** (15s a 180s)
- 🎨 **Interface limpa e intuitiva**
- 📱 **Design responsivo** para mobile e desktop
- 🔄 **Sistema de embaralhamento** - cartas não se repetem
- 🎉 **Feedback visual** quando o tempo acaba
- 📖 **Tela de regras** completa

## 🚀 Como Executar

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Instalação

\`\`\`bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
\`\`\`

O jogo estará disponível em \`http://localhost:5173\`

## 🎮 Como Jogar

1. **Tela Inicial**: Configure o tempo por rodada (padrão: 60 segundos)
2. **Clique em "Iniciar Jogo"** para começar
3. **Explique a palavra principal** sem usar as 5 palavras proibidas marcadas com 🚫
4. **Use o cronômetro** (opcional) para adicionar pressão ao jogo
5. **Clique em "Nova Carta"** quando conseguir ou desistir
6. **Complete todas as cartas** do baralho!

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Router** - Navegação entre páginas
- **TailwindCSS** - Estilização
- **Google Fonts** - Poppins e Inter

## 📦 Estrutura do Projeto

\`\`\`
src/
├── components/        # Componentes reutilizáveis
│   ├── Button.tsx    # Botão customizado
│   ├── Card.tsx      # Exibição da carta
│   └── Timer.tsx     # Cronômetro circular
├── data/
│   └── cards.ts      # Dados das cartas
├── hooks/
│   └── useGameLogic.ts  # Lógica do jogo
├── pages/            # Páginas da aplicação
│   ├── Home.tsx      # Tela inicial
│   ├── Game.tsx      # Tela do jogo
│   └── Rules.tsx     # Regras do jogo
├── App.tsx           # Configuração de rotas
└── main.tsx          # Entry point
\`\`\`

## 📝 Adicionar Novas Cartas

Para adicionar mais cartas ao jogo, edite o arquivo \`src/data/cards.ts\`:

\`\`\`typescript
{
  word: "Sua Palavra",
  forbidden: ["proibida1", "proibida2", "proibida3", "proibida4", "proibida5"],
}
\`\`\`

## 🚀 Build para Produção

\`\`\`bash
# Criar build otimizado
npm run build

# Testar build localmente
npm run preview
\`\`\`

## �� Scripts Disponíveis

- \`npm run dev\` - Inicia servidor de desenvolvimento
- \`npm run build\` - Cria build de produção
- \`npm run preview\` - Preview do build de produção
- \`npm run lint\` - Executa o linter

## 🎯 Próximas Funcionalidades (Roadmap)

- [ ] Sistema de pontuação
- [ ] Modo escuro
- [ ] Categorias de cartas
- [ ] Baralhos personalizados
- [ ] Efeitos sonoros
- [ ] PWA (modo offline)
- [ ] Compartilhamento de cartas

## 📱 Deploy

O projeto está configurado para deploy fácil em:
- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**

---

**Divirta-se jogando! 🎉**
