const express = require("express");
const router = express.Router();
const tokenMiddleware = require("./tokenMiddleware")

router.get("/", tokenMiddleware, (req, res, next) => {


    
    res.send("ruta privada")
})

module.exports = router