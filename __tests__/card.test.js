import { render, screen } from "@testing-library/react";
import Card from "../components/Card";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const resObj = {
  name: "Chinese Wok",
  img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
  rating: 4.2,
  cuisine: ["Chinese", "Asian", "Tibetan", "Desserts"],
  id: "393840",
};

const imgSrc =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

it("should display name of restaurant", () => {
  render(
    <BrowserRouter>
      <Card
        key={resObj.id}
        name={resObj.name}
        img={imgSrc + resObj.cloudinaryImageId}
        rating={resObj.avgRating}
        cuisine={resObj.cuisines}
        id={resObj.id}
      />
    </BrowserRouter>
  );

  const name = screen.getByRole("heading", { level: 3 });
  expect(name).toBeInTheDocument();
});
