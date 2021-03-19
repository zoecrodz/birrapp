const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "postgres:/birrapp", //Conexion con la base de datos sin contraseña ni usario.
  // "postgres://blinzerd:12345@localhost:5432/birrapp", //Conexion WALKER.
  {
    logging: false,
    dialect: "postgres",
  }
);

module.exports = sequelize;
