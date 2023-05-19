const hotel = require('../models/hotel');
const Hotel = require('../models/hotel');

const novoHotel = {
    nome: 'PraiaVibes',
    endereco: 'Cabo Verde, Praia',
    numero_quartos: 30,
    classificacao: 4,
    preco_medio: 120,
    disponibilidade: 'Disponivel'
};

const segundoHotel = {
    nome: 'SantiagoHotel',
    endereco: 'Cabo Verde, Assomada',
    numero_quartos: 26,
    classificacao: 5,
    preco_medio: 150,
    disponibilidade: 'Disponivel'
};

Hotel.create(novoHotel, segundoHotel)
    .then(hotelCriado => {
        console.log('Hotel criado com sucesso:', hotelCriado, segundoHotel);
    })
    .catch(erro => {
        console.error('Erro ao criar hotel:', erro);
    });