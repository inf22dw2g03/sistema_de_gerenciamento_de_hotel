const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./db/models'); //testar conecção  
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const usuarioRouter = require('./controllers/usuario');
const hotelRouter = require('./controllers/hotel');
const quartosRouter = require('./controllers/quartos');
const reservaRouter = require('./controllers/reserva');
const loginRouter = require('./controllers/login');
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./controllers/swaggerConfig");
const {eAdmin}= require('./controllers/auth');

//criar middleware
app.use(cors());
app.use(express.json()); // formato que quero receber 
app.use(bodyParser.json());

//criar rotas api
app.use('/',usuarioRouter);
app.use('/',hotelRouter); 
app.use('/',quartosRouter);
app.use('/',reservaRouter);
app.use("/", loginRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});

