import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import ContainerMenu from "../components/ContainerMenu";
import Footer from "../components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "../components/About";
import PageNotFound from "../components/PageNotFound";
import RestaurantMenu from "../components/RestaurantsMenu";
// Main javascript file

const App = () => {
  return (
    <div className="main">
      <Header />
      <Outlet />
    </div>
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
    ],
  },
]);

// React.createElement and ReactDOM.createRoot
// add type module in html- as browser scripts cannot have imports
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
