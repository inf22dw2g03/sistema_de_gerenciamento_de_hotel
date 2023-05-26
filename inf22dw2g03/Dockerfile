# Use a imagem base do Node.js
FROM node:14

# Configura o diretório de trabalho no contêiner
WORKDIR /app

# Copia o arquivo package.json para o diretório de trabalho
COPY package.json .

# Instala as dependências do aplicativo
RUN npm install

# Copia todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Expõe a porta do aplicativo
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
