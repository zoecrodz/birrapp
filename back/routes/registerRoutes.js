const express = require("express");
const router = express.Router();
const { User } = require("../models/"); //revisar con Modelos

router.post("/", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

router.post("/fb", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((usuario) => {
      const user = usuario
        if (user) {
          res.send(user)
        }
        else {
          user = User.create(req.body)
          .then(us => console.log("usuario creado", us.dataValues))
        }
      })
});

module.exports = router;
