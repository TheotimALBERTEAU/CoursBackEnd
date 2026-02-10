// const Game = require('../dao/sequelize/GameModel');
// const DAOGameSequelize = require('../dao/sequelize/daoGameSequelize');
const DAOFactory = require('../dao/DAOFactory');
// const daoGame = new DAOGameSequelize()

module.exports = {
    createGame: async (req) => {
        //insert game
        // Await car async et faut retourner la réponse json une fois la requête Insert  executée
        const gameTitle = req.title
        const myGame = await DAOFactory.getDAOGame().insert(gameTitle);

        return { code: "200", message: "Un message", data:  myGame};
    },

    getAll: async () => {
        //insert game
        // Await car async et faut retourner la réponse json une fois la requête Insert  executée
        const allGames = await DAOFactory.getDAOGame().selectAll();

        return { code: "200", message: "Un message", data:  allGames};
    }
}