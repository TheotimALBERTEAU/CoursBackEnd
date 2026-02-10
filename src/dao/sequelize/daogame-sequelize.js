const Game = require("./models/GameModel");
const IDAOGame = require("../idaogame");

class DAOGameSequelize extends IDAOGame {
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(Title) {
        return await Game.create({
            title: gameTitle
        })
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return await Game.findAll();
    }
}

module.exports = DAOGameSequelize;
