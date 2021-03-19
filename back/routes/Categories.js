const express = require("express");
const router = express.Router();
const { Category } = require("../models/index");
const categoriesController = require("../controllers/categories");

router.get("/", categoriesController.findAll);

router.get("/:id", categoriesController.findOne);

router.post("/", categoriesController.create);

router.put("/", categoriesController.update);

router.delete("/:id", categoriesController.delete);

module.exports = router;
