const { Category } = require("../models/index");

const categoriesController = {
  findAll(req, res) {
    Category.findAll({
      order: [["id", "ASC"]],
    }).then((categories) => res.send(categories));
  },
  findOne(req, res) {
    Category.findByPk(req.params.id).then((category) => res.send(category));
  },
  create(req, res) {
    Category.create(req.body)
      .then((category) => res.status(201).send(category))
      .catch((err) => res.status(500).send(err));
  },
  update(req, res) {
    Category.findByPk(req.body.id)
      .then((category) => category.update(req.body))
      .then((category) => res.status(201).send(category));
  },
  delete(req, res) {
    Category.findByPk(req.params.id)
      .then((category) => category.destroy())
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = categoriesController;
