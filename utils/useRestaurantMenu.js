// custom hook to fetch data

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { MENU_URL } from "./constants";
import { useState } from "react";
import { useSelector } from "react-redux";

const useMenu = () => {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState("");
  const menus = useSelector((store) => store.restaurant.menus);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const menu = Object.entries(menus).filter((entry) => {
      return entry[1].resId === resId;
    });
    menu && menu[0] && setResMenu(menu[0][1].data);
  };
  return resMenu;
};

export default useMenu;
