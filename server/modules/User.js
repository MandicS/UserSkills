const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'user',
    {
        user_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING 
        },
        email: {
            type: Sequelize.STRING 
        },
        password: {
            type: Sequelize.STRING 
        },
        birthday: {
            type: Sequelize.DATE
        }
    },
    {
        timestamps: false
    }
)