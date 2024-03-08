import ShimmerCard from "./ShimmerCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  let resMenu = [];

  // extracting data fetch to a custom hook
  resMenu = useRestaurantMenu();
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
