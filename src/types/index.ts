export interface DrinkType {
  name: string;
  price: number;
  count: number;
}

export interface DrinkButtonType extends DrinkType {
  handleButtonClick: () => void;
  priceUnit: string;
}

export interface DrinkButtonContainerType {
  drinkList: DrinkType[];
  handleButtonClick: (buttonIdx: number) => void;
  priceUnit: string;
}
