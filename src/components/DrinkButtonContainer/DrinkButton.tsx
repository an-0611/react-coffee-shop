import React from "react";
import styled from "styled-components";

const DrinkButton: React.FC = ({}) => (
  <StyledDrinkButton>
    <div>DrinkButtonContainer</div>
  </StyledDrinkButton>
);

const StyledDrinkButton = styled.button.attrs({
  className: "drink-button",
})``;

export default DrinkButton;
