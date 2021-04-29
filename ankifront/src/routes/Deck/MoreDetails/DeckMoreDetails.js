import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  MainTexts,
  InformationContainer,
  DeckInformations,
  ChangeInformations,
  CardsInfoContainer,
  FrontCardText,
  DeleteIcon,
} from "./Styles";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/NavBar";
import Sidebar from "../../../components/Navbar/SideBar/SideBar";

const MoreDetails = (props) => {
  const [Deck, setDeck] = useState([]);
  const [Cards, setCards] = useState([]);
  const [message, setMessage] = useState("");
  const [DeleteCard, setDeleteCard] = useState(false);
  const [DeleteCardIds, setDeleteCardIds] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const deckId = props.match.params.id;
  document.title = `${Deck.deck_name} Details`;

  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  useEffect(() => {
    updateDeck();
    updateCards();
  }, []);

  const updateDeck = () => {
    axios.get(`${API_BASE_URL}/deck/getbyid/${deckId}`).then((res) => {
      setDeck(res.data[0]);
    });
  };

  const updateCards = () => {
    axios.get(`${API_BASE_URL}/card/getbydeckid/${deckId}`).then((res) => {
      if (!res.data.message) {
        setCards(res.data);
      } else {
        setMessage(res.data.message);
        setCards([])
      }
    });
  };

  const showDeleteOptions = (cardId) => {
    if (DeleteCardIds.includes(cardId)) {
      const idIndex = DeleteCardIds.indexOf(cardId);
      DeleteCardIds.splice(idIndex, 1);
    } else {
      setDeleteCardIds([...DeleteCardIds, cardId]);
    }
    setDeleteCard(!DeleteCard);
  };
  
  const deleteCard = (cardId) => {
    axios.post(`${API_BASE_URL}/card/delete`, {
      cardId: cardId,
      deckId: Deck.deckID,
      numCards: Deck.num_cards - 1
    })
    .then(res => {
      console.log(res)
      updateCards()
      updateDeck()
    })
  }

  return (
    <Container>
      <Navbar />
      <Sidebar />
      <MainTexts>Informations</MainTexts>
      <InformationContainer cards={false} id="deck-informations-container">
        <DeckInformations>Name: {Deck.deck_name}</DeckInformations>
        <DeckInformations>
          Description: {Deck.deck_description}
        </DeckInformations>
        <DeckInformations>Number of cards: {Deck.num_cards}</DeckInformations>
        <DeckInformations>
          Last time learned: {Deck.last_time_learned}
        </DeckInformations>
        <DeckInformations>Likes: {Deck.num_likes}</DeckInformations>
      </InformationContainer>

      <Link
        to={"/changedeckinfo/" + Deck.deckID}
        style={{ textDecoration: "none" }}
      >
        <ChangeInformations color="primary" variant="contained">
          Change info
        </ChangeInformations>
      </Link>

      <MainTexts>Cards</MainTexts>
      <InformationContainer cards={true} id="cards-informations-container">
        {Cards.map((each) => {
          return (
            <CardsInfoContainer key={each.cardID}>
              <FrontCardText key={each.front}>
                Front: {each.front}
              </FrontCardText>
              {DeleteCardIds.includes(each.cardID) ? (
                <div>
                  <button onClick={() => deleteCard(each.cardID)}>Delete</button>
                  <button onClick={() => showDeleteOptions(each.cardID)}>
                    Cancel
                  </button>
                </div>
              ) : (
                <DeleteIcon onClick={() => showDeleteOptions(each.cardID)} />
              )}
            </CardsInfoContainer>
          );
        })}
        <h2>{message}</h2>
      </InformationContainer>
    </Container>
  );
};

export default MoreDetails;
