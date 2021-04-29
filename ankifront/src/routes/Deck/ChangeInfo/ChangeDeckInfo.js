import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, FieldChangeInfo, ChangeButton } from "./Styles";

const ChangeDeckInfo = (props) => {
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const deckId = props.match.params.id;

  useEffect(() => {
    axios.get(`${API_BASE_URL}/deck/getbyid/${deckId}`).then((res) => {
      setNewDescription(res.data[0].deck_description);
      setNewName(res.data[0].deck_name);
      document.title = `Change ${res.data[0].deck_name.toUpperCase()}`;
    });
  }, [API_BASE_URL, props.match.params.id, deckId]);

  const updateDeckInfo = () => {
    axios.post(`${API_BASE_URL}/deck/updatedeck`, {
      newDeckName: newName,
      newDeckDescription: newDescription,
      deckId: props.match.params.id,
    });
  };

  return (
    <Container>
      <FieldChangeInfo
        value={newName}
        variant="outlined"
        label="Name"
        onChange={(e) => setNewName(e.target.value)}
      />

      <FieldChangeInfo
        value={newDescription}
        variant="outlined"
        label="Description"
        onChange={(e) => setNewDescription(e.target.value)}
      />

      <ChangeButton
        variant="contained"
        color="secondary"
        onClick={() => updateDeckInfo()}
      >
        Change!
      </ChangeButton>
    </Container>
  );
};

export default ChangeDeckInfo;
