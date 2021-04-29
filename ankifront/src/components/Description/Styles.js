import styled, { keyframes } from "styled-components"

export const Fade = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 0.95;
    }
`

export const DescriptionContainer = styled.div`
    width: 100%;
    height: calc(100% - 30px);
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    animation-name: ${Fade};
    animation-duration: 800ms;
    z-index: 3;
    overflow: hidden;
`
