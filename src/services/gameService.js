// const Game = require('../dao/sequelize/GameModel');
// const DAOGameSequelize = require('../dao/sequelize/daoGameSequelize');
const DAOFactory = require('../dao/DAOFactory');
const {makeService} = require("./serviceHelper");
// const daoGame = new DAOGameSequelize()

module.exports = {
    createGame: async (req) => {
        //insert game
        // Await car async et faut retourner la réponse json une fois la requête Insert  executée
        const gameTitle = req.title
        const myGame = await DAOFactory.getDAOGame().insert(gameTitle);

        return makeService("200", "Ajout d'un jeu", myGame);
    },

    getAll: async () => {
        //insert game
        // Await car async et faut retourner la réponse json une fois la requête Insert  executée
        const allGames = await DAOFactory.getDAOGame().selectAll();

        return makeService("200", "Affichage de tous les jeux", allGames);
    }
}