'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrdersProducts = sequelize.define('OrdersProducts', {
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  OrdersProducts.associate = function(models) {
    OrdersProducts.belongsTo(models.Products, {foreignKey: 'productId'})
    OrdersProducts.belongsTo(models.Orders, {foreignKey: 'orderId'})
  };
  return OrdersProducts;
};