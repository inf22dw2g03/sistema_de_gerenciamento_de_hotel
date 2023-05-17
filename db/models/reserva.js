'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reserva.init({
    data_check_in: DataTypes.DATE,
    data_check_out: DataTypes.DATE,
    numero_pessoas: DataTypes.INTEGER,
    numero_quarto: DataTypes.INTEGER,
    preco: DataTypes.FLOAT,
    status_reserva: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'reserva',
  });
  return reserva;
};