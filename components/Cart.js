import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/StoreSlice";
import MenuCard from "./MenuCard";
import { theme_config } from "../utils/themeColors";

const Cart = () => {
  // use a selector to subscribe to store
  const data = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme.mode);
  return (
    <div className={`${theme_config[theme].background} h-screen`}>
      <h3
        className={`${theme_config[theme].cardText} text-center text-lg font-bold pt-6`}
      >
        Cart
      </h3>
      {data.cartItems.length > 0 ? (
        <button
          className="bg-red-500 text-white p-2 rounded-md text-right float-right md:mr-28 mr-5 mb-8 md:mb-0"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </button>
      ) : (
        <h2
          className={`${theme_config[theme].cardText} text-center pt-10 italic`}
        >
          It's All empty over here
        </h2>
      )}
      <MenuCard menu={data.cartItems} resId={data.restaurant} pathname="cart" />
    </div>
  );
};
export default Cart;
