import styled from "styled-components";
import { Button } from "@material-ui/core";
import { HiOutlineMenu } from "react-icons/hi"
import { Link } from "react-router-dom";

export const NavBar = styled.div`
  width: 100%;
  height: 90px;
  margin-bottom: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  border-bottom-left-radius: 10px;
  margin-bottom: 90px;
  border-bottom-right-radius: 10px;
  @media(max-width: 800px){
    height: 60px;
  }
`

export const NavbarSectionsContainer = styled.div`
  position: absolute;
  right: 10px;
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Sections = styled(Button)`
  width: 160px;
  height: 50px;
  text-transform: none;
  border-radius: 0px;
  margin-left: 4px;
  position: relative;
  right: 10px;
  font-weight: bold;
  background-color: ${props => props.bgcolor};
  color: ${props => props.fontcolor};
  @media(max-width: 1000px){
    width: 125px;
  }
  @media(max-width: 800px)
  {
    display: none;
  }
  :hover{
    background-color: ${props => props.bgcolor};
  }
`

export const LogoDivLink = styled(Link)`
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: 0;
  top: 3px;
  margin-left: 10px;
  @media(max-width: 800px){
    top: 0;
    position: relative;
    width: 40px;
    height: 100%;
  }

`

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  left: 10px;
  top: 0;
  bottom: 0;
  cursor: pointer;
  @media(max-width: 800px)
  {
    height: 100%;
  }
`

export const Menu = styled(HiOutlineMenu)`
  display: none;  
  @media(max-width: 800px){
    display: flex;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`
