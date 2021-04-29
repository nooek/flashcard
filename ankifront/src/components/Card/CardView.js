import styled from "styled-components";

export const CardView = styled.div`
  width: 450px;
  height: 600px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  top: 5px;
  :hover{
    transform: scale(1.03);
  }
  margin-bottom: ${props => props.study === false ? "auto" : "10px"};
  box-shadow: 10px 10px 33px rgba(0, 0, 0, 0.3);
  @media (max-width: 550px) {
    width: 100%;
    height: 500px;
    :hover{
      transform: scale(1);
    }
  }
`;
