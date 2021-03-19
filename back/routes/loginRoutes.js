const express = require("express");
const loginController = require("../controllers/loginRoutes");
const router = express.Router();
// Instalar crypto en usuario para generar salt y password hasheada. Ademas crear funciones de instancia para validacion y creacion de hashs

router.post("/", loginController.post);

module.exports = router;
