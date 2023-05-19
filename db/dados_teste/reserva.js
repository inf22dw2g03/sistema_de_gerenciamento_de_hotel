const reserva = require('../models/reserva');
const Reserva = require('../models/reserva');

const reserva1 = {
    usuarioId: 1,
    numero_pessoas: 1,
    numero_quarto: 22,
    preco: 250,
    status_reserva: 'ativo',
};
const reserva2 = {
    usuarioId: 2,
    numero_pessoas: 2,
    numero_quarto: 21,
    preco: 267,
    status_reserva: 'pendente',
};
const reserva3 = {
    usuarioId: 3,
    numero_pessoas: 2,
    numero_quarto: 08,
    preco: 100,
    status_reserva: 'cancelado',
};
const reserva4 = {
    usuarioId: 4,
    numero_pessoas: 5,
    numero_quarto: 06,
    preco: 120,
    status_reserva: 'ativo',
};
const reserva5 = {
    usuarioId: 5,
    numero_pessoas: 2,
    numero_quarto: 18,
    preco: 180,
    status_reserva: 'pendente',
};

Reserva.create(reserva1,reserva2,reserva3,reserva4,reserva5)
    .then(reservaCriado => {
        console.log('Reserva criado com sucesso:', reservaCriado);
    })
    .catch(erro => {
        console.error('Erro ao criar reserva:', erro);
    });