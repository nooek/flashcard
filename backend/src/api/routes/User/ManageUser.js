const express =  require("express")
const route = express.Router()
const auth = require("../../helpers/TokenVerification")
const controller = require("../../controllers/UserController")

route.get("/", controller.getAllUsers)

route.get("/getuser", auth, controller.getUser)

route.post("/finduser", controller.findUserById)

route.post("/changeinfo", controller.updateUser)

module.exports = route