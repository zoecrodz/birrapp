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
  getPending(req, res) {
    let userId = req.params.userId;
    Cart.findAll({
      where: { userId, state: { [sequelize.Op.not]: "PENDING" } },
      include: Product,
    })
      .then((carts) => {
        res.send(carts);
      })
      .catch((err) => res.status(500).send(err));
  },
  getOneCart(req, res) {
    let cartId = req.params.cartId;
    Cart.findByPk(cartId, { include: Product })
      .then((cart) => res.send(cart))
      .catch(next);
  },
  update(req, res) {
    Cart.findByPk(req.params.id)
      .then((cart) => cart.update(req.body))
      .then((cart) => res.status(201).send(cart))
      .catch((err) => res.status(500).send(err));
  },
  delete(req, res) {
    Cart.findByPk(req.params.id)
      .then((cart) => cart.destroy())
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = cartController;
