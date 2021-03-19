const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart");

router.post("/", cartController.cartPost);

router.get("/", cartController.get);

router.get("/:userId", cartController.getOne);

router.get("/historial/:userId", cartController.getPending);

router.get("/historial/cart/:cartId", cartController.getOneCart);

router.put("/:id", cartController.update);

router.delete("/:id", cartController.delete);

module.exports = router;
