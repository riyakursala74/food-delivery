import { createSlice } from "@reduxjs/toolkit";

// Logical breakkdown of cart- slice
const cart = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addItem: (store, action) => {
      // action would be addItem and it will add to cart, this function can have store, action as parameters
      store.cartItems.push(action.payload);
    },
    removeItem: (store, action) => {},
    clearCart: (store) => {
      store.cartItems.length = 0;
    },
  },
});

export default cart.reducer;
export const { addItem, removeItem, clearCart } = cart.actions;
