import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { CardView } from "../../../components/Card/CardView";
import {
  Container,
  Front,
  UserText,
  BottomButtonsContainer,
  AnotherCardButton,
  Input,
  ChangeSide,
} from "./Styles";

const CreateCard = (props) => {
  const [BlockButtonDone, setBlockDone] = useState(true);
  const [BlockButtonAnotherCard, setBlockCard] = useState(true);
  const [InputFrontText, setFrontText] = useState("");
  const [InputBackText, setBackText] = useState("");
  const [CardSide, setCardSide] = useState("front");
  const [Done, setDone] = useState(false);
  const [Add, setAdd] = useState(1);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  document.title = "Create card";

  // Verify if the fields aren't empty
  useEffect(() => {
    const fieldsValues = [InputFrontText, InputBackText];
    if (!fieldsValues.includes("")) {
      setBlockCard(false);
    } else {
      setBlockCard(true);
    }
  }, [InputFrontText, InputBackText]);

  const createCard = () => {
    const deckId = props.match.params.id;
    const numCards = props.match.params.cardsnum;
    axios
      .post(`${API_BASE_URL}/card/addcard`, {
        front: InputFrontText,
        back: InputBackText,
        id: deckId,
        numCards: parseInt(numCards) + Add,
      })
      .then(() => {
        setBlockDone(false);
        setAdd(Add + 1);
      });
  };

  return (
    <Container>
      <CardView study={true}>
        {CardSide === "front" ? (
          <Front>
            <UserText>Put here the front text</UserText>
            <Input
              onChange={(e) => setFrontText(e.target.value)}
              value={InputFrontText}
              multiline
              rowsMax="24"
              variant="outlined"
              label="Front text"
            />
          </Front>
        ) : (
          <Front>
            <UserText>Put here the back text</UserText>
            <Input
              onChange={(e) => setBackText(e.target.value)}
              value={InputBackText}
              multiline
              rowsMax="24"
              variant="outlined"
              label="Back text"
            />
          </Front>
        )}
        <BottomButtonsContainer>
          <ChangeSide onClick={() => setCardSide("back")}>Back</ChangeSide>
          <ChangeSide onClick={() => setCardSide("front")}>Front</ChangeSide>
        </BottomButtonsContainer>
      </CardView>

      <AnotherCardButton
        variant="contained"
        onClick={() => createCard()}
        disabled={BlockButtonAnotherCard}
      >
        Create!
      </AnotherCardButton>

      <AnotherCardButton
        onClick={() => setDone(true)}
        variant="contained"
        disabled={BlockButtonDone}
      >
        Done!
      </AnotherCardButton>
      {Done === true ? <Redirect to="/alldecks" /> : null}
    </Container>
  );
};

export default CreateCard;
