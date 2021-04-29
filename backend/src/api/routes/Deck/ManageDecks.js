const express = require("express");
const route = express.Router();
const controller = require("../../controllers/DeckController")

route.get("/:email", controller.getDecksWithEmail)

route.get("/", controller.getAllDecks)

route.get("/getdecks/:userEmail", controller.getDecksFiltered)

route.post("/search", controller.getDecksBySearch)

route.get("/getbyid/:deckid", controller.getDecksById)

route.post("/gettopdecks", controller.getTopTwoLikes)

route.get("/orderbylikes", controller.getDecksOrderedByLikes)

module.exports = route;
