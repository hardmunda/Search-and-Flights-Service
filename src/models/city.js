'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Airport, {
        foreign: 'cityId'
      });
    }
  }
  city.init({
    name: {
    type:DataTypes.STRING,
    allowNUll:false,
    unique:true
    },
    
  }, {
    sequelize,
    modelName: 'city',
  });
  return city;
};