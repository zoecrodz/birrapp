const express = require("express");
const itemsController = require("../controllers/items");
const router = express.Router();

router.get("/", itemsController.findAll);

router.post("/", itemsController.post);

router.put("/:productId/:cartId", itemsController.update);

router.delete("/:productId/:cartId", itemsController.delete);

router.get("/:productId/:cartId", itemsController.findOne);

module.exports = router;
