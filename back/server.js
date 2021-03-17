const nodemailer = require("nodemailer") // Libreria para enviar emails
const express = require("express");
const app = express();
const sequelize = require("./db");
const cors = require("cors");

const config = require("./server.config.js");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Express Route File Requires
const authAPI = require("./routes");

app.use(express.json());
app.use(express.urlencoded());

app.use("/api", authAPI);

// envio de emails
app.post("/send-email", (req, res) => {

  let admin = "pablo.munaretto@gmail.com"

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    post: 465,
    secure: true,
    auth: {
      user: admin, // mail del bar de donde se envian los mails
      pass: "lszfmieviiiewtmg" // pass de gmail de google 
    } 
  })

  let mailOptions = {
    from: admin,
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.text,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message)
    } else {
      console.log("email enviado")
      res.status(200).json(req.body)
    }
  })

})

sequelize.sync({ force: false }).then(() => {
  app.listen(config.port, () => {
    console.log(`Server listening at port ${config.port}`);
  });
});
