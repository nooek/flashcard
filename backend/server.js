const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Working!");
});

dotenv.config();

// Middlewares
app.use(express.json());
app.use(cors());

// User Routes
const manageUserRoute = require("./src/api/routes/User/ManageUser");
const registerUserRoute = require("./src/api/routes/User/RegisterUser");
const loginUserRoute = require("./src/api/routes/User/LoginUser");

app.use("/api/user", manageUserRoute);
app.use("/api/user/register", registerUserRoute);
app.use("/api/user/login", loginUserRoute);

// User Deck Routes
const addDeckRoute = require("./src/api/routes/Deck/AddDeck");
const deleteDeckRoute = require("./src/api/routes/Deck/Delete");
const updateDeckRoute = require("./src/api/routes/Deck/UpdateDeck");
const manageDecksRoute = require("./src/api/routes/Deck/ManageDecks");

app.use("/api/deck/deckadd", addDeckRoute);
app.use("/api/deck/delete", deleteDeckRoute);
app.use("/api/deck", manageDecksRoute);
app.use("/api/deck/updatedeck", updateDeckRoute);

// User Card Routes
const addCardRoute = require("./src/api/routes/Cards/CreateCard");
const searchCardRoute = require("./src/api/routes/Cards/SearchCard");
const deleteCardRoute = require("./src/api/routes/Cards/DeleteCard");

app.use("/api/card/addcard", addCardRoute);
app.use("/api/card", searchCardRoute);
app.use("/api/card/delete", deleteCardRoute);

// User likes route
const userLikeRoute = require("./src/api/routes/Likes/Likes");
app.use("/api/like/likes", userLikeRoute);

module.exports = app;
