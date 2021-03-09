const db = require("../db");
const S = require("sequelize");

class Item extends S.Model {};

Item.init({
    qty: {
        type: S.INTEGER, 
        allowNull: false, 
        validate: {
            min: 1
        }
    },
}, {sequelize: db, modelName: "item"});


module.exports = Item;