const Usuario = require('../models/usuario');

const usuario1 = {
    name: 'Joel',
    address: 'Cabo Verde',
    email: 'joel@gmail.com',
    password: 'secret1',
    type_user: 'cliente'
};
const usuario2 = {
    name: 'Joelson',
    address: 'Cabo Verde',
    email: 'joelson@gmail.com',
    password: 'secret2',
    type_user: 'cliente'
};
const usuario3 = {
    name: 'Alex',
    address: 'Italia',
    email: 'alex@gmail.com',
    password: 'secret3',
    type_user: 'Cliente'
};
const usuario4 = {
    name: 'Zidane',
    address: 'Portugal',
    email: 'zidane@gmail.com',
    password: 'secret4',
    type_user: 'admin'
};
const usuario5 = {
    name: 'Etson',
    address: 'Portugal',
    email: 'etson@gmail.com',
    password: 'secret5',
    type_user: 'admin'
};
const usuario6 = {
    name: 'Denis',
    address: 'Luxemburgo',
    email: 'denis@gmail.com',
    password: 'secret6',
    type_user: 'cliente'
};
const usuario7 = {
    name: 'Denilson',
    address: 'Portugal',
    email: 'denilson@gmail.com',
    password: 'secret7',
    type_user: 'secret7'
};
const usuario8 = {
    name: 'Julio',
    address: 'França',
    email: 'julio@gmail.com',
    password: 'secret8',
    type_user: 'cliente'
};
const usuario9 = {
    name: 'Juelma',
    address: 'Brasil',
    email: 'juelma@gmail.com',
    password: 'secret9',
    type_user: 'cliente'
};
const usuario10 = {
    name: 'Sofia',
    address: 'Espanha',
    email: 'sofia@gmail.com',
    password: 'secret10',
    type_user: 'cliente'
};

Usuario.create(novoUsuario)
    .then(usuarioCriado => {
        console.log('Usuario criado com sucesso:', usuarioCriado);
    })
    .catch(erro => {
        console.error('Erro ao criar usuario:', erro)
    });