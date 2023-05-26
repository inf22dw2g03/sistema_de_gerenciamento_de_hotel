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
<<<<<<< HEAD:inf22dw2g03/controllers/swaggerConfig.js
    servers: [ {url: "http://localhost:3000"}],
=======
>>>>>>> 8fbf82ef49cad1059d73e47598618903adcbf77c:controllers/swaggerConfig.js
  };
  
const options = {
    swaggerDefinition,
    apis: ["./docs/**/*.yaml"],
  };
  
const swaggerSpec = swaggerJSDoc(options);

<<<<<<< HEAD:inf22dw2g03/controllers/swaggerConfig.js
module.exports = swaggerSpec; 
=======
module.exports = swaggerSpec;
>>>>>>> 8fbf82ef49cad1059d73e47598618903adcbf77c:controllers/swaggerConfig.js
