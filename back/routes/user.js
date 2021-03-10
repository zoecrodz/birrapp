const express = require( 'express' );
const router = express.Router()
const {User}= require("../models")
const db = require("../db")
//por el momento no encontramos un ruteo necesario para users salvo para ver que funciona el register

router.get("/", (req, res) => {
    console.log("estoy en la ruta")
    User.findAll()
    .then(users => res.send(users))
    .catch(err => console.log(err))
})

module.exports = router;


