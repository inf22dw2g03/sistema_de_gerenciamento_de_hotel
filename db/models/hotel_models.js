'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel_models extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hotel_models.init({
    nome: DataTypes.STRING,
    address: DataTypes.STRING,
    numero_quartos: DataTypes.INTEGER,
    classification: DataTypes.INTEGER,
    preco_noite: DataTypes.INTEGER,
    disponibilidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hotel_models',
  });
  return hotel_models;
};