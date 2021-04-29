import styled from "styled-components"

export const Deck = styled.div`
  width: 250px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
  justify-content: center;
  margin-bottom: ${props => props.isHome === true ? "0" : "10px"};
  word-break: break-all;
  overflow: hidden;
  @media(max-width: 300px){
    width: 200px;
    height: 280px;
  }
`;

export const DeckTitle = styled.h2`
  font-size: 23px;
  font-family: "Poppins", sans-serif;
  position: absolute;
  top: 20px;
  @media(max-width: 600px){
    font-size: 20px;
  }
`

export const StudyButton = styled.button`
  width: 160px;
  background-color: black;
  color: white;
  border: none;
  height: 40px;
  border-radius: 25px;
  text-transform: none;
  @media(max-width: 600px){
    position: relative;
    margin-top: 50px;
    width: 90%;
    height: 30px;
  }
  :focus{
    outline: none;
  }
  :hover{
    transform: scale(1.02);
  }
`;

export const SeeDescription = styled.button`
  width: 100%;
  height: 30px;
  text-transform: none;
  border-radius: 0;
  position: absolute;
  bottom: 0;
  background-color: #3f51b5;
  border: none;
  color: white;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;