import styled from "styled-components"
import { Button } from "@material-ui/core"
import { AiOutlineDelete } from "react-icons/ai"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
`

export const MainTexts = styled.h2`
    font-size: 35px;
    font-family: 'Comic sans', sans-serif;
    color: black;
    @media(max-width: 400px){
        font-size: 10vw;
    }
`

export const InformationContainer = styled.div`
    width: 100%;
    height: auto;
    border:${props => props.cards === false ? 
    "1px solid black"
    : "none"};
    text-align: left;
    display: flex;
    flex-direction: column;
`

export const DeckInformations = styled.h2`
    font-family: 'Comic sans', sans-serif;
    font-size: 20px;
`

export const ChangeInformations = styled(Button)`
    width: 200px;
    text-transform: none;
    margin-top: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    @media(max-width: 300px){
        width: 100%;
    }
`

export const CardsInfoContainer = styled.div`
    width: 100%;
    border: 1px solid black;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    align-text: center;
    @media(max-width: 500px)
    {
        flex-direction: column;
        height: auto;
    }
`

export const FrontCardText = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 19px;
    color: black;

    @media(max-width: 500px)
    {
        position: relative;
    }
`

export const DeleteIcon = styled(AiOutlineDelete)`
    width: 35px;
    height: 35px;
    color: red;

    @media(max-width: 500px)
    {
        position: relative;
    }
`

