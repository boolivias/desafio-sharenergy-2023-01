# Executação

## Requisitos

1. NodeJS
2. Yarn ou NPM
3. Banco de dados MYSQL

## Como executar

1. Instale os requisitos executando o comando `yarn install` ou `npm install`
2. Configure a URL do banco de dados no arquivo .env (veja exemplos [aqui](https://www.prisma.io/docs/reference/database-reference/connection-urls))
3. Gere uma hash para ser utilizada no JWT_SECRET e coloque no arquivo .env
4. Execute o comando `npx prisma migrate dev` para criação das tabelas do banco de dados
5. Execute o comando `npx prisma db seed` para inserir os dados inicias no banco
6. Execute o comando `yarn dev` ou `npm run dev`
