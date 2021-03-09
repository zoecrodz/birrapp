const db = require("../db");
const S = require("sequelize");

class Cart extends S.Model {};

Cart.init({
    paymentMethod: {
        type: S.STRING, 
        allowNull: false, 
        //enum
    },
    table: {
        type: S.INTEGER,
        allowNull: false, 
        validate: {
            min: 0
        }
    }, 
    state: {
        type: S.STRING,
        defaultValue: "PENDING", 
        //enum
    },
}, {sequelize: db, modelName: "cart"});


module.exports = Cart;