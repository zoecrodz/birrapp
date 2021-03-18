const express = require("express");
const router = express.Router();
const { Item } = require("../models");

router.get("/", (req, res, next) => {
  Item.findAll()
    .then(data => res.send(data))
});
router.post("/", (req, res, next) => {
  Item.create(req.body)
    .then(data => res.send(data))
});
router.put("/:productId/:cartId", (req, res, next) => {
  
  Item.findOne({
    where: { productId: req.params.productId, cartId: req.params.cartId },
  })
    .then((item) => item.operation(req.body.operation))
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err));
});

router.delete("/:productId/:cartId", (req, res, next) => {
  Item.findOne({
    where: { productId: req.params.productId, cartId: req.params.cartId },
  })
    .then((item) => item.destroy())
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err));
});

router.get("/:productId/:cartId", (req, res, next) => {
  Item.findOne({
    where: { productId: req.params.productId, cartId: req.params.cartId },
  })
    .then((item) => res.send(item))
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err));
});
module.exports = router;
