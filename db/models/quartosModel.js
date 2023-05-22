'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quartos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  quartos.init({
    numero_quarto: DataTypes.STRING,
    tipo_quart: DataTypes.STRING,
    numero_cama: DataTypes.STRING,
    preco_noite: DataTypes.FLOAT,
    disponabilidade: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'quartos',
  });
  return quartos;
};

