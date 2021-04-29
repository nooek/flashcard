import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import { Fade } from "../../../assets/animations/Fade"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-color: rgb(240, 243, 245);
  font-family: "Fredoka One", cursive;
  animation-name: ${Fade};
  animation-duration: 800ms;
`;

export const ButtonLogIn = styled(Button)`
  text-transform: none;
  width: 200px;
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const InputFields = styled(TextField)`
  width: 350px;
  margin-bottom: 10px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;