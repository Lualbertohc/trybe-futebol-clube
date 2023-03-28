# imagem base node:16.14-alpine
FROM node:16.14-alpine

# diretório de trabalho /app-frontend
WORKDIR /app-frontend

# copia package.json e package-lock.json para o container
COPY package* ./

# instala as dependências Node
RUN npm install

# copia o restante dos arquivos da aplicação para o container
COPY . .

# aplicação expõe a porta 3000
EXPOSE 3000

# Configuração de iniciação
CMD [ "npm", "start" ]