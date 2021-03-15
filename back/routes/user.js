const express = require( 'express' );
const router = express.Router();
const { User } = require("../models");
//por el momento no encontramos un ruteo necesario para users salvo para ver que funciona el register

//users
router.get("/", (req, res) => {
    User.findAll()
    .then(users => res.send(users))
    .catch(err => console.log(err));
})



module.exports = router;