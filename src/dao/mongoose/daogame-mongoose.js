const Game = require("./models/GameModel");
const IDAOGame = require("../idaogame");

class DaogameMongoose extends IDAOGame {
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(gameTitle) {
        const newGame = new Game({"title" : gameTitle});

        return await newGame.save()
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return await Game.find();
    }
}

module.exports = DaogameMongoose;
