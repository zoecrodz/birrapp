const express = require("express");
const router = express.Router();
const { User } = require("../models/"); //revisar con Modelos

router.post("/", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

router.post("/fb", (req, res) => {
  console.log("llegando a la ruta", req.body)
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((usuario) => {

        if (usuario) {
          res.send(usuario)
        }
        else {
          User.create(req.body)
          .then(us => res.send(us))
        }
      })
});

module.exports = router;
