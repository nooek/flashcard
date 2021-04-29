import axios from "axios";
import React, { useEffect, useState } from "react";
import { useUserData } from "../../Helpers/DataUserContext";
import { Link } from "react-router-dom";
import {
  Container,
  DecksContainer,
  MainDivContent,
  CreateDeckContainer,
  IconCreateDeck,
  MainTexts,
  Star,
  AccessLinksContainer,
  AccessLinks,
} from "./Styles";
import Navbar from "../../components/Navbar/NavBar";
import Sidebar from "../../components/Navbar/SideBar/SideBar";
import UserLikes from "./UserLikes";
import BestDecks from "./BestDecks";

const Home = (props) => {
  const { userData } = useUserData();
  const [Likes, setLikes] = useState([]);
  const [topTwoLikedDecks, setTopTwoLikedDecks] = useState([]);
  
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    document.title = props.title || ""
  }, [props.title])

  useEffect(() => {
    axios.post(`${API_BASE_URL}/deck/gettopdecks`).then((res) => {
      setTopTwoLikedDecks(res.data);
    })
  }, [API_BASE_URL]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/like/likes/getuserlikes/${userData[0].user_email}`)
      .then((res) => {
        setLikes(res.data);
      });
  }, [API_BASE_URL, userData]);
  
  return (
    <Container>
      <Navbar />
      <Sidebar />

      <MainDivContent>
        <MainTexts>Create Deck</MainTexts>
        <CreateDeckContainer>
          <Link to="/createdeck">
            <IconCreateDeck />
          </Link>
        </CreateDeckContainer>

        <MainTexts>My likes</MainTexts>
        {Likes.message ? (
          <h2>{Likes.message}</h2>
        ) : (
          <DecksContainer>
            <UserLikes likes={Likes} />
          </DecksContainer>
        )}

        <AccessLinksContainer>
          <Link to="/likes" style={{ textDecoration: "none", color: "black" }}>
            <AccessLinks>See all likes</AccessLinks>
          </Link>
        </AccessLinksContainer>
        
        <MainTexts>
          Top decks
          <Star />
        </MainTexts>

        <DecksContainer>
          <BestDecks decks={topTwoLikedDecks} />
        </DecksContainer>

        <AccessLinksContainer>
          <Link to="/decks" style={{ textDecoration: "none", color: "black" }}>
            <AccessLinks>See all decks</AccessLinks>
          </Link>
        </AccessLinksContainer>
      </MainDivContent>
    </Container>
  );
};

export default Home;
