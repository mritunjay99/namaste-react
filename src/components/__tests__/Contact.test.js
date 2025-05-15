import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {
  beforeAll(() => {
    console.log("Before All");
  });
  beforeEach(() => {
    console.log("Before each");
  });
  // AfterAll(() => {
  //   console.log("After All");
  // });
  // AfterEach(() => {
  //   console.log("After Each");
  // });
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact page", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  //in place of test we can use "it"
  it("Should load input name inside contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
