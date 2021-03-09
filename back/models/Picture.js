const db = require("../db");
const S = require("sequelize");

class Picture extends S.Model {};

Picture.init({
    url: {
        type: S.STRING, 
        allowNull: false
    },
}, {sequelize: db, modelName: "picture"});


module.exports = Picture;