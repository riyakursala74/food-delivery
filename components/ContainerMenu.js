import Card, { NewCard } from "./Card";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { useDispatch, useSelector } from "react-redux";
import { theme_config } from "../utils/themeColors";
import { MENU_URL, RES_DATA } from "../utils/constants";
import { addMenus, addRestaurants } from "../utils/RestaurantSlice";

const ContainerMenu = () => {
  const [resturants, setResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterResturants, setfilterResturants] = useState([]);
  const theme = useSelector((store) => store.theme.mode);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  const NewCardComponent = NewCard(Card);
  const fetchData = async () => {
    const response = await fetch(RES_DATA);
    const body = await response.json();
    const resData = [];
    Object.entries(body).forEach((res) => {
      res[1]["id"] = res[0];
      resData.push(res[1]);
    });

    setResturants(resData);
    setfilterResturants(resData);
    dispatch(addRestaurants(resData));
    const resMenu = await fetch(MENU_URL);
    const menus = await resMenu.json();
    dispatch(addMenus(menus));
  };
  return (
    <div className={`pl-4 md:pl-4 ${theme_config[theme].background}`}>
      {filterResturants?.length === 0 ? (
        <ShimmerCard />
      ) : (
        <div className={`md:pl-8 ${theme_config[theme].background}`}>
          <div className="flex md:flex-row flex-col pt-4 justify-center md:justify-start">
            <div>
              <input
                className={`${theme_config[theme].cardBorder} border-2 focus:border-green-700 ${theme_config[theme].background}`}
                type="text"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
                className={` bg-lime-700 text-white px-2 ml-2 rounded`}
                onClick={() => {
                  const f = resturants.filter((res) =>
                    res.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setfilterResturants(f);
                }}
              >
                Search
              </button>
            </div>
            <button
              className="border-2 border-lime-700 text-lime-700 rounded-md px-3 mt-3 md:mt-0 w-1/2 md:w-36 md:ml-5"
              onClick={() => {
                const fData = filterResturants.filter(
                  (res) => res.avgRating > 4.5
                );
                setfilterResturants(fData);
              }}
            >
              Top Restaurants
            </button>
          </div>
          <div className={`flex flex-wrap md:pt-5 pt-3`}>
            {filterResturants?.map((info) => {
              return info.deliveryTime <= 30 ? (
                <NewCardComponent
                  key={info.id}
                  name={info.name}
                  img={info.image}
                  rating={info.avgRating}
                  cuisine={info.cuisines}
                  id={info.id}
                  totalRating={info.totalRatingsString}
                  costForTwo={info.costForTwo}
                  areaName={info.areaName}
                />
              ) : (
                <Card
                  key={info.id}
                  name={info.name}
                  img={info.image}
                  rating={info.avgRating}
                  cuisine={info.cuisines}
                  id={info.id}
                  totalRating={info.totalRatingsString}
                  costForTwo={info.costForTwo}
                  areaName={info.areaName}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContainerMenu;
