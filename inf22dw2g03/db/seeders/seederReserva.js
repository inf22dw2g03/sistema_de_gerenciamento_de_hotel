'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('reservas', [
            {numero_pessoas: '3', numero_quarto: '3', preco: '60', status_reserva: 'Cancelado', createdAt: new Date(), updatedAt: new Date()},
            {numero_pessoas: '2', numero_quarto: '2', preco: '50', status_reserva: 'Pendente', createdAt: new Date(), updatedAt: new Date()},
            {numero_pessoas: '3', numero_quarto: '3', preco: '60', status_reserva: 'Ativo', createdAt: new Date(), updatedAt: new Date()},
            {numero_pessoas: '2', numero_quarto: '2', preco: '80', status_reserva: 'Ativo', createdAt: new Date(), updatedAt: new Date()},
            {numero_pessoas: '2', numero_quarto: '2', preco: '80', status_reserva: 'Pendente', createdAt: new Date(), updatedAt: new Date()},
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('reservas', null, {});
    }
};