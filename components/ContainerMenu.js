import Card, { NewCard } from "./Card";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { useSelector } from "react-redux";
import { theme_config } from "../utils/themeColors";

const ContainerMenu = () => {
  const [resturants, setResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterResturants, setfilterResturants] = useState([]);
  const theme = useSelector((store) => store.theme.mode);
  useEffect(() => {
    fetchData();
  }, []);
  const NewCardComponent = NewCard(Card);
  const fetchData = async () => {
    const url = "https://worldwide-restaurants.p.rapidapi.com/search";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "5fc5f88ec5msh11a23abe1ff8ec1p151f08jsnf2097ce2404f",
        "X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
      },
      body: new URLSearchParams({
        language: "en_US",
        location_id: "297704",
        currency: "INR",
        offset: "0",
      }),
    };

    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.json();

    //   const restaurant_list = result.results.data;
    //   setResturants(restaurant_list);
    //   setfilterResturants(restaurant_list);
    //   console.log("result from new api= ", restaurant_list);
    // } catch (error) {
    //   console.error("erro =", error);
    // }
  };
  return (
    <div className={`pl-10 md:pl-4 ${theme_config[theme].background}`}>
      {filterResturants?.length === 0 ? (
        <ShimmerCard />
      ) : (
        <div className={`pl-10 md:pl-4 ${theme_config[theme].background}`}>
          <div className="flex md:flex-row flex-col pt-4 justify-center md:justify-start">
            <div>
              <input
                className="border-gray-200 border-2 focus:border-green-700"
                type="text"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
                className="bg-blue-950 text-white px-2 ml-2 rounded"
                onClick={() => {
                  const f = resturants.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setfilterResturants(f);
                }}
              >
                Search
              </button>
            </div>
            <button
              className="border-2 border-blue-950 text-blue-950 rounded-md px-3 mt-3 md:mt-0 w-1/2 md:w-36 md:ml-5"
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
          <div className={`flex flex-wrap pt-5`}>
            {filterResturants?.map((info) => {
              return info?.sla?.deliveryTime <= 30 ? (
                <NewCardComponent
                  key={info.name}
                  name={info.name}
                  img={info?.photo?.images?.small?.url}
                  rating={info.rating}
                  cuisine={info.cuisine}
                  id={info.name}
                />
              ) : (
                <Card
                  key={info.name}
                  name={info.name}
                  img={info?.photo?.images?.small?.url}
                  rating={info.rating}
                  cuisine={info.cuisine}
                  id={info.name}
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
