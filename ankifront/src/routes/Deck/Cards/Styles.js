import styled from "styled-components";
import { Button, TextField } from "@material-ui/core"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Front = styled.div`
  width: 93%;
  height: 93%;
  margin-top: 20px;
  text-align: center;
`;

export const UserText = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
`;

export const BottomButtonsContainer = styled.div`
  width: 100%;
  height: 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AnotherCardButton = styled(Button)`
  background-color: black;
  color: white;
  text-transform: none;
  width: 220px;
  height: 40px;
  font-size: 17px;
  :first-of-type{
    margin-top: 15px;
  }
  margin-top: 10px;

  :hover {
    background-color: black;
  }

  @media(max-width: 500px){
    width: 100%;

  }
`;

export const Input = styled(TextField)`
  width: 90%;
  height: 2px;
`;

export const ChangeSide = styled(Button)`
    width: 223px;
    height 100%;
    background-color: black;
    color: white;
    border: 1px solid white;
    text-transform: none;
    border-radius: 0px;
    :hover{
        background-color: black;
    }
`;