const { DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Game = sequelize.define(
    'Game',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
)

module.exports = Game;
