'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('hotels', [
            {nome: 'Hotel 1', address: 'Praia', numero_quartos: '26', classification: '2', preco_noite: '60', disponibilidade: 'Disponivel', createdAt: new Date(), updatedAt: new Date()},
            {nome: 'Hotel 2', address: 'Assomada', numero_quartos: '30', classification: '3', preco_noite: '87', disponibilidade: 'Não disponivel', createdAt: new Date(), updatedAt: new Date()},
            {nome: 'Hotel 3', address: 'Ribeira Grande', numero_quartos: '10', classification: '5', preco_noite: '25', disponibilidade: 'Disponivel', createdAt: new Date(), updatedAt: new Date()},
            {nome: 'Hotel 4', address: 'Tarrafal', numero_quartos: '16', classification: '4', preco_noite: '12', disponibilidade: 'Sim', createdAt: new Date(), updatedAt: new Date()},
            {nome: 'Hotel 5', address: 'São Domingos', numero_quartos: '11', classification: '3', preco_noite: '13', disponibilidade: 'Sim', createdAt: new Date(), updatedAt: new Date()},
            {nome: 'Hotel 6', address: 'Santa Cruz', numero_quartos: '22', classification: '5', preco_noite: '22', disponibilidade: 'Sim', createdAt: new Date(), updatedAt: new Date()},
            {nome: 'Hotel 7', address: 'Porto', numero_quartos: '13', classification: '4', preco_noite: '32', disponibilidade: 'Não', createdAt: new Date(), updatedAt: new Date()},
            {nome: 'Hotel 8', address: 'Gaia', numero_quartos: '36', classification: '5', preco_noite: '87', disponibilidade: 'Sim', createdAt: new Date(), updatedAt: new Date()},
            {nome: 'Hotel 9', address: 'Senhor de Matosinhos', numero_quartos: '33', classification: '3', preco_noite: '54', disponibilidade: 'Sim', createdAt: new Date(), updatedAt: new Date()},
            {nome: 'Hotel 10', address: 'Povoa de Varzim', numero_quartos: '56', classification: '5', preco_noite: '30', disponibilidade: 'Sim', createdAt: new Date(), updatedAt: new Date()},
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('hotels', null, {});
    }
};