'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('quartos', [
            {numero_quarto: '1', tipo_quart: 'Poupança', numero_cama: '4', preco_noite: '10', disponabilidade: '', createdAt: new Date(), updatedAt: new Date()},     
            {numero_quarto: '2', tipo_quart: 'Normal', numero_cama: '2', preco_noite: '50', disponabilidade: '', createdAt: new Date(), updatedAt: new Date()},
            {numero_quarto: '3', tipo_quart: 'Normal', numero_cama: '2', preco_noite: '50', disponabilidade: '', createdAt: new Date(), updatedAt: new Date()},
            {numero_quarto: '4', tipo_quart: 'Normal', numero_cama: '2', preco_noite: '50', disponabilidade: '', createdAt: new Date(), updatedAt: new Date()},
            {numero_quarto: '5', tipo_quart: 'Vip', numero_cama: '1', preco_noite: '80', disponabilidade: '', createdAt: new Date(), updatedAt: new Date()},
            {numero_quarto: '6', tipo_quart: 'Vip', numero_cama: '1', preco_noite: '80', disponabilidade: '', createdAt: new Date(), updatedAt: new Date()},
            {numero_quarto: '7', tipo_quart: 'Vip', numero_cama: '1', preco_noite: '80', disponabilidade: '', createdAt: new Date(), updatedAt: new Date()},

        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('quartos', null, {});
    }
};