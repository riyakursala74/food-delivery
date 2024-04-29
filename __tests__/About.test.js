import { render, screen } from "@testing-library/react";
import About from "../components/About";
import "@testing-library/jest-dom";

it("should render about page", () => {
  render(<About />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
