const express = require("express");
const router = express.Router();
const db = require("../db")
const { Product, Picture, Category } = require("../models")

router.get('/', (req, res) => {
	Product.findAll({
		include: [Picture, Category],
		order: [
			['categoryId', 'ASC'],
			['id', 'ASC'] 
		],
		where:{
			active: true
		}
	})
	.then(product => res.send(product));
});

router.get('/:id', (req, res, next) => {
	Product.findByPk(req.params.id, {include: Picture, where: {active: true} })
	.then(product => res.send(product));
});

router.put('/:id', (req, res) => {
	Product.findByPk(req.params.id)
		.then(product => product.update(req.body))
		.then(product => res.status(201).send(product))
})

router.post('/', (req, res) => {
	Product.create(req.body)
	.then(product => res.status(201).send(product));
})

router.delete("/:id", (req, res) => {
	Product.update({active: false}, {where: {id: req.params.id}})
		.then((user) => res.send(user))
/* 	Product.findByPk(req.params.id, {where: {active: true}})
        .then(product => product.destroy())
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    // const id = req.params.id;
    // Product.destroy(req.body, {where: id})
    //       .then(() => res.sendStatus(204))
    //       .catch(err => res.status(500).send(err)); */
})

module.exports = router;