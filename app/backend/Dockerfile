# imagem base node:16.14-alpine
FROM node:16.14-alpine

# diretório de trabalho /app-backend
WORKDIR /app-backend

# copia package.json e package-lock.json para o container
COPY package* ./

# instala as dependências Node
RUN npm install

# copia o restante dos arquivos da aplicação para o container
COPY . .

# aplicação expõe a porta 3001
EXPOSE 3001

# Configuração de iniciação
ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]