import { createSlice } from "@reduxjs/toolkit";

// Logical breakkdown of cart- slice
const cart = createSlice({
  name: "cart",
  initialState: { cartItems: [], restaurant: "" },
  reducers: {
    addItem: (store, action) => {
      console.log("action= ", action.payload.resId);
      // action would be addItem and it will add to cart, this function can have store, action as parameters
      store.cartItems.push(action.payload.info);
      store.restaurant = action.payload.resId;
    },
    removeItem: (store, action) => {},
    clearCart: (store) => {
      store.cartItems.length = 0;
    },
  },
});

export default cart.reducer;
export const { addItem, removeItem, clearCart } = cart.actions;
