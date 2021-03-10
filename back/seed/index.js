const { User, Cart, Category, Item, Picture, Product, Review } = require("../models");
const userArray = require("./user");
const productArray = require("./product");
const categoryArray = require("./category");
const reviewArray = require("./review");
const itemArray = require("./item");
const cartArray = require("./cart");
const pictureArray = require("./picture");

/** Al crear una tabla que contiene un FK. El método bulkCreate revisa que 
 *  dicho id exista en la tabla a la cual quiero relacionar. Por ende se debe
 *  controlar el orden en que se crean las tablas. Primero debo crear las que no 
 *  tienen relación con ningunga otra tabla (en su interior no tienen FK), 
 *  y luego el resto.
 *  Orden de creación:
 *    1-Users
 *    2-Category
 * 
 *    3-Cart
 *    4-Product
 * 
 *    5-Picture
 *    6-Review
 *    7-Items
 *  *El orden no necesariamente debe ser este pero un orden posible.
 */

User.bulkCreate(userArray)
  .then(() => {
    console.log(`-->usuarios creados`);
    Category.bulkCreate(categoryArray)
      .then(() => {
        console.log(`-->categorias creadas`);
        Cart.bulkCreate(cartArray)
          .then(() => {
            console.log(`-->carritos creados`);
            Product.bulkCreate(productArray)
              .then(() => {
                console.log(`-->productos creados`);
                Picture.bulkCreate(pictureArray)
                  .then(() => {
                    console.log(`-->pictures creados`);
                    Review.bulkCreate(reviewArray)
                      .then(() => {
                        console.log(`-->reviews creados`);
                        Item.bulkCreate(itemArray)
                          .then(res => {
                            console.log(`-->items creados`);
                            return res;
                          })
                          .then(() => console.log(`----Seed terminado----`));
                      });
                  });
              });
          });
      });
  });



/*
let userPromise = User.bulkCreate(userArray)
  .then(res => {
    console.log(`-->usuarios creados`);
    return res;
  });

let categoryPromise = Category.bulkCreate(categoryArray)
  .then(res => {
    console.log(`-->categorias creadas`);
    return res;
  });

let cartPromise = Cart.bulkCreate(cartArray)
  .then(res => {
    console.log(`-->carritos creados`);
    return res;
  });

let productPromise = Product.bulkCreate(productArray)
  .then(res => {
    console.log(`-->productos creados`);
    return res;
  });

let picturePromise = Picture.bulkCreate(pictureArray)
  .then(res => {
    console.log(`-->pictures creados`);
    return res;
  });

let reviewPromise = Review.bulkCreate(reviewArray)
  .then(res => {
    console.log(`-->reviews creados`);
    return res;
  });

let itemPromise = Item.bulkCreate(itemArray)
  .then(res => {
    console.log(`-->items creados`);
    return res;
  });

Promise.all([userPromise, productPromise, cartPromise, categoryPromise, reviewPromise, itemPromise, picturePromise])
  .then(() => console.log(`----Seed terminado----`));
*/