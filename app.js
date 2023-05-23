const express = require('express');
const cors = require('cors');
const db = require('./db/models');
const config =  require('./db/config/config');  
const controllers = require('./routes');
const usuarioController = require('./routes/usuario');
const hotel = require('./routes/hotel');
const quartos = require('./routes/quartos');
const reserva=require('./routes/reserva');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./controllers/SwaggerSpecs');
const auth = require('./controllers/basicSecurity');

const app = express();//middleware 

app.use(cors());
app.use(express.json()); // Substitui o uso do bodyParser

// Rotas
app.use('/usuario',usuarioController ); // Exemplo de rota para o controller "usuario"
app.use('/secured', auth, controllers.secured); // Rota protegida por autenticação
app.use('/hotel', hotel);
app.use('/quarto', quartos);
app.use('/reserva', reserva);

// Documentação Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(config.PORT, function () {
  console.log(`app correndo na  ${config.HOST}:${config.PORT}`);
});

