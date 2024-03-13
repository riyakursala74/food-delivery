import { useDispatch } from "react-redux";
import { UP_ARROW, DOWN_ARROW, IMAGE_URL } from "../utils/constants";
import MenuCard from "./MenuCard";

const ResItems = ({ title, menu, isOpen, setOpen }) => {
  const handleClick = () => {
    setOpen();
  };
  const dispatch = useDispatch();
  return (
    <div>
      <div onClick={handleClick}>
        <h1 className="p-2 border-2 border-gray-300 ml-10 w-11/12 font-bold bg-gray-100 ">
          {title}
          <span className="float-right">{isOpen ? DOWN_ARROW : UP_ARROW}</span>
        </h1>
      </div>
      {isOpen && <MenuCard menu={menu} />}
    </div>
  );
};
export default ResItems;
