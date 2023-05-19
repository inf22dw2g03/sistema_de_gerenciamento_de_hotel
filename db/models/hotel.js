'use strict';
const Quarto = require('./quartos')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hotel.init({
    nome: DataTypes.STRING,
    address: DataTypes.STRING,
    numero_quartos: DataTypes.INTEGER,
    classification: DataTypes.INTEGER,
    preco_medio: DataTypes.FLOAT,
    disponibilidade: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'hotel',
  });
  return hotel;
};

hotel.hasMany(Quarto, {foreignKey: 'hotelId'});