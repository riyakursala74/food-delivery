import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../utils/constants";
import { addItem } from "../utils/StoreSlice";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

const MenuCard = ({ menu, pathname, resId }) => {
  console.log("resId= ", resId);
  const dispatch = useDispatch();
  const resInCart = useSelector((store) => store.cart.restaurant);
  console.log("res in var= ", resInCart);
  const [itemCount, setItemCount] = useState(1);
  return (
    <ul>
      {menu &&
        menu?.map((info) => {
          return (
            <li
              key={info.id}
              className={`flex p-2 border-b-2 border-gray-200 ml-10 w-11/12 justify-between h-36`}
            >
              <div className="text-left w-11/12 pl-7">
                <div className="font-bold">
                  {info.name}
                  <br />
                  {"Rs. " + info.price}
                </div>
                <br /> <div className="italic">{info.description}</div>
              </div>
              <div>
                {!pathname && (
                  <button
                    className="absolute ml-5  border-2 border-white bg-lime-700 font-bold text-white p-2"
                    onClick={() => {
                      dispatch(addItem({ resId, info }));
                    }}
                  >
                    Add
                  </button>
                )}
                <img
                  className="w-32 float-right h-32 rounded-md"
                  src={info.imageId}
                ></img>
                <div className="flex absolute mt-24 p-1 w-32 bg-lime-700 text-white justify-between">
                  <div>
                    <FaPlus
                      className="pt-1"
                      onClick={() => {
                        let item = itemCount;
                        setItemCount(++item);
                      }}
                    />
                  </div>
                  <div className="border border-white px-2">{itemCount}</div>
                  <div
                    onClick={() => {
                      let item = itemCount;
                      setItemCount(--item);
                    }}
                  >
                    <FaMinus className="pt-1" />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default MenuCard;
