import styled from "styled-components"
import { TextField } from "@material-ui/core"
import { FaHeart } from "react-icons/fa"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(240, 243, 245);
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const SearchBar = styled(TextField)`
  width: 80%;
  height: 60px;
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

export const TopBar = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  text-align: right;
  align-items: center;
`

export const HeartCounterIcon = styled(FaHeart)`
  width: 25px;
  height: 25px;
  color: red;
  position: relative;
  left: 8px;
`

export const NumLikes = styled.h2`
  font-size: 15px;
  font-family: 'Open Sans';
  position: relative;
  left: 3px;
`