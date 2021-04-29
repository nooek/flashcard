import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const Text = styled.h2`
    font-size: 35px;
    color: black;
    @media(max-width: 400px){
        font-size: 32px;
    }
`