import styled, { keyframes } from "styled-components";
import { Button } from "@material-ui/core";
import { GrFormClose } from "react-icons/gr"

export const FadeEffect = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`

export const HideSideBar = styled.div`
  display: none;
  @media(max-width: 800px)
  {
    display: ${props => props.show === true ? "flex" : "none"};
    flex-direction: column;
    z-index: 2;
    width: 150px;
    height: calc(100% - 90px);
    border: 1px solid black;
    position: absolute;
    top: 0;
    left: 0;
    animation-name: ${FadeEffect};
    animation-duration: 1000ms;
    border-bottom-right-radius: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    backdrop-filter: blur(4px);
  }
`

export const SideBarButton = styled(Button)`
  width: 95%;
  height: 50px;
  margin-top: 10px;
  text-transform: none;
  border-radius: 0;
  font-weight: bold;
  background-color: ${props => props.bgcolor};
`

export const Close = styled(GrFormClose)`
  width: 50px;
  height: 50px;
  color: red;
  position: absolute;
  mouse: pointer;
  bottom: 15px;
`