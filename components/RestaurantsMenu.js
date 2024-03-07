import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import { useState } from "react";
import ShimmerCard from "./ShimmerCard";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState("");
  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResMenu(json);
  };
  if (resMenu == "") {
    return <ShimmerCard />;
  }

  const { areaName, costForTwoMessage, cuisines, name } =
    resMenu?.data?.cards[0]?.card?.card?.info;
  const menu =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  return (
    <div>
      <h2>{name}</h2>
      <p>
        {areaName} {cuisines}
      </p>
      <h4>{costForTwoMessage}</h4>
      <ul>
        {menu.map((item) => {
          const info = item?.card?.info;
          return (
            <li key={info.id}>
              {info.name}- {info.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
