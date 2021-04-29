import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUserData } from "../../../Helpers/DataUserContext";
import { Link } from "react-router-dom";
import Heart from "react-animated-heart";

import {
  Container,
  SearchBarContainer,
  DecksContainer,
  SearchBar,
  TopBar,
  HeartCounterIcon,
  NumLikes,
} from "./Styles";

import {
  DeckTitle,
  Deck,
  StudyButton,
  SeeDescription,
} from "../../../components/Deck/DecksStyle";

import Navbar from "../../../components/Navbar/NavBar";
import Sidebar from "../../../components/Navbar/SideBar/SideBar";
import Description from "../../../components/Description/Description";

const EveryoneDeck = (props) => {
  const [Decks, setDecks] = useState([]);
  const [showDesc, setshowDesc] = useState(false);
  const [Id, setID] = useState([]);
  const { userData } = useUserData();
  const [Keyword, setKeyword] = useState("");
  const [Likes, setLikes] = useState([]);
  const [message, setMessage] = useState("")

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

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
          setLikes(res.data["Likes"]);
        }
      });
  };

  useEffect(() => {
    if (Keyword.length <= 0) {
      updateDecks();
      console.log(Decks)
    }
  }, [Keyword]);

  const updateDecks = () => {
    axios
      .get(`${API_BASE_URL}/deck/getdecks/${userData[0].user_email}`)
      .then((res) => {
        if (res.data.message) {
          setMessage(res.data.message);
        } else {
          setDecks(res.data);
        }
      });
  };

  useEffect(() => {
    if (Keyword.length > 0) {
      axios
        .post(`${API_BASE_URL}/deck/search`, {
          key: Keyword,
          userEmail: userData[0].user_email,
        })
        .then((res) => {
          setDecks(res.data);
        });
    }
  }, [Keyword, API_BASE_URL, userData]);

  const openDescription = (id) => {
    if (Id.includes(id)) {
      const removeIndex = Id.indexOf(id);
      Id.splice(removeIndex, 1);
    } else {
      setID([...Id, id]);
    }
    setshowDesc(!showDesc);
  };

  const like = (deck) => {
    axios
      .post("http://localhost:3001/api/like/likes/addlike", {
        deck: deck.deckID,
        email: userData[0].user_email,
        totalLikes: deck.num_likes,
      })
      .then((res) => {
        if (res.data) {
          updateLikes();
          updateDecks();
        }
      });
  };

  const dislike = (deck) => {
    axios
      .post("http://localhost:3001/api/like/likes/deletelike", {
        deck: deck.deckID,
        email: userData[0].user_email,
        totalLikes: deck.num_likes,
      })
      .then((res) => {
        if (res.data) {
          updateLikes();
          updateDecks();
        }
      });
  };

  console.log(Decks)

  return (
    <Container>
      <Navbar />
      <Sidebar />
      <SearchBarContainer>
        <SearchBar
          variant="outlined"
          label="Search"
          onChange={(e) => setKeyword(e.target.value)}
        />
      </SearchBarContainer>
      <DecksContainer>
        {message ? <h2>{message}</h2> : null}
        {Decks.length > 0 ? Decks.map((each, index) => {
          return (
            <Deck key={each.deckID}>
              <TopBar>
                <NumLikes>{each.num_likes} Likes</NumLikes>
                <HeartCounterIcon />
              </TopBar>
              <DeckTitle>{each.deck_name}</DeckTitle>
              <Link
                to={"/study/" + each.deckID + "/" + each.num_cards}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <StudyButton variant="contained">Study</StudyButton>
              </Link>

              <Heart
                style={{ position: "relative", top: "10px" }}
                isClick={Likes.includes(each.deckID) ? true : false}
                onClick={
                  Likes.includes(each.deckID)
                    ? () => dislike(each)
                    : () => like(each)
                }
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
        }) : null}
      </DecksContainer>
    </Container>
  );
};

export default EveryoneDeck;
