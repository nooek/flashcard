import React from "react";
import { DescriptionContainer } from "./Styles";

const Description = (props) => {
  return props.chosenId.includes(props.id) ? (
    <DescriptionContainer>
      <h2 style={{ fontSize: "20px", color: "white" }}>{props.description}</h2>
    </DescriptionContainer>
  ) : null;
};

export default Description;
