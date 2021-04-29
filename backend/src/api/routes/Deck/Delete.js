const express = require("express");
const route = express.Router();
const controller = require("../../controllers/DeckController")

route.post("/deck", controller.deleteDeck)

module.exports = route;
