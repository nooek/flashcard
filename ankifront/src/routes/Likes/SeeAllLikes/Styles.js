import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
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
  @media (max-width: 600px) {
    width: 100%;
    grid-column-gap: 10px;
    grid-template-columns: auto;
  }
`;

export const MyLikesText = styled.div`
  font-size: 35px;
  font-family: "Poppins", sans-serif;
`;