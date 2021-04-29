import styled, { keyframes } from "styled-components";
import { TextField } from "@material-ui/core";
import { AiOutlineEdit } from "react-icons/ai";

export const UserDataField = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  margin-bottom: 10px;
  align-items: center;
  @media(max-width: 600px)
  {
    flex-direction: column;
    height: 100px;
  }
`;

export const UserInfo = styled.h2`
    font-size: 15px;
    color: black;
    font-family: 'Poppins', sans-serif;
    @media(max-width: 600px)
    {
        font-size: 12px;
    }
`

export const EditFieldFade = keyframes`
from { opacity: 0; }
to { opacity: 1; }
`;

export const Edit = styled(AiOutlineEdit)`
  width: 100px;
  height: 50px;
  position: absolute;
  right: 0;
  @media (max-width: 600px) {
    width: 50px;
    height: 25px;
    position: relative;
  }
`;

export const EditField = styled(TextField)`
  height: auto;
  width: 400px;
  animation-name: ${EditFieldFade};
  animation-duration: 1000ms;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
