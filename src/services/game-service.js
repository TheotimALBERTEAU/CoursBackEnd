const DAOFactory = require('../dao/dao-factory');
const {makeService} = require("./service-helper");
const { v4 : uuidv4 }= require('uuid');

module.exports = {
    createGame: async (reqBody) => {
        // L'objet jeu a insérer
        const generatedId = uuidv4(); // id générer
        let game = { uid: generatedId, title: reqBody.title };

        //insert game
        // Await car async et faut retourner la réponse json une fois la requête Insert  executée
        const myGame = await DAOFactory.getDAOGame().insert(game);

        return makeService("200", "Ajout d'un jeu", myGame);
    },

    getAll: async () => {
        //insert game
        // Await car async et faut retourner la réponse json une fois la requête Insert  executée
        const allGames = await DAOFactory.getDAOGame().selectAll();

        return makeService("200", "Affichage de tous les jeux", allGames);
    }
}