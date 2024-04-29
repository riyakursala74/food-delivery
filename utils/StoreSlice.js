import { createSlice } from "@reduxjs/toolkit";

// Logical breakkdown of cart- slice
const cart = createSlice({
  name: "cart",
  initialState: { cartItems: [], restaurant: "", popUpOpen: false },
  reducers: {
    addItem: (store, action) => {
      // action would be addItem and it will add to cart, this function can have store, action as parameters
      store.cartItems.push(action.payload.info);
      store.restaurant = action.payload.resId;
    },
    removeItem: (store, action) => {},
    clearCart: (store) => {
      store.cartItems.length = 0;
      store.restaurant = "";
    },
    updateItemCount: (store, action) => {
      // check if count changed to zero- remove item from cart
      if (action.payload.itemCount === 0) {
        store.cartItems = store.cartItems.filter((item) => {
          return item.id !== action.payload.info.id;
        });
        // setting restaurnat id as blank if all items from cart cleared
        if (store.cartItems.length === 0) {
          store.restaurant = "";
        }
      }
      // else update cart
      store.cartItems = store.cartItems.map((item) => {
        if (item.id === action.payload.info.id) {
          item.count = action.payload.itemCount;
        }
        return item;
      });
    },
    popUpToggle: (store, action) => {
      store.popUpOpen = action.payload;
    },
  },
});

export default cart.reducer;
export const { addItem, removeItem, clearCart, updateItemCount, popUpToggle } =
  cart.actions;
