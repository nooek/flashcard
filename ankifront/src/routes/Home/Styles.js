import styled from "styled-components";
import { AiFillStar } from "react-icons/ai"
import { GrAddCircle } from "react-icons/gr"

export const Container = styled.div`
  width: 100%;
  height: 100%;

`;

export const DecksContainer = styled.div`
  margin-bottom: auto;
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media(max-width: 500px){
    width: 100%;
    height: auto;
  }
`;

export const CreateDeckContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IconCreateDeck = styled(GrAddCircle)`
  width: 60px;
  height: 60px;
`

export const AccessLinksContainer = styled.div`
  width: 250px;
  height: auto;
  text-align: center;
  background-color: rgb(212, 211, 211);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: auto;
  @media(max-width: 500px){
    width: 60%;
    height: auto;
  }
`

export const AccessLinks =styled.h2`
  font-size: 20px;
  color: black;
  font-family: 'Open Sans', sans-serif;
  text-decoration: wavy;
  position: relative;
  left: 5px;
  @media(max-width: 600px){
    left: 0;
  }
`

export const DeckDesc = styled.h2`
    font-size: 20px;
    @media(max-width: 800px){
        font-size: 17px;
    }
`

export const OpenSidebar = styled.button`
  display: none;
  @media (max-width: 800px) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 40px;
    background: black;
    border-radius: 10px;
    color: white;
    border-radius: 0;
    display: ${(props) => (props.show === true ? "none" : "flex")};
  }
`;

export const MainDivContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  @media(max-width: 700px){
    width: 100%;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
`;

export const MainTexts = styled.h2`
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  margin-top: 100px;
  @media (max-width: 600px)
  {
    font-size: 20px;
  }
`

export const ShowLikes =  styled.h2`
  font-size: 15px;
  color: black;
`

export const Star = styled(AiFillStar)`
  position: relative;
  left: 10px;
  top: 5px;
  color: black;
  @media(max-width: 300px)
  {
    left: 5px;
  }
`