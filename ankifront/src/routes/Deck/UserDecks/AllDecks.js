import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUserData } from "../../../Helpers/DataUserContext";
import { Link } from "react-router-dom";
import {
  Container,
  DecksContainer,
  AddCardButton,
  MoreInfoIcon,
  SeeMoreInfo,
  ButtonsDropdown,
  YourDeckText,
} from "./Styles";
import {
  Deck,
  DeckTitle,
  StudyButton,
  SeeDescription
} from "../../../components/Deck/DecksStyle"

import Navbar from "../../../components/Navbar/NavBar"
import Sidebar from "../../../components/Navbar/SideBar/SideBar"
import Description from "../../../components/Description/Description"

const AllDecks = (props) => {
  const [Decks, setDecks] = useState([]);
  const { userData } = useUserData();
  const [showDesc, setshowDesc] = useState(false);
  const [Id, setID] = useState([]);
  const [IdMoreInfo, setIdMoreInfo] = useState(0);
  const [seeMoreInfo, setSeeMoreInfo] = useState(false);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

  useEffect(() => {
    document.title = props.title || ""
  }, [props.title])

  useEffect(() => {
    updateDecks()
  }, [])

  const updateDecks = () => {
    axios
    .get(`${API_BASE_URL}/deck/${userData[0].user_email}`)
    .then((res) => {
      setDecks(res.data);
    });
  }

  const deleteDeck = async (deckId) => {
    await axios
      .post("http://localhost:3001/api/deck/delete/deck", {
        deckId: deckId,
      })
    updateDecks()
  };

  const openDescription = (id) => {
    if (Id.includes(id)){
      const removeIndex = Id.indexOf(id)
      Id.splice(removeIndex, 1)
    }else{
      setID([...Id, id])
    }
    setshowDesc(!showDesc);
  };

  const openMoreInfo = (id) => {
    setIdMoreInfo(id);
    setSeeMoreInfo(!seeMoreInfo);
  };

  return (
    <Container>
      <Navbar />
      <Sidebar />
      <YourDeckText>My decks</YourDeckText>
      <DecksContainer>
        { Decks.length > 0 ? Decks.map((each, index) => {
          return (
            <Deck key={each.deckID}>
              <MoreInfoIcon onClick={(e) => openMoreInfo(index)} />
              {seeMoreInfo === true && index === IdMoreInfo ? (
                <SeeMoreInfo>
                  <ButtonsDropdown 
                  disabled={index !== IdMoreInfo ? true : false}
                  onClick={() => deleteDeck(each.deckID)} color="red">
                    Delete deck
                  </ButtonsDropdown>

                  <Link
                    style={{ textDecoration: "none", width: "100%" }}
                    to={"/details/" + each.deckID}
                  >
                    <ButtonsDropdown color="black">More Info</ButtonsDropdown>
                  </Link>
                </SeeMoreInfo>
              ) : null}
              <DeckTitle>{each.deck_name}</DeckTitle>
              <Link
                to={"/study/" + each.deckID}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <StudyButton variant="contained">Study</StudyButton>
              </Link>

              <Link
                to={"/createcard/" + each.deckID + "/" + each.num_cards}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  position: "absolute",
                  left: "0px",
                  bottom: "2px",
                }}
              >
                <AddCardButton variant="contained" color="primary">
                  Add card
                </AddCardButton>
              </Link>
              <SeeDescription
                onClick={() => openDescription(index)}
                variant="contained"
                color="primary"
              >
                {Id.includes(index)
                  ? "Hide description"
                  : "See description"}
              </SeeDescription>
              <Description showDesc={showDesc} chosenId={Id}
              id={index} description={each.deck_description}/>
            </Deck>
          );
        })
      : <h2>this is... empty</h2>}
      </DecksContainer>
    </Container>
  );
};

export default AllDecks;