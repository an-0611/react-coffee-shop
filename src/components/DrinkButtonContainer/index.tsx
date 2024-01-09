import React from "react";
import styled from "styled-components";

const DrinkButtonContainer: React.FC = ({}) => (
  <StyledDrinkButtonContainer>
    <div>DrinkButtonContainer</div>
  </StyledDrinkButtonContainer>
);

const StyledDrinkButtonContainer = styled.div.attrs({
  className: "drink-button-container",
})`
  width: 200px;
  display: inline-block;
  vertical-align: middle;
`;

export default DrinkButtonContainer;
