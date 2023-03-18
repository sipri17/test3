'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemSale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ItemSale.belongsTo(models.Item,{
        foreignKey: 'itemId'
      })
      ItemSale.belongsTo(models.Sale,{
        foreignKey: 'saleId'
      })
    }
  }
  ItemSale.init({
    itemId: DataTypes.INTEGER,
    saleId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemSale',
  });
  return ItemSale;
};