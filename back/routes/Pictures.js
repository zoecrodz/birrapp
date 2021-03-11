const express = require("express");
const router = express.Router()
const { Picture } = require("../models")

router.get('/:id', (req, res, next) => {
	Picture.findAll({ where: { productId: req.params.id }})
        .then(pictures => res.status(201).send(pictures))
});

module.exports = router