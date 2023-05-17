'use strict';
const bcrypt = require('bcrypt');
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
      // define association here
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
  // metodo para verificar a senha antes de salvar o usuario no banco de dados
  usuario.beforeCreate(async (usuario) => {
    const hashedPassword = await bcrypt.hash(usuario.password, 10);
    usuario.password = hashedPassword;
  });

  // metodo para verificar a senha fornecida pelo usuario
  usuario.prototype.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  return usuario;
};