const config =  require('../db/config/config');
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: { 
      title: "API de Gerenciamento de Reserva de Hotel",
      version: "1.0.0",
      description: "Uma API para gerenciar reservas de hotéis",
      contact: { name: "inf22dw2g03" },
    },
    servers: [ {url: "http://localhost:" + config.PORT,},],
    components: {
      securitySchemes: {
        basicAuth: { type: "http", scheme: "basic", },
      },
    },
    security: [{ basicAuth: [] }],
  };
  
const options = {
    swaggerDefinition,
    apis: ["../docs/**/*.yaml"],
  };
  
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;