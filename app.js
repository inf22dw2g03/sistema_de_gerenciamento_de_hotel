const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./db/models'); //testar conecção     
const usuario = require('./controllers/usuario');
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./controllers/swaggerConfig");

//criar middleware
app.use(cors());
app.use(express.json()); // formato que quero receber 
app.use(bodyParser.json());

//criar rotas api
app.use('/',usuario);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});

