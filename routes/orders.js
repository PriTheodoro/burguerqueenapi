const express = require('express');
const models = require('../models');
const Orders = models.Orders;
const OrdersProducts = models.OrdersProducts;
const Products = models.Products;
const User = models.User;


const getOrders = (req, res) => {
    Orders.findAll({
        include: [{
            model: OrdersProducts,
            include: [Products]
        }, User]
    })
    .then(orders => { res.send(orders) });
};

const getOrdersById = (req, res) => {
    Orders.findByPk(req.params.id, {
        include: [{
            model: OrdersProducts,
            include: [Products]
        }, Users]
    })
        .then(orders => { res.send(orders), res.sendStatus(404) });
};

const postOrders = (req, res) => Orders.create(req.body, 
    { include: [OrdersProducts] })
    .then(orders => {
        res.status(201).send(orders);
    });

const putOrders = (req, res) => {
    Orders.update({ ...req.body },
        { where: { id: req.params.id } })
        .then(() => {
            Orders.findByPk(req.params.id)
                .then(orders => res.send(orders))
        });


    const deleteOrders = (req, res) => {
        OrdersProducts.destroy({ where: { orderId: req.params.id } });
        Orders.destroy({ where: { orderId: req.params.id } })
            .then(() => res.sendStatus(200));
    };


    module.exports = {
        getOrders,
        getOrdersById,
        postOrders,
        putOrders,
        deleteOrders
    }