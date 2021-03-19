const { Product, Category, Review } = require("../models"); 
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const productController = {
    getAll(req, res) {
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
    },
    getOne(req, res) {
        Product.findByPk(req.params.id, 
            {
                include: [Review, Category], 
                where: {
                    active: true
                } 
            })
        .then(product => res.send(product));
    },
    getByName(req, res) {
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
    },
    getByCategorie(req, res) {
        Product.findAll({
            where: {
              categoryId: req.params.category,
              active: true,
            }
          })
          .then((product) => res.send(product));
    },
    productUpdate(req, res) {
        const {name, price, stock, categoryId, url, description} = req.body;
	const nameNormalized = name.toUpperCase()
	Product.findByPk(req.params.id)
		.then(product => product.update({name: nameNormalized, price, stock, categoryId, description, url}))
		.then(() => res.sendStatus(200));
    },
    createProduct(req, res) {
        const {name, price, stock, categoryId, url, description} = req.body;
	const nameNormalized = name.toUpperCase()
	Product.create({name: nameNormalized, price, stock, categoryId, description, url})
	.then(product => res.status(201).send(product));
    },
    deleteProduct(req, res) {
        Product.update(
            { active: false },
            { where: { id: req.params.id } }
          )
          .then((user) => res.send(user));
    }
}

module.exports = productController;