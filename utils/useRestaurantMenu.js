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
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log("from custom hook");
    setResMenu(json);
  };
  return resMenu;
};

export default useRestaurantMenu;
