const express = require("express");
const router = express.Router();
const db = require("../db");
const { Cart, Product } = require("../models");

router.post("/", (req, res, next) => {
  Cart.create(req.body)
    .then((cart) => res.status(201).send(cart))
    .catch((err) => res.status(500).send(err));
});

router.get("/", (req, res, next) => {
  Cart.findAll()
    .then((carts) => res.status(201).send(carts))
    .catch((err) => res.status(500).send(err));
});

router.get("/:userId", (req, res, next) => {
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
});

router.get("/historial/:userId", (req, res, next) => {
  let userId = req.params.userId;
  Cart.findAll({ where: { userId, state: "COMPLETED" }, include: Product })
    .then((carts) => {
      res.send(carts);
    })
    .catch((err) => res.status(500).send(err));
});

router.get("/historial/cart/:cartId", (req, res, next) => {
  let cartId = req.params.cartId;
  Cart.findByPk(cartId, { include: Product })
    .then((cart) => res.send(cart))
    .catch(next);
});

router.put("/:id", (req, res) => {
  Cart.findByPk(req.params.id)
    .then((cart) => cart.update(req.body))
    .then((cart) => res.status(201).send(cart))
    .catch((err) => res.status(500).send(err));
});

router.delete("/:id", (req, res) => {
  Cart.findByPk(req.params.id)
    .then((cart) => cart.destroy())
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;