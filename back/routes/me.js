const express = require("express");
const router = express.Router();
const tokenMiddleware = require("./tokenMiddleware");
const { User } = require ("../models/index");  // revisar posteriormente


 
router.get("/", tokenMiddleware, (req, res, next) => {  //usuario esta en el middleware
    User.findByPk(req.user.id)
    .then(user => res.status(200).json(user))
})


// router.put("/", (req, res, next)=>{   // se pide en formato de {estado user}
//   console.log(req)    
// User.findByPk(req.body.id)
//     .then(user => console.log(user))
//       .then ((user)=> {
//         user=req.body
//         user.save()
//         .then ((modifiedUser)=>res.status(200).send(modifiedUser))
//         .catch(err => console.log(err))
//       })

// })

module.exports = router