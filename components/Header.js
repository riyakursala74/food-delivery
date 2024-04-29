import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../utils/LoginContext.js";
import { useDispatch, useSelector } from "react-redux";
import { LuSun, LuMoon } from "react-icons/lu";
import { theme_config } from "../utils/themeColors.js";
import { setTheme } from "../utils/ThemeSlice.js";

const Header = () => {
  const { userName } = useContext(LoginContext);
  const cartItems = useSelector((store) => store.cart.cartItems);
  showPopUp = useSelector((store) => store.cart.popUpOpen);
  const [isLightmode, setIsLightmode] = useState(true);
  const currentTheme = isLightmode
    ? theme_config["light"]
    : theme_config["dark"];
  const iconClass = `bg-gradient-to-r from-blue-950 to-yellow-300 ${currentTheme.iconClass} p-1 rounded-full cursor-pointer`;
  const liClass = `font-bold hidden md:block ${currentTheme.liColor}`;
  const cartClass = `px-2 bg-lime-700 font-bold text-white mx-2 md:mx-0`;
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        showPopUp && "overflow-hidden w-screen bg-black bg-opacity-50 fixed"
      } ${currentTheme.background} flex border-b-2 justify-between`}
    >
      <div className="flex">
        <h2
          className={` ${currentTheme.logoColor} self-center font-bold text-xl ml-0 md:pl-14 pl-2 mb-3 pt-2 italic`}
        >
          <Link to="/">Ezdeli</Link>
        </h2>
      </div>
      <div className="flex-1">
        <ul className="flex md:space-x-7 md:mx-8 pt-3 self-center justify-end">
          <li
            className={iconClass}
            title={isLightmode ? "Light Mode" : "Dark Mode"}
            onClick={() => {
              const mode = !isLightmode ? "light" : "dark";
              setIsLightmode(!isLightmode);
              dispatch(setTheme(mode));
            }}
          >
            {isLightmode ? <LuSun /> : <LuMoon />}
          </li>
          <li className={liClass}>
            <Link to="/about">About</Link>
          </li>
          <li className={cartClass}>
            <Link to="/cart">
              Cart:
              <span className="p-1  border-black rounded-md">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <li className="font-bold"></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
