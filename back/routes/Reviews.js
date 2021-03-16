const express = require("express");
const router = express.Router();
const db = require("../db");
const { Review, Product, User } = require("../models");

router.post("/:productId", (req, res, next) => {
  let user, product;

  Product.findByPk(req.params.productId)
  .then((foundProduct) => {
    product = foundProduct;
    User.findByPk(req.body.user.id)
    .then((foundUser) => {
      user = foundUser
        Review.create(req.body.review)
        .then((review) => {
          console.log(`---------USER---------`)
          console.log(user)
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


