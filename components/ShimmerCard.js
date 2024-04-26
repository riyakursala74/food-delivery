import { theme_config } from "../utils/themeColors";
import { useSelector } from "react-redux";
import { useState } from "react";

const ShimmerCard = () => {
  const theme = useSelector((store) => store.theme.mode);
  console.log(
    "c;= ",
    `flex flex-wrap ml-10 h-96 animate-pulse ${theme_config[theme].background}`
  );
  const [shimmerColor, setShimmerColor] = useState(
    theme_config[theme].shimmerColor
  );
  console.log("shimmer color= ", `w-48 h-44 rounded-md ${shimmerColor}`);
  return (
    <div
      className={`flex flex-wrap ml-10 pt-10 ${theme_config[theme].background}`}
    >
      {[...Array(20)].map((_, index) => (
        <div
          className="w-64 border-2 border-gray-300 rounded-md p-8 mb-5 ml-0 mr-8 animate-pulse h-96"
          key={index}
        >
          <div
            className={`h-7 mb-2 truncate w-48 font-bold ${shimmerColor}`}
          ></div>
          <div className={`w-48 h-44 rounded-md ${shimmerColor}`}></div>
          <div className={`mt-2 w-48 p-6 ${shimmerColor}`}></div>
          <div className={`mt-2 w-48 p-3 ${shimmerColor}`}></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerCard;
