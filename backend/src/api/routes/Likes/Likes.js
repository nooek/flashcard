const express = require("express")
const route = express.Router()
const controller = require("../../controllers/LikesController")

route.post("/addlike", controller.addLike)

route.post("/deletelike", controller.removeLike)

route.get("/searchlikes/:email",  controller.searchLikes)

route.get("/getuserlikes/:useremail", controller.getLikes)

module.exports = route