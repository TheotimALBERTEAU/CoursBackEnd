const mongoose = require('mongoose');

const Game = mongoose.model('Game', {"title" : String}, "games");

module.exports = Game
