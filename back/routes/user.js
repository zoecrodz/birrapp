const express = require('express');
const router = express.Router();
const { User } = require("../models");
//por el momento no encontramos un ruteo necesario para users salvo para ver que funciona el register

//users
router.put(`/promote`, (req, res) => {
    User.findByPk(Number(req.body.id))
        .then(res => res.dataValues)
        .then(user => {
            User.update({ admin: !user.admin }, { where: { id: user.id } })
                .then((user) => res.send(user));
        })
});

router.get("/", (req, res) => {
    User.findAll({
        order: [
            ['id', 'ASC']
        ],
        where: {
            active: true
        }
    })
        .then(users => res.send(users))
        .catch(err => console.log(err));
});

router.delete("/:id", (req, res) => {
    User.update({ active: false }, { where: { id: req.params.id } })
        .then((user) => res.send(user))
});

module.exports = router;