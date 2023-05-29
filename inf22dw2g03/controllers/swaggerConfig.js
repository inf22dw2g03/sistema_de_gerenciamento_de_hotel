const config =  require('../db/config/config');
const swaggerJSDoc = require("swagger-jsdoc");
const expressJWT = require('express-jwt');

const swaggerDefinition = {
    openapi: "3.0.0",
    info: { 
      title: "inf22dw2g03",
      version: "1.0.0",
      description: "Gerenciamento de hotel ",
      contact: { name: "INF22DWG03" },
    },
    servers: [ {url: "http://localhost:3000"}],
    components: {
      securitySchemes: {
        JWT: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ JWT: []}],
  };
const options = {
    swaggerDefinition,
    apis: ["./docs/**/*.yaml"],
    // security: [
    //   {
    //     JWT: [], // Nome do esquema de autenticação
    //   },
    // ],
    // securityDefinitions: {
    //   JWT: {
    //     type: "apiKey",
    //     in: "header",
    //     name: "Authorization",
    //     description: 'Bearer token',
    //   },
    // },
  };
  
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec; 