import React, { useState, useEffect } from "react";
import { useUserData } from "../../../Helpers/DataUserContext";
import {
  Deck,
  DeckTitle,
  StudyButton,
  SeeDescription,
} from "../../../components/Deck/DecksStyle";
import {
  Container,
  MyLikesText,
  DecksContainer,
} from "./Styles";
import axios from "axios";
import { Link } from "react-router-dom"
import Heart from "react-animated-heart";
import Navbar from "../../../components/Navbar/NavBar";
import Sidebar from "../../../components/Navbar/SideBar/SideBar";
import Description from "../../../components/Description/Description";


const SeeAllLikes = () => {
  const [likes, setLikes] = useState([]);
  const [showDesc, setshowDesc] = useState(false);
  const { userData } = useUserData();
  const [Id, setID] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    updateLikes();
  }, []);

  const updateLikes = () => {
    axios
      .get(`${API_BASE_URL}/like/likes/searchlikes/${userData[0].user_email}`)
      .then((res) => {
        if (res.data.message) {
          setLikes([res.data.message]);
        } else {
          setLikes(res.data["Decks"]);
        }
      });
  };

  const dislike = (deck) => {
      console.log(deck)
      console.log(userData)
    axios
    .post("http://localhost:3001/api/like/likes/deletelike", {
      deck: deck.deckID,
      email: userData[0].user_email,
      totalLikes: deck.num_likes,
    })
    .then((res) => {
    console.log(res)
      if (res.data) {
        updateLikes();
      }
    });
  };

  const openDescription = (id) => {
    if (Id.includes(id)) {
      const removeIndex = Id.indexOf(id);
      Id.splice(removeIndex, 1);
    } else {
      setID([...Id, id]);
    }
    setshowDesc(!showDesc);
  };

  return (
    <Container>
        <Navbar />
        <Sidebar />
      <MyLikesText>My likes</MyLikesText>
      <DecksContainer>
        {likes.map((each, index) => {
          return (
            <Deck key={each.deckID}>
              <DeckTitle>{each.deck_name}</DeckTitle>
              <Link
                to={"/study/" + each.deckID + "/" + each.num_cards}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <StudyButton variant="contained">Study</StudyButton>
              </Link>

              <Heart
                style={{ position: "relative", top: "10px" }}
                isClick={true}
                onClick={() => dislike(each)}
              />

              <SeeDescription
                onClick={() => openDescription(index)}
                variant="contained"
                color="primary"
              >
                {Id.includes(index) ? "Hide description" : "See description"}
              </SeeDescription>

              <Description
                showDesc={showDesc}
                chosenId={Id}
                id={index}
                description={each.deck_description}
              />
            </Deck>
          );
        })}
      </DecksContainer>
    </Container>
  );
};

export default SeeAllLikes;
