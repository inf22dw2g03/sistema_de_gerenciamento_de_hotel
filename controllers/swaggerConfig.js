const config =  require('../db/config/config');
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: { 
      title: "inf22dw2g03",
      version: "1.0.0",
      description: "Gerenciamento de hotel ",
      contact: { name: "INF22DWG03" },
    },
  };
  
const options = {
    swaggerDefinition,
    apis: ["./docs/**/*.yaml"],
  };
  
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;