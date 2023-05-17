'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_check_in: {
        type: Sequelize.DATE
      },
      data_check_out: {
        type: Sequelize.DATE
      },
      numero_pessoas: {
        type: Sequelize.INTEGER
      },
      numero_quarto: {
        type: Sequelize.INTEGER
      },
      preco: {
        type: Sequelize.FLOAT
      },
      status_reserva: {
        type: Sequelize.ENUM('Ativo', 'Pendente', 'Cancelado')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reservas');
  }
};