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
  const [isLightmode, setIsLightmode] = useState(true);
  const currentTheme = isLightmode
    ? theme_config["light"]
    : theme_config["dark"];
  const iconClass = `p-1 rounded-full cursor-pointer bg-gradient-to-r from-blue-950 ${currentTheme.iconClass} `;
  const liClass = `font-bold hidden md:block ${currentTheme.liColor}`;
  const cartClass = `px-2 bg-gradient-to-r from-green-800 to-green-800 font-bold ${currentTheme.cartButtonBtn}`;
  const dispatch = useDispatch();
  return (
    <div className={`flex border-b-2 ${currentTheme.background}`}>
      <div className="flex">
        <h2
          className={`self-center font-bold text-xl ml-0 pl-14 mb-3 pt-2 italic ${currentTheme.logoColor}`}
        >
          Ezdeli
        </h2>
      </div>
      <div className="flex-1">
        <ul className="flex space-x-7 mx-8 pt-3 self-center justify-end">
          <li
            // className={`p-1 rounded-full cursor-pointer bg-gradient-to-r from-orange-400 to-yellow-300 ${currentTheme.iconClass} `}
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
            <Link to="/">Home</Link>
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
