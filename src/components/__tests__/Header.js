import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

it("Should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

    const loginButton= screen.getByRole("button",{name:"Login"});  //good way
//   const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with a Cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems= screen.getByText("Cart (0)");
    expect(cartItems).toBeInTheDocument();
  });


  it("Should render Header component with a Cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems= screen.getByText(/Cart/);  
    expect(cartItems).toBeInTheDocument();
  });

  it("Should change login button to logout button on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
      const loginButton= screen.getByRole("button",{name:"Login"});  //good way
      fireEvent.click(loginButton); //used for simulating an event
      const logoutButton= screen.getByRole("button",{name:"LogOut"});  //good way
  
    expect(logoutButton).toBeInTheDocument();
  });