'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('quartos_models', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero_quarto: {
        type: Sequelize.STRING
      },
      tipo_quart: {
        type: Sequelize.STRING
      },
      numero_cama: {
        type: Sequelize.STRING
      },
      preco_noite: {
        type: Sequelize.FLOAT
      },
      disponabilidade: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('quartos_models');
  }
};