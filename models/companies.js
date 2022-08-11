'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Companies.hasMany(models.Users,{foreignKey:'id'})
    }
  }
  Companies.init({
    name: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Companies',
  });
  return Companies;
};