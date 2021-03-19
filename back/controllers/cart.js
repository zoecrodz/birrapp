const { Cart, Product } = require("../models");

const cartController = {
  cartPost(req, res) {
    Cart.create(req.body)
      .then((cart) => res.status(201).send(cart))
      .catch((err) => res.status(500).send(err));
  },
  get(req, res) {
    Cart.findAll({ where: { state: "WAITING" } })
      .then((carts) => res.status(201).send(carts))
      .catch((err) => res.status(500).send(err));
  },
  getOne(req, res, next) {
    let carrito;
    let userId = req.params.userId;
    Cart.findOne({ where: { userId, state: "PENDING" } })
      .then((cart) => {
        if (!cart) {
          return Cart.create({
            paymentMethod: "Efectivo", //Por defecto efectivo queda cambiar
            table: 1, //Por defecto, queda por cambiar
            state: "PENDING", //Por defecto, siempre tiene que ser PENDING
            userId: userId,
          }).then((newUser) => {
            carrito = newUser.dataValues;
            return newUser.getProducts();
          });
        }
        carrito = cart.dataValues;
        return cart.getProducts();
      })
      .then((children) => {
        children.map(() => {});
        res.send({ ...carrito, items: children });
      })
      .catch(next);
  },
  get(req, res) {
    Cart.findAll({ where: { state: "WAITING" } })
      .then((carts) => res.status(201).send(carts))
      .catch((err) => res.status(500).send(err));
  },
  get(req, res) {
    Cart.findAll({ where: { state: "WAITING" } })
      .then((carts) => res.status(201).send(carts))
      .catch((err) => res.status(500).send(err));
  },
  get(req, res) {
    Cart.findAll({ where: { state: "WAITING" } })
      .then((carts) => res.status(201).send(carts))
      .catch((err) => res.status(500).send(err));
  },
  get(req, res) {
    Cart.findAll({ where: { state: "WAITING" } })
      .then((carts) => res.status(201).send(carts))
      .catch((err) => res.status(500).send(err));
  },
  get(req, res) {
    Cart.findAll({ where: { state: "WAITING" } })
      .then((carts) => res.status(201).send(carts))
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = cartController;
