import styled from "styled-components"
import { Button } from "@material-ui/core";
import { AiOutlineEdit } from "react-icons/ai";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    background-color: rgb(240, 243, 245);
    @media(max-width: 600px)
    {
        justify-content: flex-start;
    }
`

export const UserInfoContainer = styled.div`
    width: 100%;
    height: 500px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Username = styled.h2`
    font-size: 30px;
    font-family: 'Poppins', sans-serif;
    color: black;
`

export const UserDataField = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
    margin-bottom: 10px;
    align-items: center;
    flex-direction: center;
    @media(max-width: 600px)
    {
      flex-direction: column;
      height: 100px;
    }
`

export const UserInfo = styled.h2`
    font-size: 15px;
    color: black;
    font-family: 'Poppins', sans-serif;
    @media(max-width: 600px)
    {
      font-size: 12px;
    }
`

export const Edit = styled(AiOutlineEdit)`
  width: 100px;
  height: 50px;
  position: absolute;
  right: 0;
  @media(max-width: 600px)
  {
      width: 50px;
      height: 25px;
        position: relative;      
  }
`;

export const SaveButton = styled(Button)`
  text-transform: none;
  border-radius: 20px;
  width: 200px;
  border-radius: 0;
  margin-bottom: auto;
  @media(max-width: 600px)
  {
      width: 100%;
  }
`;