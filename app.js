const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./db/models'); //testar conecção     
const swaggerUi = require("swagger-ui-express");
const usuario = require('./controllers/usuario');
const hotel = require('./controllers/hotel');
const quartos = require('./controllers/quartos');
const reserva = require('./controllers/reserva');





app.use(express.json()); // formato que quero receber 
app.use('/',usuario);
app.use('/',hotel);
app.use('/',quartos);
app.use('/',reserva);

app.use(bodyParser.json());


app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});

