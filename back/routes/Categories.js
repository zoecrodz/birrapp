const express = require("express");
const router = express.Router()
const { Category } = require("../models/index")


router.get("/", (req, res) => {
    Category.findAll()
	.then(categorias => res.send(categorias));
})
router.post("/", (req, res) => {
    Category.create(req.body)
    .then(categoria => res.status(201).send(categoria))
    .catch(err => res.status(500).send(err));
})
router.put("/:id", (req, res) => {
    Category.findByPk(req.params.id)
    .then(categoria => categoria.update(req.body))
    .then(categoria => res.status(201).send(categoria))
})
router.delete("/:id", (req, res) => {
    Category.findByPk(req.params.id)
    .then(categoria => categoria.destroy())
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
})


module.exports = router;