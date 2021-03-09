const express = require("express");
const router = express.Router();
const Product = require("./Product")
const Cart = require("./Cart")

router.use("/product", Product)
router.use("/cart", Cart)

module.exports = router;