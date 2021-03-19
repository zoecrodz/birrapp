const { Item } = require("../models");

const itemsController = {
  findAll(req, res) {
    Item.findAll().then((data) => res.send(data));
  },
  post(req, res) {
    Item.create(req.body)
      .then((item) => {
        res.send(item.dataValues);
      })
      .catch((err) => {
        if (err.errors[0].message == "productId must be unique") {
          res.send("Producto ya agregado");
        }
      });
  },
  update(req, res) {
    Item.findOne({
      where: { productId: req.params.productId, cartId: req.params.cartId },
    })
      .then((item) => item.operation(req.body.operation))
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  },
  delete(req, res) {
    Item.findOne({
      where: { productId: req.params.productId, cartId: req.params.cartId },
    })
      .then((item) => item.destroy())
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  },
  findOne(req, res) {
    Item.findOne({
      where: { productId: req.params.productId, cartId: req.params.cartId },
    })
      .then((item) => res.send(item))
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = itemsController;
