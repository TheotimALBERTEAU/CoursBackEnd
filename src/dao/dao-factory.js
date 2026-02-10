module.exports = {

    /**
     * Retourne un IDAOGame
     */
    getDAOGame : () => {
        // En amont on aura une config qui permet de savoir le quel on active
        // MODE : SEQUELIZE
        if (process.env.DB_MODE === "mysql") {
            const DAOGameSequelize = require("./sequelize/daogame-sequelize");
            return new DAOGameSequelize();
        }
        // MODE : Mongoose
        else if (process.env.DB_MODE === "mongodb") {
            const DAOGameMongoose = require("./mongoose/daogame-mongoose");
            return new DAOGameMongoose();
        }

        const DAOGameMock = require("./mock/daogame-mock");
        return new DAOGameMock();
    }
}