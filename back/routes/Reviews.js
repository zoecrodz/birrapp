const express = require("express");
const router = express.Router();

const reviewsController = require("../controllers/reviews")

router.post("/:productId", reviewsController.postReview);

router.get("/", reviewsController.getReviews)

module.exports = router;


