const express = require("express");
const router = express.Router();
const db = require("../db");
const { Cart, Product } = require("../models");
const sequelize = require("sequelize");
const cartController = require("../controllers/cart");

router.post("/", cartController.cartPost);

router.get("/", cartController.get);

router.get("/:userId", cartController.getOne;

router.get("/historial/:userId", (req, res, next) => {
  let userId = req.params.userId;
  Cart.findAll({
    where: { userId, state: { [sequelize.Op.not]: "PENDING" } },
    include: Product,
  })
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
