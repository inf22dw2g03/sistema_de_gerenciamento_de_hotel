'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('quartos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hotelId: { 
        type: Sequelize.INTEGER,
        allowNull: false
      },
      numero_quarto: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tipo_quart: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numero_cama: {
        type: Sequelize.STRING
      },
      preco_noite: {
        type: Sequelize.FLOAT,
        allowNull: false
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
    await queryInterface.dropTable('quartos');
  }
};