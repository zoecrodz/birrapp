const express = require("express");
const router = express.Router();
const db = require("../db")
const { Cart } = require("../models")


router.put('/:id', (req, res) => {
	Cart.update(req.body, {where: {id: req.params.id}})
	.then(cart => res.status(201).send(cart));
})

router.post('/:id', (req, res, next) => {
	Cart.create(req.body)
	.then(cart => res.status(201).send(cart));
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Cart.destroy(req.body, {where: id})
          .then(() => res.sendStatus(204))
          .catch(err => res.status(500).send(err));
})

export default router;