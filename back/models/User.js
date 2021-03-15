const db = require("../db");
const crypto = require("crypto");
const S = require("sequelize");

class User extends S.Model {};

User.init({
    firstName: {
        type: S.STRING, 
        allowNull: false
    },
    lastName: {
        type: S.STRING, 
        allowNull: false
    },
    email: {
        type: S.STRING, 
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: S.STRING, 
        allowNull: false
    },
    admin: {
        type: S.BOOLEAN,
        defaultValue: false
    },
    salt: S.STRING
}, {sequelize: db, modelName: "user"});

User.addHook("beforeCreate", (user) => {
    user.salt = crypto.randomBytes(20).toString("hex");
    user.password = user.hashPassword(user.password);
});

User.prototype.hashPassword = function (password) {
    return crypto.createHmac("sha1", this.salt).update(password).digest("hex");
};

User.prototype.validatePassword = function (recibPassword) {
    return this.hashPassword(recibPassword) === this.password
};


module.exports = User;