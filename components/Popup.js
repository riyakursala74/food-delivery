import React from "react";
import { CgCloseR } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, popUpToggle } from "../utils/StoreSlice";

const Popup = () => {
  const dispatch = useDispatch();
  const resId = useSelector((store) => store.cart.restaurant);
  const resList = useSelector((store) => store.restaurant.restaurants);
  const resInCart = resList?.filter((res) => {
    return res.id === resId;
  });
  return (
    <div className="top-0 absolute h-screen">
      <div className="top-0 h-[100%] w-screen overflow-hidden absolute z-999 bg-black bg-opacity-70">
        <div className="h-72 bg-white w-1/2 m-auto mt-44 opacity-100 z-999 rounded-md">
          <div
            className="flex justify-end cursor-pointer"
            onClick={() => {
              dispatch(popUpToggle(false));
            }}
          >
            <CgCloseR className="mr-3 mt-3 text-xl" />
          </div>
          <p className="md:pt-12 md:px-20 px-2">
            {`You already have items in you cart from ${resInCart[0].name}. Please clear cart to
            add items from another restaurant`}
          </p>
          <button
            className="md:ml-80 bg-red-600 rounded-md text-white px-3 md:mt-16 py-2 mt-5 ml-2"
            onClick={() => {
              dispatch(clearCart());
              dispatch(popUpToggle(false));
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
