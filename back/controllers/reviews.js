const { Review, Product, User } = require("../models");

const reviewsController = {
  getReviews(req, res) {
    Review.findAll()
    .then(reviews => res.send(reviews))
  },
  postReview(req, res) {
    let user, product;

    Product.findByPk(req.params.productId).then(foundProduct => {
      product = foundProduct;
      User.findByPk(req.body.user.id)
        .then(foundUser => {
          user = foundUser;
          Review.create(req.body.review).then(review => {
            console.log(`---------USER---------`);
            console.log(user);
            product.addReview(review);
            user.addReview(review);
          });
        })
        .then(() => res.sendStatus(200));
    });
  },
};

module.exports = reviewsController;
