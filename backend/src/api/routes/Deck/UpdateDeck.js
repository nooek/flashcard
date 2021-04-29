const express = require("express")
const route = express.Router()
const controller = require("../../controllers/DeckController")

route.post("/", controller.updateDeck)

module.exports = route;