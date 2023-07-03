'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('usuarios', [
            {name: 'Zidane', address: 'Portugal', email: 'zidane@gmail.com', password: '123456789', type_user: 'Admin', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Etson', address: 'Portugal', email: 'etson@gmail.com', password: '123456789', type_user: 'Admin', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Joe', address: 'Portugal', email: 'joe@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis', address: 'Portugal', email: 'luis@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('usuario', null, {});
    }
};