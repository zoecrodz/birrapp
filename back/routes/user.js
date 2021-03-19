const express = require('express');
const router = express.Router();

const userController = require("../controllers/user")

router.get("/:id", userController.getOne)
router.get("/", userController.getAll);
router.put(`/promote`, userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;