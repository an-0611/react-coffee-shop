import React from "react";
import styled from "styled-components";
import { DrinkButtonContainerType } from "../../types";
import DrinkButton from "./DrinkButton";

const DrinkButtonContainer: React.FC<DrinkButtonContainerType> = ({
  drinkList,
  handleButtonClick,
  priceUnit,
}) => (
  <StyledDrinkButtonContainer>
    {drinkList.length > 0 &&
      drinkList.map(({ name, price, count }, buttonIdx) => (
        <DrinkButton
          key={buttonIdx}
          name={name}
          price={price}
          count={count}
          handleButtonClick={() => handleButtonClick(buttonIdx)}
          priceUnit={priceUnit}
        />
      ))}
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
