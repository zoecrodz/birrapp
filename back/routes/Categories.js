const express = require("express");
const router = express.Router()
const { Category } = require("../models/index")


router.get("/", (req, res) => {
    Category.findAll({
        order: [["id", "ASC"]]
    })
	.then(categories => res.send(categories));
});

router.get("/:id", (req, res) => {
    Category.findByPk(req.params.id)
	.then(category => res.send(category));
});

router.post("/", (req, res) => {
    Category.create(req.body)
    .then(category => res.status(201).send(category))
    .catch(err => res.status(500).send(err));
});

router.put("/", (req, res) => {
    Category.findByPk(req.body.id)
    .then(category => category.update(req.body))
    .then(category => res.status(201).send(category))
});

router.delete("/:id", (req, res) => {
    Category.findByPk(req.params.id)
    .then(category => category.destroy())
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});


module.exports = router;