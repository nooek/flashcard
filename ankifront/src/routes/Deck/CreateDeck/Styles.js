import { TextField, Button } from "@material-ui/core";
import styled from "styled-components"
import { Fade } from "../../../assets/animations/Fade"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: "Fredoka One", cursive;
  align-items: center;
  justify-content: center;
  animation-name: ${Fade};
  animation-duration: 800ms;
`;

export const RegisterText = styled.h2`
  color: black;
  font-size: 45px;
  word-break: break-all;
  @media (max-width: 400px) {
    font-size: 25px;
  }
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