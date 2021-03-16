const express = require("express");
const router = express.Router();
const db = require("../db");
const { Review, Product, User } = require("../models");

router.post("/:productId", (req, res, next) => {
  Product.findByPk(req.params.productId)
  .then((foundProduct) => {
    const product = foundProduct;
    User.findByPk(req.body.user.id)
    .then((foundUser) => {
      const user = foundUser
        Review.create(req.body.review)
        .then((review) => {
          product.addReview(review);
          user.addReview(review);
        });
    }).then(() =>res.sendStatus(200))
});
});


router.get("/", (req, res, next) => {
    Review.findAll()
    .then(reviews => res.send(reviews))
})

module.exports = router;


