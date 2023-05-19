const Quarto = require('../models/quartos');

const primeiroQuarto = {
    hotelId: 1,
    numero_quarto: 22,
    tipo_quart: 'Vip',
    numero_cama: 1,
    preco_noite: 250,
    disponabilidade: 'Livre',
};
const segundoQuarto = {
    hotelId: 2,
    numero_quarto: 21,
    tipo_quart: 'Vip',
    numero_cama: 1,
    preco_noite: 267,
    disponabilidade: 'Ocupado',
};
const terceiroQuarto = {
    hotelId: 1,
    numero_quarto: 08,
    tipo_quart: 'Normal',
    numero_cama: 2,
    preco_noite: 100,
    disponabilidade: 'Livre',
};
const quartoQuarto = {
    hotelId: 2,
    numero_quarto: 06,
    tipo_quart: 'Normal',
    numero_cama: 5,
    preco_noite: 120,
    disponabilidade: 'Livre',
};
const quintoQuarto = {
    hotelId: 1,
    numero_quarto: 18,
    tipo_quart: 'Vip',
    numero_cama: 2,
    preco_noite: 180,
    disponabilidade: 'Livre',
};
const sextoQuarto = {
    hotelId: 2,
    numero_quarto: 03,
    tipo_quart: 'Normal',
    numero_cama: 2,
    preco_noite: 80,
    disponabilidade: 'Livre',
};

Quarto.create(primeiroQuarto,segundoQuarto,terceiroQuarto,quartoQuarto,quintoQuarto,sextoQuarto)
    .then(quartoCriado => {
        console.log('Quarto criado com sucesso:', quartoCriado);
    })
    .catch(erro => {
        console.error('Erro ao criar quarto:', erro);
    });