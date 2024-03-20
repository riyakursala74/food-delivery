import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/StoreSlice";
import MenuCard from "./MenuCard";
const Cart = () => {
  // use a selector to subscribe to store
  const data = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <div className="">
      <h3 className="text-center text-lg font-bold pt-6">Cart</h3>
      <button
        className="bg-black text-white p-2 rounded-md text-right float-right mr-5"
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
