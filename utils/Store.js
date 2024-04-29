import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../utils/StoreSlice";
import ThemeReducer from "../utils/ThemeSlice";
import RestaurantReducer from "../utils/RestaurantSlice";
const store = configureStore({
  reducer: {
    cart: CartReducer,
    theme: ThemeReducer,
    restaurant: RestaurantReducer,
  },
});

export default store;
