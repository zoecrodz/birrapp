const express = require("express");
const router = express.Router();

const RegisterRoutes = require("./registerRoutes");
const LoginRoutes = require("./loginRoutes");
const Me = require("./me");
const Product = require("./Product");
const Cart = require("./Cart");
const User = require("./user");
const Category = require("./Categories");
const Items = require("./Items");
const Reviews = require("./Reviews")

router.use("/register", RegisterRoutes);
router.use("/login", LoginRoutes);
router.use("/me", Me);
router.use("/product", Product);
router.use("/cart", Cart);
router.use("/users", User);
router.use("/category", Category);
router.use("/items", Items);
router.use("/reviews", Reviews)

module.exports = router;
