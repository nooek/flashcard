import { Button } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardView = styled.div`
  width: 450px;
  height: 600px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  top: 5px;
  margin-bottom: auto;
  box-shadow: 10px 10px 33px rgba(0, 0, 0, 0.3);
  @media (max-width: 550px) {
    width: 100%;
    height: 500px;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 30px;
  margin-top: auto;
  display: flex;
  justify-content: space-around;
`;

export const ShowBackButton = styled(Button)`
  background-color: black;
  text-transform: none;
  color: white;
  :hover {
    background-color: black;
  }
`;

export const Text = styled.h2`
  font-size: 22px;
  font-family: "Open Sans", sans-serif;
  color: black;
`;

export const PassQuestionButton = styled(Button)`
  background-color: black;
  width: 100%;
  border: 1px solid black;
  font-weight: bold;
  color: white;
  font-size: 17px;
  border: 0;
  :hover {
    background-color: black;
  }
`;
