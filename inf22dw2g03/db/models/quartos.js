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
      this.hasMany(models.usuario, { foreignKey: 'usuario_id' });
      this.belongsToMany(models.hotel, { through: 'TabelaPivot' });
      this.hasOne(models.reserva, { foreignKey: 'reserva_id' });
    }
  }
  quartos.init({
    numero_quarto: DataTypes.STRING,
    tipo_quart: DataTypes.STRING,
    numero_cama: DataTypes.STRING,
    preco_noite: DataTypes.FLOAT,
    disponabilidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'quartos',
  });
  return quartos;
};
  