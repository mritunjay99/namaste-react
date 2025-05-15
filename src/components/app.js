import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import Cart from "./Cart";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./Grocery";
import Error from "./Error";
import UserContext from "../utils/UserContext";
import { useState } from "react";
import appStore from "../utils/appStore";

//React Element
// const jsxHeading = <h1 id="heading">Hi there!</h1>;

const styleCard = {
  backgroundColor: "#f0f0f0",
};
//React Component
// Class Based Component - Old
// Functional based component -New

//Composing two component in one component is called component
const Grocery = lazy(() => import("./Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("Mritunjay");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

//routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
