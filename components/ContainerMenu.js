import Card from "./Card";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";

const ContainerMenu = () => {
  const [resturants, setResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterResturants, setfilterResturants] = useState([]);
  useEffect(() => {
    console.log("use effect called");
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
    console.log(resList);
    finalList = [...resList];
    console.log("f= ", finalList);
    setResturants(resList);
    setfilterResturants(resList);
  };

  imgSrc =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  console.log("rendered", resturants.length == 0);
  return resturants.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="container-menu">
      <div className="filter-container">
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div>
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
          className="filter"
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
      <div className="card-container">
        {filterResturants.map((res) => {
          info = res.info;
          return (
            <Card
              key={info.id}
              name={info.name}
              img={imgSrc + info.cloudinaryImageId}
              rating={info.avgRating}
              cuisine={info.cuisines}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContainerMenu;
