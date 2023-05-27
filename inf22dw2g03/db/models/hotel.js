'use strict';
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
      // Associação de um para muitos
      this.hasMany(models.quartos, { foreignKey: 'quartos_id' });
      this.hasMany(models.usuario, { foreignKey: 'usuario_id' });
      this.hasMany(models.reserva, { foreignKey: 'reserva_id' });

    }
  }
  hotel.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    numero_quartos: DataTypes.INTEGER,
    classification: DataTypes.INTEGER,
    preco_noite: DataTypes.INTEGER,
    disponibilidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hotel',
  });
  return hotel;
};