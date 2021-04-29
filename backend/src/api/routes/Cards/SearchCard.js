const express = require("express")
const route = express.Router()
const controller = require("../../controllers/CardController")

route.get("/:id", controller.searchCard)

route.get("/getbydeckid/:id", controller.getCardByDeckId)

module.exports = route