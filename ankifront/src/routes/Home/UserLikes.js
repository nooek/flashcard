import React from "react";
import {
  Deck,
  DeckTitle,
  StudyButton,
} from "../../components/Deck/DecksStyle";
import { Link } from "react-router-dom";

const UserLikes = (props) => [
  props.likes.map((each, index) => {
    if (index <= 1) {
      return (
        <Deck key={each.deckID} isHome={true}>
          <DeckTitle>{each.deck_name}</DeckTitle>
          <Link
            to={"/study/" + each.deckID}
            style={{ textDecoration: "none", width: "100%" }}
          >
            <StudyButton variant="contained">Study</StudyButton>
          </Link>
        </Deck>
      );
    }else{
      return null
    }
  }),
];

export default UserLikes;
