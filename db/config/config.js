// icluir o arquivo com as variaveis do ambientes
const dotenv = require('dotenv');
dotenv.config();

const path = require('path');

// dotenv.config({
//   path: path.resolve(__dirname, '../environment/', `${process.env.NODE_ENVIRONMENT}.env`)
// });
// console.log(path.resolve(__dirname, '../environment/', `${process.env.NODE_ENVIRONMENT}.env`));


// exportar as credenciais do db 
module.exports = {
  NODE_ENV : process.env.NODE_ENV || 'development',
  HOST : process.env.HOST || 'localhost',
  PORT : process.env.PORT || 3000,
 
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_BASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT 
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_BASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_BASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  }
}


