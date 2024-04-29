import { theme_config } from "../utils/themeColors";
import { useSelector } from "react-redux";
import { useState } from "react";

const ShimmerCard = () => {
  const theme = useSelector((store) => store.theme.mode);
  const shimmerColor = theme_config[theme].shimmerColor;

  return (
    <div
      className={`${theme_config[theme].background} flex flex-wrap pl-10 pt-10 `}
    >
      {[...Array(20)].map((_, index) => (
        <div
          className="w-64 border-2 border-gray-300 rounded-md p-8 mb-5 ml-0 mr-8 animate-pulse h-96"
          key={index}
        >
          <div className={`bg-gray-300 h-7 mb-2 truncate w-48 font-bold`}></div>
          <div className={`w-48 h-44 rounded-md bg-gray-300`}></div>
          <div className={`mt-2 w-48 p-6 bg-gray-300`}></div>
          <div className={`mt-2 w-48 p-3 bg-gray-300`}></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerCard;
