import styled, { keyframes } from "styled-components"
import { TextField, Button } from "@material-ui/core"
import { FiMoreVertical } from "react-icons/fi"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const MoreInfoIcon = styled(FiMoreVertical)`
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 50px;
  color: black;
  pointer: mouse;
`

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const SearchBar = styled(TextField)`
  width: 80%;
  height: 60px;
  margin-top: 10px;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const DecksContainer = styled.div`
width: 100%;
height: auto;
display: grid;
grid-template-columns: repeat(auto-fit, 250px);
grid-column-gap: 10px;
justify-content: center;
align-items: center;
grid-auto-flow: dense;
@media(max-width: 600px){
  width: 100%;
  grid-column-gap: 10px;
  grid-template-columns: auto;
}
`;

export const AddCardButton = styled(Button)`
width: 100%;
height: 30px;
text-transform: none;
border-radius: 0;
margin-top: auto;
margin-bottom: 33px;
background-color: #3f51b5;
border: none;
color: white;
border-top: 1px solid black;
border-bottom: 1px solid black;
`;

const Fade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const SeeMoreInfo = styled.div`
  width: 100px;
  height: 150px;
  border: 1px solid rgb(224, 222, 222);
  position: absolute;
  right: 0;
  top: 40px;
  animation-name: ${Fade};
  animation-duration: 1000ms;
  z-index: 2;
  background: rgb(224, 222, 222);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
`

export const ButtonsDropdown = styled.button`
  width: 100%;
  height: 35px;
  color: white;
  font-size: 14px;
  margin-top: 5px;
  text-transform: none;
  background: ${props => props.color};
  border: none;
`

export const YourDeckText = styled.h2`
  font-size: 35px;
  font-family: "Poppins", sans-serif;
`;