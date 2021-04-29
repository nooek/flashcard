import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUserData } from "../../../Helpers/DataUserContext";
import { Container, RegisterText, ButtonLogIn, InputFields } from "./Styles";

const CreateDeck = (props) => {
  const { userData } = useUserData();
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Message, setMessage] = useState("");
  const [Block, setBlock] = useState(false);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  useEffect(() => {
    const dataFields = [Name];
    if (dataFields.includes("")) {
      setBlock(true);
    } else {
      setBlock(false);
    }
  }, [Name]);

  const createDeck = () => {
    axios
      .post(`${API_BASE_URL}/deck/deckadd`, {
        name: Name,
        owner: userData[0].user_email,
        description: Description,
      })
      .then((res) => {
        if (res.data) {
          setMessage("Deck created succesfully!");
        } else {
          setMessage("Error, please try again");
        }
      });
    setName("");
    setDescription("");
  };

  return (
    <Container>
      <RegisterText>Create Deck</RegisterText>
      <InputFields
        value={Name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        inputProps={{ maxLength: 30 }}
        label="Name"
        required
      />

      <InputFields
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
        variant="outlined"
        inputProps={{ maxLength: 80 }}
        label="Description"
      />

      <ButtonLogIn
        onClick={() => createDeck()}
        variant="contained"
        color="secondary"
        disabled={Block}
      >
        Create!
      </ButtonLogIn>
      <h2 style={{ color: "green" }}>{Message}</h2>
    </Container>
  );
};

export default CreateDeck;