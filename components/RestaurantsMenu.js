import ShimmerCard from "./ShimmerCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  let resMenu = [];

  // extracting data fetch to a custom hook
  resMenu = useRestaurantMenu();
  console.log("resmenu= ", resMenu);
  if (resMenu == "") {
    return <ShimmerCard />;
  }

  const { areaName, costForTwoMessage, cuisines, name } =
    resMenu?.data?.cards[0]?.card?.card?.info;
  const menu =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  return (
    <div className="pl-10 pt-5">
      <h2 className="font-bold">{name}- </h2>
      <p>
        {areaName} <br />
        Cusines: {cuisines.join(",")}
      </p>
      <h4 className="font-serif mb-5">{costForTwoMessage}</h4>
      <ul>
        {menu.map((item) => {
          const info = item?.card?.info;
          return (
            <li key={info.id} className="p-2 border-2 border-gray-200 mb-1">
              {info.name}
              <br /> {info.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
