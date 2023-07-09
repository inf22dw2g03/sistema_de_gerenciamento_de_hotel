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
      // // Associação muitos para um
      // this.belongsTo(models.hotel, { foreignKey: 'hotelId' });
      // // Associação de um para um
      // this.hasOne(models.reserva, { foreignKey: 'reservaId' });
      // this.hasOne(models.quartos, { foreignKey: 'quartosId' });


    }
  }

  usuario.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type_user: DataTypes.STRING,
    // hotelId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'hotel',
    //     key: 'id'
    //   } 
    // reservaId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: { 
    //     model: 'reserva', 
    //     key: 'id'
    //   } 
    // },
    // quartosId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'quartos',
    //     key: 'id'
    //   } 
    // }
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
}; 