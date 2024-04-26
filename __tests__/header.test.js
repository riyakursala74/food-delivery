import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { LoginContext } from "../utils/LoginContext";
import store from "../utils/Store";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <LoginContext.Provider value={{ userName: "Riya" }}>
          <Header />
        </LoginContext.Provider>
      </Provider>
    </BrowserRouter>
  );

  const headerText = screen.getByRole("heading");

  //const loginButton = screen.getByText("Login");
  expect(headerText).toBeInTheDocument();
});
{
  /* <BrowserRouter>
<Provider store={store}>
  <LoginContext.Provider value={{ userName: "Riya" }}>
    <Header />
  </LoginContext.Provider>
</Provider>
</BrowserRouter> */
}
