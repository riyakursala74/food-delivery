import ShimmerCard from "./ShimmerCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResItems from "./ResItems";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { theme_config } from "../utils/themeColors";
import { RiEBike2Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import Popup from "./Popup";

const RestaurantMenu = () => {
  let resMenu = [];
  showPopUp = useSelector((store) => store.cart.popUpOpen);
  // extracting data fetch to a custom hook
  menu = useRestaurantMenu();
  const { resId } = useParams();
  const resData = useSelector((store) => {
    return store.restaurant.restaurants;
  });
  const theme = useSelector((store) => store.theme.mode);
  const currentRes = resData.filter((res) => {
    return res.id == resId;
  });
  const [filter, setFilter] = useState(0);
  if (menu == "") {
    return <ShimmerCard />;
  }

  const checkFilter = (condition) => {
    if (filter === condition) {
      setFilter(0);
      return;
    }
    setFilter(condition);
  };

  const {
    areaName,
    costForTwo,
    cuisines,
    name,
    totalRatingsString,
    image,
    deliveryTime,
    avgRating,
    id,
  } = currentRes[0];
  menu = menu.filter((item) => {
    return item && item.itemCards && item.itemCards.length > 0;
  });

  console.log("filter= ", filter);
  return (
    <div className={`${showPopUp && "overflow-hidden fixed"}`}>
      {showPopUp && (
        <div className="pl-0">
          <Popup />
        </div>
      )}
      <div
        className={`${theme_config[theme].background} ${theme_config[theme].menuColor} pl-10 pt-5 text-center`}
      >
        <div className="h-60 border border-gray-400 ml-3 w-[95%] mb-10 rounded-md">
          <div className="flex justify-between pl-10 text-left items-center">
            <div>
              <h2 className="font-bold text-xl pb-5">{name} </h2>
              <p className="italic pb-2">
                {areaName} <br />
                Cusines: {cuisines.join(", ")}
              </p>
              <div className="flex justify-between w-96">
                <div className="w-40 flex font-bold">
                  <div className="pt-1">
                    <FaStar className="text-lime-600" />
                  </div>
                  <div className="ml-2">
                    {avgRating}( {totalRatingsString})
                  </div>
                </div>
                <h4 className="mb-5">
                  Cost For Two:
                  <span className="italic font-bold">{costForTwo}</span>
                </h4>
              </div>
              <div className="flex">
                <h3 className="mr-2">
                  Delivery in :{" "}
                  <span className="font-bold">{deliveryTime} minutes</span>
                </h3>
                <RiEBike2Line className="mt-1" />
              </div>
            </div>
            <div>
              <img
                src={image}
                alt=""
                className="h-52 self-center mr-5 mt-4 p-2 border border-blue-950 w-60 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="flex ml-11 font-bold mb-2">
          <button
            onClick={() => {
              checkFilter(1);
            }}
            className={`border text-sm ${
              filter === 1
                ? "border-green-500 text-green-500"
                : "border-gray-600 text-gray-600"
            } p-1 rounded-md`}
          >
            Veg Only
          </button>
          <button
            onClick={() => {
              checkFilter(2);
            }}
            className={`ml-4 border text-sm ${
              filter === 2
                ? "border-red-500 text-red-500"
                : "border-gray-600 text-gray-600"
            } p-1 rounded-md`}
          >
            Non-Veg Only
          </button>
        </div>
        {menu?.map((item, index) => {
          return (
            <ResItems
              key={item.title}
              title={item.title}
              menu={item.itemCards}
              id={id}
              filter={filter}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
