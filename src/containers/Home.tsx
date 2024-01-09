import { Fragment, useState } from "react";

import { DrinkType } from "../types";

import DrinkButtonContainer from "../components/DrinkButtonContainer";
import OrderDetailContainer from "../components/OrderDetailContainer";

const Home: React.FC = () => {
  const [drinkList, setDrinkList] = useState<DrinkType[]>([
    { name: "coffee", price: 480, count: 0 },
    { name: "tea", price: 280, count: 0 },
    { name: "milk", price: 180, count: 0 },
    { name: "coke", price: 190, count: 0 },
    { name: "beer", price: 580, count: 0 },
  ]);

  return (
    <div>
      <DrinkButtonContainer />
      <OrderDetailContainer />
    </div>
  );
};

export default Home;
