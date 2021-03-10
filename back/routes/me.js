const express = require("express");
const router = express.Router();
const tokenMiddleware = require("./tokenMiddleware")
const { User } = require ("../models/index")
 
router.get("/", tokenMiddleware, (req, res, next) => {  //usuario esta en el middleware
 
    res.status(200).json(req.user)
})


router.put("/", (req, res, next)=>{   // se pide en formato de {estado user}

    User.findOne({
        where: {
          id: req.body.user.id
        }
      })
      .then ((user)=> {
        user=req.body
        user.save()
        .then ((modifiedUser)=>res.status(200).send(modifiedUser))
      })

})

module.exports = router