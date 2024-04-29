import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../utils/constants";
import { addItem, popUpToggle, updateItemCount } from "../utils/StoreSlice";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { FaRegCaretSquareUp } from "react-icons/fa";

const MenuCard = ({ menu, pathname, resId, filter }) => {
  const [allowAdd, setAllowAdd] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  if ((cart.restaurant === "" || cart.restaurant === resId) && !allowAdd) {
    setAllowAdd(true);
  }
  menu = menu?.map((item) => {
    const count = 0;
    const nItem = { ...item, count };
    return nItem;
  });

  let filteredMenu = menu;
  console.log("filter rece= ", filter);
  // filter menu based on filter passed
  if (filter === 0) {
    filteredMenu = menu;
  } else if (filter === 1) {
    filteredMenu = filteredMenu.filter((item) => {
      return item.isVeg === 1;
    });
  } else {
    filteredMenu = filteredMenu.filter((item) => {
      return item.isVeg !== 1;
    });
  }
  return (
    <ul>
      {filteredMenu &&
        filteredMenu?.map((info) => {
          let itemInCart = false;
          let itemCount = 0;
          let itemCard = cart.cartItems.filter((item) => {
            return item.id === info.id;
          });
          if (itemCard.length > 0) {
            itemInCart = true;
            itemCount = itemCard[0].count;
          }

          return (
            <li
              key={info.id}
              className={`flex p-2 border-b-2 border-gray-200 ml-10 w-11/12 justify-between h-36`}
            >
              <div className="text-left w-11/12 pl-7">
                <div className="font-bold">
                  <div className="flex">
                    <div>{info.name}</div>
                    <div className="ml-2 mt-1">
                      {info.isVeg ? (
                        <FaRegCaretSquareUp className="text-green-500" />
                      ) : (
                        <FaRegCaretSquareUp className="text-red-500" />
                      )}
                    </div>
                  </div>
                  <div>{"Rs. " + info.price}</div>
                </div>
                <br /> <div className="italic">{info.description}</div>
              </div>
              <div className="flex flex-col">
                <img
                  className="w-32 float-right h-24 rounded-md"
                  src={info.imageId}
                ></img>
                {
                  <div className="flex -top-1 p-1 w-32  justify-between border-2 rounded-md text-lime-600 border-lime-600">
                    {itemInCart && (
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          --itemCount;
                          dispatch(updateItemCount({ itemCount, info }));
                        }}
                      >
                        <FaMinus className="pt-1" />
                      </div>
                    )}
                    <div className="text-center">
                      {itemInCart ? (
                        <h2 className="font-bold">{itemCount}</h2>
                      ) : (
                        <button
                          className="font-bold  text-center w-32"
                          onClick={() => {
                            if (!allowAdd) {
                              dispatch(popUpToggle(true));
                            }
                            if (allowAdd) {
                              info["count"] = 1;
                              dispatch(addItem({ resId, info }));
                            }
                          }}
                        >
                          Add
                        </button>
                      )}
                    </div>
                    {itemInCart && (
                      <div className="cursor-pointer">
                        <FaPlus
                          className="pt-1"
                          onClick={() => {
                            ++itemCount;
                            dispatch(updateItemCount({ itemCount, info }));
                          }}
                        />
                      </div>
                    )}
                  </div>
                }
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default MenuCard;
