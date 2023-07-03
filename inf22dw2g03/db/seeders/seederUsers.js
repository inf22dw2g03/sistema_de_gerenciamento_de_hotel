'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('usuarios', [
            {name: 'Zidane', address: 'Portugal', email: 'zidane@gmail.com', password: '123456789', type_user: 'Admin', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Etson', address: 'Portugal', email: 'etson@gmail.com', password: '123456789', type_user: 'Admin', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Joe', address: 'Portugal', email: 'joe@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis', address: 'Portugal', email: 'luis@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Anderson', address: 'Italia', email: 'anderson@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Alex', address: 'Portugal', email: 'alex@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis1', address: 'Portugal', email: 'luis1@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis2', address: 'Portugal', email: 'luis2@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis3', address: 'Portugal', email: 'luis3@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis4', address: 'Portugal', email: 'luis4@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis5', address: 'Portugal', email: 'luis5@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis6', address: 'Portugal', email: 'luis6@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis7', address: 'Portugal', email: 'luis7@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis8', address: 'Portugal', email: 'luis8@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis9', address: 'Portugal', email: 'luis9@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis10', address: 'Portugal', email: 'luis10@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis11', address: 'Portugal', email: 'luis11@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis12', address: 'Portugal', email: 'luis12@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis13', address: 'Portugal', email: 'luis13@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis14', address: 'Portugal', email: 'luis14@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
            {name: 'Luis15', address: 'Portugal', email: 'luis15@gmail.com', password: '123456789', type_user: 'Cliente', createdAt: new Date(), updatedAt: new Date() },
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('usuario', null, {});
    }
};