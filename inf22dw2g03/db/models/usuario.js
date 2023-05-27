'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associação muitos para um
      this.belongsTo(models.hotel, { foreignKey: 'hotel_id' });
      // Associação de um para um
      this.hasOne(models.reserva, { foreignKey: 'reserva_id' });
      this.hasOne(models.quartos, { foreignKey: 'quartos_id' });


    }
  }
  usuario.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type_user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};