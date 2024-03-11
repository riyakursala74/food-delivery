import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext } from "react";
import { LoginContext } from "../utils/LoginContext.js";

const Header = () => {
  const { userName } = useContext(LoginContext);
  console.log(userName);
  return (
    <div className="flex  border-b-2 border-gray-200">
      <div className="flex">
        <img className="h-20 w-14" src={LOGO_URL} alt="flogo" />
        <h2 className="self-center font-bold text-xl ml-0 pl-0 pb-2 ">
          Ezdeli
        </h2>
      </div>
      <div className="flex-1">
        <ul className="flex space-x-7 mx-8 pt-6 justify-end">
          <li className="font-bold text-black  hover:text-blue-700 ">
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold text-black  hover:text-blue-700">
            <Link to="/about">About</Link>
          </li>
          <li className="font-bold text-black  hover:text-blue-700">
            <Link to="/about">{userName}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
