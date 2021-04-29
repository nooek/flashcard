import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Bottom,
  ShowBackButton,
  Text,
  PassQuestionButton,
} from "./Styles";
import { CardView } from "../../../components/Card/CardView"
import Navbar from "../../../components/Navbar/NavBar"
import Sidebar from "../../../components/Navbar/SideBar/SideBar"
import { Redirect } from "react-router-dom"

const StudyDeck = (props) => {
  const [Position, setPosition] = useState(0);
  const [showBack, setShowBack] = useState(0);
  const [returnToHome, setReturnToHome] = useState(false)
  const [CardData, setCardData] = useState("");

  const deckId = props.match.params.id;
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  document.title = "Study"

  useEffect(() => {
    const date = new Date().toDateString()
    const date_splited = date.split(" ")
    console.log(date)
    console.log(date_splited)
  })

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/card/getbydeckid/${deckId}`)
      .then((res) => {
        setCardData(res.data);
      })
  }, [API_BASE_URL, deckId]);

  const goToNextQuestion = () => {
    if (Position !== CardData.length - 1) {
      setPosition(Position + 1);
    } else {
      setReturnToHome(true)
    }
    setShowBack(0);
  };

  return (
    <Container>
      <Navbar />
      <Sidebar />
      {
        CardData.length > 0 ?
      <CardView study={false}>
          {showBack === 0 ? (
            <Text>{CardData[Position].front}</Text>
          ) : (
            <Text>{CardData[Position].back}</Text>
          )}
   
        {showBack === 0 ? (
          <Bottom>
            <ShowBackButton onClick={() => setShowBack(1)}>
              Show awnser
            </ShowBackButton>
          </Bottom>
        ) : (
          <Bottom>
            <PassQuestionButton onClick={() => goToNextQuestion()} bgcolor="red">
              Next Question
            </PassQuestionButton>
          </Bottom>
        )}
      </CardView>
      : <h2 style={{marginBottom: "auto"}}>This deck don't have cards</h2>} 
      { returnToHome === true ? <Redirect to="/" /> : null }
    </Container>
  );
};

export default StudyDeck;