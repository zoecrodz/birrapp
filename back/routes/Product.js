const express = require("express");
const router = express.Router();
const db = require("../db");
const { Product, Category, Review } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/", (req, res) => {
  Product.findAll({
    include: Category,
    order: [
      ["categoryId", "ASC"],
      ["id", "ASC"],
    ],
    where: {
      active: true,
    },
  })
  .then((product) => res.send(product));
});


router.get('/:id', (req, res) => {
	Product.findByPk(req.params.id, 
		{
			include: [Review, Category], 
			where: {
				active: true
			} 
		})
	.then(product => res.send(product));
});

// Por nombre
router.get("/name/:name", (req, res, next) => {
  Product.findAll({
    limit: 10,
    where: {
      name: {
        [Op.like]: `%${req.params.name}%`,
      },
      active: true,
    }
  })
  .then((product) => res.send(product));
});

// Por categoria
router.get("/category/:category", (req, res) => {
  Product.findAll({
    where: {
      categoryId: req.params.category,
      active: true,
    }
  })
  .then((product) => res.send(product));
});


router.put('/:id', (req, res) => {
	const {name, price, stock, categoryId, url, description} = req.body;
	const nameNormalized = name.toUpperCase()
	Product.findByPk(req.params.id)
		.then(product => product.update({name: nameNormalized, price, stock, categoryId, description, url}))
		.then(() => res.sendStatus(200));
})

router.post('/', (req, res) => {
	const {name, price, stock, categoryId, url, description} = req.body;
	const nameNormalized = name.toUpperCase()
	Product.create({name: nameNormalized, price, stock, categoryId, description, url})
	.then(product => res.status(201).send(product));
});


router.delete("/:id", (req, res) => {
  Product.update(
    { active: false },
    { where: { id: req.params.id } }
  )
  .then((user) => res.send(user));
});

module.exports = router;
