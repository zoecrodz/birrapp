const User = require("./User");
const Category = require("./Category");
const Product = require("./Product");
const Item = require("./Item");
const Cart = require("./Cart");
const Review = require("./Review");

Product.belongsTo(Category);
Category.hasMany(Product);

Product.belongsToMany(Cart, {through: Item});
Cart.belongsToMany(Product, {through: Item});

Cart.belongsTo(User);
User.hasMany(Cart);

Review.belongsTo(Product);
Product.hasMany(Review);

Review.belongsTo(User);
User.hasMany(Review);



module.exports = {
    User, 
    Cart, 
    Category, 
    Item, 
    Product, 
    Review
}