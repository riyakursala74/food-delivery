import ShimmerCard from "./ShimmerCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResItems from "./ResItems";
import { useState } from "react";

const RestaurantMenu = () => {
  let resMenu = [];
  const [openIndex, setOpenIndex] = useState(0);
  // extracting data fetch to a custom hook
  resMenu = useRestaurantMenu();
  console.log("resmenu= ", resMenu);
  if (resMenu == "") {
    return <ShimmerCard />;
  }

  const { areaName, costForTwoMessage, cuisines, name } =
    resMenu?.data?.cards[0]?.card?.card?.info;
  const menu =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const filtered = menu.filter((it) => {
    return it?.card?.card?.title != undefined;
  });
  console.log("filtered item= ", filtered);

  return (
    <div className="pl-10 pt-5 text-center">
      <h2 className="font-bold text-lg">{name} </h2>
      <p>
        {areaName} <br />
        Cusines: {cuisines.join(",")}
      </p>
      <h4 className="font-serif mb-5">{costForTwoMessage}</h4>
      {filtered.map((fItem, index) => {
        const item = fItem?.card?.card;
        return (
          <ResItems
            title={item.title}
            menu={item.itemCards}
            isOpen={openIndex == index && true}
            setOpen={() => {
              setOpenIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
