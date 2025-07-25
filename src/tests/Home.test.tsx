// Home.test.tsx
import { render, fireEvent, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../containers/Home";

test("clicking coffee button updates order details", () => {
  const { getByTestId } = render(<Home />);
  const coffeeButton = getByTestId("coffee");
  const coffeeCount = getByTestId("coffee-count");
  const totalCount = getByTestId("count");
  const totalPrice = getByTestId("price");

  expect(coffeeCount.textContent).toBe("0"); // initial coffeeCount = 0

  // click button twice
  fireEvent.click(coffeeButton);
  fireEvent.click(coffeeButton);

  // result
  expect(coffeeCount.textContent).toBe("2"); // coffeeCount = 2
  expect(totalCount.textContent).toBe("2"); // totalCount =  2
  expect(totalPrice.textContent).toBe("960"); // price = 480 * 2
});
