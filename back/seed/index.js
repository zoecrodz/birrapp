const { User, Cart, Category, Item, Picture, Product, Review } = require("../models");
const userArray = require("./user");
const productArray = require("./product");
const categoryArray = require("./category");
const reviewArray = require("./review");
const itemArray = require("./item");
const cartArray = require("./cart");
const pictureArray = require("./picture");

let userPromise = User.bulkCreate(userArray)
  .then(res => {
    console.log(`-->usuarios creados`);
    return res;
  });

let productPromise = Product.bulkCreate(productArray)
  .then(res => {
    console.log(`-->productos creados`);
    return res;
  });

let cartPromise = Cart.bulkCreate(cartArray)
  .then(res => {
    console.log(`-->carritos creados`);
    return res;
  });

let categoryPromise = Category.bulkCreate(categoryArray)
  .then(res => {
    console.log(`-->categorias creadas`);
    return res;
  });

let reviewPromise = Review.bulkCreate(reviewArray)
  .then(res => {
    console.log(`-->reviews creados`);
    return res;
  });

/* let itemPromise = Item.bulkCreate(itemArray)
  .then(res => {
    console.log(`-->items creados`);
    return res;
  }); */

let picturePromise = Picture.bulkCreate(pictureArray)
  .then(res => {
    console.log(`-->pictures creados`);
    return res;
  });

Promise.all([userPromise, productPromise, cartPromise, categoryPromise, reviewPromise, picturePromise]).then(() => console.log(`----Seed terminado----`));