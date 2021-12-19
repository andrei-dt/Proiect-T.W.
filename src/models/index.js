const dbConfig = require("../config/db.config.js");

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.quotes = require("./quote.model.js")(sequelize, DataTypes);
db.translations = require("./translation.model.js")(sequelize, DataTypes);
db.quotes.associate(db.sequelize.models);
db.translations.associate(db.sequelize.models);
module.exports = db;