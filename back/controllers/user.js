const { User } = require("../models");

const userController = {
  getOne(req, res) {
    User.findByPk(req.params.id)
    .then(user => res.send(user))
  },
  getAll(req, res) {
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
  },
  updateUser(req, res) {
    User.findByPk(Number(req.body.id))
        .then(res => res.dataValues)
        .then(user => {
            User.update({ admin: !user.admin }, { where: { id: user.id } })
                .then((user) => res.send(user));
        })
  },
  deleteUser(req, res) {
    User.update({ active: false }, { where: { id: req.params.id } })
        .then((user) => res.send(user))
    },
};

module.exports = userController;