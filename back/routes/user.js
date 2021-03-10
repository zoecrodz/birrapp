const express = require( 'express' );
const router = express.Router();
const { User } = require("../models")


router.get('/', (req, res) => {
	User.findAll()
	.then(user => res.send(user));
});

module.exports = router
