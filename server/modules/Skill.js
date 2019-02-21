const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'skill',
    {
        skill_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING 
        },
        description: {
            type: Sequelize.STRING 
        },
        user_id: {
            type: Sequelize.INTEGER,
        }
    },
    {
        timestamps: false
    },
)