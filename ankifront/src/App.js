import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

// Contexts
import UserDataContext from "./Helpers/DataUserContext";
import UserLoggedContext from "./Helpers/UserLoggedContext";
import SidebarContext from "./Helpers/SidebarContext";

// Routes
import Register from "./routes/User/Register/Register";
import Login from "./routes/User/Login/Login";
import Home from "./routes/Home/Home";
import CreateDeck from "./routes/Deck/CreateDeck/CreateDeck";
import AllDecks from "./routes/Deck/UserDecks/AllDecks";
import CreateCard from "./routes/Deck/Cards/CreateCard";
import StudyDeck from "./routes/Deck/StudyDeck/StudyDeck";
import EveryoneDeck from "./routes/Deck/PublicDecks/EveryoneDecks";
import Profile from "./routes/User/Profile/Profile";
import Contact from "./routes/Contact/Contact";
import MoreDetails from "./routes/Deck/MoreDetails/DeckMoreDetails";
import ChangeDeckInfo from "./routes/Deck/ChangeInfo/ChangeDeckInfo";
import SeeAllLikes from "./routes/Likes/SeeAllLikes/SeeAllLikes"

// HOCs
import GetLogged from "./HOCs/GetLogged";
import CheckUserLogged from "./HOCs/CheckUserLogged";

const App = () => {
  return (
    <SidebarContext>
      <UserDataContext>
        <UserLoggedContext>
          <CheckUserLogged>
            <GetLogged>
              <StylesProvider injectFirst>
                <Router>
                  <Switch>
                    <GetLogged>
                      <Route
                        path="/"
                        exact
                        render={(props) => <Home title="Home" />}
                      />
                      <Route
                        path="/login"
                        render={(props) => <Login title="Login" />}
                      />
                      <Route
                        path="/register"
                        render={(props) => <Register title="Register" />}
                      />
                      <Route
                        path="/createdeck"
                        render={(props) => <CreateDeck title="Create Deck" />}
                      />
                      <Route
                        path="/alldecks"
                        render={(props) => <AllDecks title="My Decks" />}
                      />
                      <Route
                        path="/createcard/:id/:cardsnum"
                        component={CreateCard}
                      />
                      <Route
                        path="/decks"
                        render={(props) => (
                          <EveryoneDeck title="Public Decks" />
                        )}
                      />
                      <Route path="/study/:id" component={StudyDeck} />
                      <Route
                        path="/profile"
                        render={(props) => <Profile title="Profile" />}
                      />
                      <Route
                        path="/contact"
                        render={(props) => <Contact title="Contact" />}
                      />
                      <Route path="/details/:id" component={MoreDetails} />
                      <Route
                        path="/changedeckinfo/:id"
                        component={ChangeDeckInfo}
                      />
                      <Route 
                        path="/likes"
                        render={props => <SeeAllLikes title="My likes" />}
                      />
                    </GetLogged>
                  </Switch>
                </Router>
              </StylesProvider>
            </GetLogged>
          </CheckUserLogged>
        </UserLoggedContext>
      </UserDataContext>
    </SidebarContext>
  );
};

export default App;