import { createSlice } from "@reduxjs/toolkit";

const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState: { restaurants: [], menus: [] },
  reducers: {
    addRestaurants: (store, action) => {
      store.restaurants = action.payload;
      console.log("res in store= ", store.restaurants);
    },
    addMenus: (store, action) => {
      store.menus = action.payload;
    },
  },
});

export default RestaurantSlice.reducer;
export const { addRestaurants, addMenus } = RestaurantSlice.actions;
