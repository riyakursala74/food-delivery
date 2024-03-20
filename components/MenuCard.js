import { useDispatch } from "react-redux";
import { IMAGE_URL } from "../utils/constants";
import { addItem } from "../utils/StoreSlice";

const MenuCard = ({ menu, pathname }) => {
  const dispatch = useDispatch();
  return (
    <ul>
      {menu &&
        menu?.map((item) => {
          const info = item?.card?.info;
          return (
            <li
              key={info.id}
              className="flex p-2 border-2 border-gray-200 ml-10 w-11/12 justify-between h-36"
            >
              <div className="text-center w-11/12">
                {info.name}
                <br /> {info.description}
                <br />
                {"Rs. " + info.price / 100}
              </div>
              <div>
                {!pathname && (
                  <button
                    className="absolute ml-7 border-2 border-white bg-black text-white p-2"
                    onClick={() => {
                      dispatch(addItem(item));
                    }}
                  >
                    Add
                  </button>
                )}
                <img
                  className="w-32 float-right h-32"
                  src={IMAGE_URL + info.imageId}
                ></img>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default MenuCard;
