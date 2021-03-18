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





// app.put('/api/books/:id', (req, res, next) => {
//   if (req.params.id != (Number(req.params.id))) {
//       res.sendStatus(500)
//   }

//   Book.findByPk(req.params.id)
//       .then((libroEncontrado) => {
//           if (libroEncontrado) {
//               libroEncontrado.update({
//                   title: req.body.title
//               })
//                   .then((libroActualizado) => {
//                   res.send(libroActualizado)
//               })
//           } else {
//               res.sendStatus(404)
//           }
//   })
// })








//   router.post("/", (req, res) => {
//     User.findOne({
//       where: {
//         email: req.body.email
//       }
//     })
//     .then(usuario => {
//       const user = usuario
//       .then(() => {
//         if(!user){
//           user = User.create(req.body)
//         }
//       })
//     return user
//     })
//     .then((user) => {
//       res.status(201).send(user);
//     })
//     .catch()
// });
