import render from "@testing-library/react";
import Header from "../components/Header";
import { LoginContext } from "../utils/LoginContext";
import { store } from "../utils/Store";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
b;
import { BrowserRouter } from "react-router-dom";

it("should render header component", () => {
  act(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <LoginContext.Provider value={{ userName: "Riya" }}>
            <Header />
          </LoginContext.Provider>
        </Provider>
      </BrowserRouter>
    );
  });
});
