import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UP_ARROW, DOWN_ARROW, IMAGE_URL } from "../utils/constants";
import MenuCard from "./MenuCard";
import { theme_config } from "../utils/themeColors";

const ResItems = ({ title, menu, id, filter }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme.mode);
  return (
    <div className="">
      <div onClick={handleClick}>
        <h1
          className={`p-2  ml-10 w-11/12 font-bold text-left text-lg ${
            !isOpen && "border-b-2 border-gray-300"
          }`}
        >
          {title} ({menu.length})
          <span className="float-right">{isOpen ? DOWN_ARROW : UP_ARROW}</span>
        </h1>
      </div>
      {isOpen && <MenuCard menu={menu} resId={id} filter={filter} />}
    </div>
  );
};
export default ResItems;
