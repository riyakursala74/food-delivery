// custom hook to fetch data

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { MENU_URL } from "./constants";
import { useState } from "react";

const useRestaurantMenu = () => {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = "https://worldwide-restaurants.p.rapidapi.com/detail";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "5fc5f88ec5msh11a23abe1ff8ec1p151f08jsnf2097ce2404f",
        "X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
      },
      body: new URLSearchParams({
        currency: "USD",
        language: "en_US",
        location_id: "23789757",
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("result 2= ", result);
    } catch (error) {
      console.error(error);
    }

    // const data = await fetch(MENU_URL + resId);
    // const json = await data.json();
    // console.log("from custom hook");
    // setResMenu(json);
  };
  return resMenu;
};

export default useRestaurantMenu;
