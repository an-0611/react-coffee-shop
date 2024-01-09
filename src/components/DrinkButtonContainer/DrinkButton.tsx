import React from "react";
import styled from "styled-components";
import { DrinkButtonType } from "../../types";

const DrinkButton: React.FC<DrinkButtonType> = ({
  name,
  price,
  count,
  handleButtonClick,
  priceUnit,
}) => (
  <StyledDrinkButton id={name} onClick={handleButtonClick} data-testid={name}>
    <span className="drink-name">{name}</span>
    <span className="drink-price">{`${price} ${priceUnit}`}</span>
    <div
      id={`${name}-count`}
      className="drink-count"
      data-testid={`${name}-count`}
    >
      {count}
    </div>
  </StyledDrinkButton>
);

const StyledDrinkButton = styled.button.attrs({
  className: "drink-button",
})`
  min-width: 150px;
  margin: 10px;
  padding: 7px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  align-item: center;
  justify-content: space-between;
  background: white;
  position: relative;
  cursor: pointer;
  user-select: none;
  .drink-name {
    text-transform: capitalize;
  }
  .drink-count {
    width: 23px;
    height: 23px;
    line-height: 23px;
    color: white;
    display: flex;
    justify-content: center;
    position: absolute;
    top: -9px;
    right: -17px;
    border-radius: 50%;
    background: #dc4737;
    pointer-events: none;
    event-select: none;
  }
`;

export default DrinkButton;
