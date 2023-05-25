# Dockerfile para a aplicação Node.js

# Use uma imagem base adequada para a sua aplicação Node.js
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie o código-fonte da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação irá escutar
EXPOSE 3000

# Inicie a aplicação
CMD [ "npm", "start" ]
