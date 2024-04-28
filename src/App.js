import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import ContainerMenu from "../components/ContainerMenu";
import Footer from "../components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "../components/About";
import PageNotFound from "../components/PageNotFound";
import RestaurantMenu from "../components/RestaurantsMenu";
import { LoginContext } from "../utils/LoginContext.js";
import { Provider } from "react-redux";
import Cart from "../components/Cart.js";
import store from "../utils/Store.js";

const App = () => {
  return (
    <Provider store={store}>
      <LoginContext.Provider value={{ userName: "Riya" }}>
        <>
          <Header />
          <div className="h-screen w-screen">
            <Outlet />
          </div>
        </>
      </LoginContext.Provider>
    </Provider>
  );
};

// Router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <ContainerMenu /> },
      { path: "/about", element: <About /> },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

// React.createElement and ReactDOM.createRoot
// add type module in html- as browser scripts cannot have imports
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
