const mongoose = require('mongoose');

const Game = mongoose.model(
    'Game',
    {
        uid : String,
        "title" : String
    },
    "games");

module.exports = Game
