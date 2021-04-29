import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import { Fade } from "../../../assets/animations/Fade";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  animation-name: ${Fade};
  animation-duration: 800ms;
`;

export const SidesSimilarStyle = `
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-family: 'Fredoka One', cursive;
    background-color: rgb(240, 243, 245);
`;

export const AnimationSide = styled.div`
  ${SidesSimilarStyle}
  color: blue;
  @media (max-width: 700px) {
    display: none;
    width: 0;
  }
`;

export const FormSide = styled.div`
  ${SidesSimilarStyle};
  color: red;
  @media (max-width: 700px) {
    width: 100%;
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
