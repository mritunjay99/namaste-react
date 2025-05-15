import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import Body from "../Body";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the Body Component with Search", async () => {
  //whenever there is state update inside the component , wrap the render method inside "act" method
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardBeforSearch = screen.getAllByTestId("resCard");
  expect(cardBeforSearch.length).toBe(8);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(2);
  expect(searchBtn).toBeInTheDocument();
});

it("Should filter top rated restaurants", async () => {
  //whenever there is state update inside the component , wrap the render method inside "act" method
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(8);
  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(7);
});
