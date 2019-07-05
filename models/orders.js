'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    uid: DataTypes.INTEGER
  }, {});
  Orders.associate = function (models) {
    Orders.belongsTo(models.User, { foreignKey: 'uid' })
    Orders.hasMany(models.OrdersProducts, { foreignKey: 'orderId' })
  };

  // Orders.create({status: 'PENDING', uid:1});
  // Orders.create({status: 'DELIVERED', uid:2});


  return Orders;
};


