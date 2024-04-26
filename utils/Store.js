import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../utils/StoreSlice";
import ThemeReducer from "../utils/ThemeSlice";
const store = configureStore({
  reducer: {
    cart: CartReducer,
    theme: ThemeReducer,
  },
});

export default store;
