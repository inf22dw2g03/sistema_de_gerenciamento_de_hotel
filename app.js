const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./db/models'); //testar conecção     

app.use(express.json()); // formato que quero receber 

const usuario = require('./controllers/usuario');

app.use('/',usuario);

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});

