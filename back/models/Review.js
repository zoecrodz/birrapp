const db = require("../db");
const S = require("sequelize");

class Review extends S.Model {};

Review.init({
    title: {
        type: S.STRING, 
        allowNull: false, 
    },
    description: {
        type: S.TEXT, 
        allowNull: false
    }, 
    stars: {
        type: S.FLOAT, 
        defaultValue: 1,
        validate: {
            max: 5, 
            min: 0, 
        }
    },
}, {sequelize: db, modelName: "review"});


module.exports = Review;