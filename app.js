const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const config =  require('./db/config/config');  
const db = require('./db/models');
const auth = require('./controllers/basicSecurity');
const controllers = require('./routes');
const swaggerSpec = require('./controllers/SwaggerSpecs');

const app = express();//middleware 
app.use(bodyParser.json());

app.use(cors());
app.use(express.json()); 
app.use(bodyParser.json());

// Rotas
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Documentação Swagger
app.use('/usuario', controllers.usuario); // Exemplo de rota para o controller "usuario"
app.use('/secured', auth, controllers.secured); // Rota protegida por autenticação
app.use('/hotel', controllers.hotel);
app.use('/quarto', controllers.quartos);
app.use('/reserva', controllers.reserva);

app.listen(config.PORT, function () {
  console.log(`app correndo na  ${config.HOST}:${config.PORT}`);
});

