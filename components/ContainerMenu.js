import Card from "./Card";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";

const ContainerMenu = () => {
  const [resturants, setResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterResturants, setfilterResturants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResturants(resList);
    setfilterResturants(resList);
  };

  imgSrc =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return filterResturants?.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="pl-10">
      <div className="flex pt-4">
        <div>
          <input
            className="border-gray-200 border-2 focus:border-green-700"
            type="text"
            value={searchText}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div className="bg-blue-950 text-white rounded-md mx-2 px-2">
          <button
            onClick={() => {
              console.log("search clicked", searchText);
              const f = resturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterResturants(f);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="border-2 border-blue-950 text-blue-950 rounded-md px-3"
          onClick={() => {
            const fData = filterResturants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilterResturants(fData);
          }}
        >
          Top Resturants
        </button>
      </div>
      <div className="flex flex-wrap pt-5">
        {filterResturants.map((res) => {
          info = res.info;
          return (
            <Card
              key={info.id}
              name={info.name}
              img={imgSrc + info.cloudinaryImageId}
              rating={info.avgRating}
              cuisine={info.cuisines}
              id={info.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContainerMenu;
