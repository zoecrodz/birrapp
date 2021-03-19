const db = require("../db");
const S = require("sequelize");

class Item extends S.Model {};

Item.init({
    qty: {
        type: S.INTEGER, 
        allowNull: false, 
        validate: {
            min: 1
        },
        defaultValue: 1
    },
}, {sequelize: db, modelName: "item"});

Item.prototype.operation = function (sumaResta) {

    return sumaResta == "suma" && this.qty > 0 ? this.increment({ qty: + 1 }) : this.decrement({ qty: + 1 })

}

module.exports = Item;