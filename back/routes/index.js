const express = require( 'express' );
const router = express.Router();
const registerRoutes = require('./registerRoutes')
const loginRoutes = require('./loginRoutes')
const me=require ("./me")

router.use('/register', registerRoutes)
router.use('/login', loginRoutes)
router.use('/me', me)

module.exports = router; 