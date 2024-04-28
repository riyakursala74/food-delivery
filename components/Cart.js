import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/StoreSlice";
import MenuCard from "./MenuCard";
import { theme_config } from "../utils/themeColors";

const Cart = () => {
  // use a selector to subscribe to store
  const data = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme.mode);
  console.log("data= ", data);
  return (
    <div className={`${theme_config[theme].background} h-screen`}>
      <h3
        className={`${theme_config[theme].cardText} text-center text-lg font-bold pt-6`}
      >
        Cart
      </h3>
      <button
        className="bg-red-500 text-white p-2 rounded-md text-right float-right mr-5"
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        Clear Cart
      </button>
      <MenuCard menu={data} pathname="cart" />
    </div>
  );
};
export default Cart;
