const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerRoutes")

router.post("/", registerController.register);

router.post("/fb", registerController.registerFB);

module.exports = router;
