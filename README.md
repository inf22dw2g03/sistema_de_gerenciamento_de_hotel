sequelize é uma biblioteca javascript que facilida gerenciamento do banco de dados sql 
### npm install --save sequelize

dependencia dependencia de base de datos
### npm install --save mysql2

sequelice-cli para criar modelos configurações e arquivos de migração para bancos de dados 
### npm install --save-dev sequelize-cli

iniciar o sequelize-cli para criar arquivos de config 

### npx sequelize-cli init 

rodar o projeto 
### node app.js


manipular variavel de ambiente 
### npm install --save dotenv 

crianção do migration 

migrations -> é uma forma de partilhar e manipular base de dados 
### npx sequelize-cli migration:generate --name create-nome

para acrecentar coluna na tabela 
### npx sequelize-cli migration:generate --name alter-nome da migrations 

para exucutar migrations
### npx sequelize-cli db:migrate

Rollback migration -> permite desfazer a migrations feito na alteração db 

para executar 
### npx sequelize-cli db:migrate:undo -- nome da migrations


modules -> tem o objetivo de manipular os registos juntamente com a base de dados 

para executar  
criando modoles usuario 
### npx sequelize-cli model:generate --name usuario --attributes name:string,address:string,email:string,password:string,type_user:string

criando modoles hotel
### npx sequelize-cli model:generate --reserva --attributes name:string,address:string,email:string,password:string,type_user:string



controllers -> gerencia as requisições ,rotas e urls, entre outras funcionalidade 


 