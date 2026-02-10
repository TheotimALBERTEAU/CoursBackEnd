const express = require('express');
const router = express.Router();
const Game = require('../dao/sequelize/models/GameModel');
const GameService = require('../services/game-service');

router.post('/create-game', async (req, res) => {
    const serviceResponse = await GameService.createGame(req.body);

    return res.json(serviceResponse);
});

router.get('/show-games', async (req, res) => {
    const serviceResponse = await GameService.getAll();
    return res.json(serviceResponse);
});

module.exports = router;