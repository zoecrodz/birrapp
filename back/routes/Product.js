const express = require("express");
const router = express.Router();
const db = require("../db")
const { Product, Picture, Category, Review } = require("../models")

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

router.get('/:id', (req, res) => {
	Product.findByPk(req.params.id, 
		{
			include: [Picture, Review, Category], 
			where: {
				active: true
			} 
		})
	.then(product => res.send(product));
});

// Por nombre
router.get('/name/:name', (req, res) => {
	Product.findAll(
		{ 
			where: { 
				name: req.params.name, 
				active: true
			}, 
			include: Picture  
		})
	.then(product => res.send(product));
});

// Por categoria
router.get('/category/:category', (req, res) => {
	Product.findAll(
		{ 
			where: { 
				categoryId: req.params.category,
				active: true
			}, 
			include: Picture 
		})
	.then(product => res.send(product));
});

router.put('/:id', (req, res) => {
	const {name, price, stock, categoryId, pictures, description} = req.body;
	Product.findByPk(req.params.id)
		.then(product => product.update({name, price, stock, categoryId, description}))
		.then(()=> Pictures.findByPk(pictures[0].id))
		.then(pic=> pic.update(pictures[0]))
		.then(() => res.sendStatus(200))
})

router.post('/', (req, res) => {
	const {name, price, stock, categoryId, url, description} = req.body;
	Product.create({name, price, stock, categoryId, description})
	.then(product => {
		Picture.create({url, productId: product.id})
			.then(() => res.status(201).send(product))
	});
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