import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../utils/StoreSlice";
const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default store;
