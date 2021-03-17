const db = require("../db");
const S = require("sequelize");

class Cart extends S.Model {}

Cart.init(
  {
    paymentMethod: {
      type: S.STRING,
      allowNull: false,
      //enum
    },
    table: {
      type: S.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    state: {
      type: S.ENUM({
        values: ["PENDING", "WAITING", "COMPLETED", "REJECTED"],
      }),
      defaultValue: "PENDING",
    },
    total: {
      type: S.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
  },
  { sequelize: db, modelName: "cart" }
);

// Cart.prototype.total = function () {
//   let precio;
//   this.products.map((item) => {
//     precio.push(item.item.qty >= 1 ? item.price * item.item.qty : 0);
//   });
//   console.log(precio);
//   this.total = precio;
// };

module.exports = Cart;
