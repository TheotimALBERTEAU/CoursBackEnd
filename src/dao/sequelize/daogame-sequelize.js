const Game = require("./models/GameModel");
const IDAOGame = require("../idaogame");

class DAOGameSequelize extends IDAOGame {
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(game) {
        return await Game.create(game);
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return await Game.findAll();
    }
}

module.exports = DAOGameSequelize;
