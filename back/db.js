const Sequelize = require("sequelize");

const sequelize = new Sequelize('postgres://localhost:5432/birrapp', {
  logging: false,
  dialect: "postgres",
  /* define: {
    freezeTableName: true //evita que agregue 's' al final del nombre de cada tabla
  } */
});

module.exports = sequelize;