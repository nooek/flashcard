const express = require("express");
const route = express.Router();
const controller = require("../../controllers/CardController")

route.post("/", controller.deleteCard)

module.exports = route