const { User } = require("../models/");

const registerController = {
    register(req, res) {
        User.create(req.body).then((user) => {
            res.status(201).send(user);
          });
    },
    registerFB(req, res) {
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
    },
    
}

module.exports = registerController;