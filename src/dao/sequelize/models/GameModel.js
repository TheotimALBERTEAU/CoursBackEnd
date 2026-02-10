const { DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Game = sequelize.define(
    'Game',
    {
        uid: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
)

module.exports = Game;
