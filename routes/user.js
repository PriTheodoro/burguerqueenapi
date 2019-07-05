const router = require('express').Router();
const models = require('../models');
const User = models.User;

router.get("/", (req, res) => {
    User.findAll()
    .then(users => { res.send(users) });
});

router.get("/:id", (req, res) => {
    User.findOne({ where: { id: req.params.id } })
        .then(user => { res.send(user) });
});

router.post("/", (req, res) => User.create(req.body)
    .then(user => {
        res.status(201).send(user);
    }));

router.put("/:id", (req, res) => {
    User.update({ ...req.body },
        { where: { id: req.params.id } })
    .then(() => {
        User.findByPk(req.params.id)
        .then(user => res.send(user.dataValues))
    });
});

router.delete("/:id", (req, res) => {
    User.destroy({ where: { id: req.params.id } })
        .then(() => res.sendStatus(200));
});


module.exports = router