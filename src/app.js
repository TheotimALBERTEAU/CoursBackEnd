require('dotenv').config();
const express = require('express');
// Initialiser l'application back
const app = express();
app.use(express.json());


const gameRouter = require('./routes/game-routes');

app.use("/game", gameRouter);

// --------------------
// MySQL
// --------------------
if (process.env.DB_MODE === "mysql") {
    require('./dao/sequelize/connection').connect_sequelize();

// --------------------
// MongoDB
// --------------------
} else if (process.env.DB_MODE === "mongodb") {
    require('./dao/mongoose/connection').connect_mongoose();
}
// Démarrer le serveur avec le port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Le serveur a démarré sur le port ${PORT}`);
});