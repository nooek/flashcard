import React from "react";
import { Link } from "react-router-dom";
import {
  Deck,
  DeckTitle,
  StudyButton,
} from "../../components/Deck/DecksStyle";
import { ShowLikes } from "./Styles";

const BestDecks = (props) => [
  props.decks.map((each) => {
    if (each.num_likes !== 0) {
      return (
        <Deck isHome={true} key={each.deckID}>
          <DeckTitle>{each.deck_name}</DeckTitle>
          <Link to={"/study/" + each.deckID} 
          style={{ textDecoration: "none", width: "100%" }}>
            <StudyButton
            variant="contained">Study</StudyButton>
          </Link>
          <ShowLikes>Likes: {each.num_likes}</ShowLikes>
        </Deck>
      );
    } else {
      return null;
    }
  }),
];

export default BestDecks;
