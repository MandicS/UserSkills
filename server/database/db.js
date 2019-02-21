const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize('profils', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
        acquire: 30000,
    }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;