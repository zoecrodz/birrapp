const express = require("express");
const app = express();
const sequelize = require('./db');
const cors = require('cors');

const config = require("./server.config.js");

// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));

// Express Route File Requires
const authAPI = require("./routes");

app.use(express.json());
app.use(express.urlencoded());


app.use("/api", authAPI);


sequelize.sync({force: false})
  .then(() => {
    app.listen(config.port, () => {
      console.log(`Server listening at port ${config.port}`);
    });
  });