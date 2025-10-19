# Etapa 1: build da aplicação  
FROM node:20-alpine AS build

WORKDIR /app

# Instalar dependências primeiro
COPY package.json package-lock.json ./
RUN npm install

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Etapa 2: servidor Nginx para servir os arquivos estáticos
FROM nginx:stable-alpine

# Remove o conteúdo padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia o build gerado pelo Vite
COPY --from=build /app/dist /usr/share/nginx/html

# Copia configuração customizada do Nginx (necessária se usar React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]