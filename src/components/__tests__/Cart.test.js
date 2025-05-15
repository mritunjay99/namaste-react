import { render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should load Restaurant Menu Component", async () => {
  await act(async () => {
    render(<RestaurantMenu />);
  });
  const accordionHeader = screen.getByText("Chinese Wok");
  expect(accordionHeader).toBeInTheDocument();
});
