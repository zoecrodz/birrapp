const express = require("express");
const router = express.Router();
const Product = require("./Product")

router.use("/product", Product)

module.exports = router;