import { createSlice } from "@reduxjs/toolkit";

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const initialState = {
  carts: getCartFromLocalStorage(),
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.carts.findIndex((item) => item.id === id);

      if (itemIndex >= 0) {
        state.carts[itemIndex] = { ...state.carts[itemIndex], qnty: state.carts[itemIndex].qnty + 1 };
      } else {
        const newItem = { ...action.payload, qnty: 1 };
        state.carts.push(newItem);
      }

      saveCartToLocalStorage(state.carts);
    },
    removeToCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state.carts);
    },
    removeSingleIteams: (state, action) => {
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

      if (state.carts[itemIndex].qnty >= 1) {
        state.carts[itemIndex].qnty -= 1;
      }

      saveCartToLocalStorage(state.carts);
    },
    emptycartIteam: (state) => {
      state.carts = [];
      saveCartToLocalStorage(state.carts);
    },
    setProductDetails: (state, action) => {
      return action.payload; // Assuming the payload is the product details object
    },
    buynow: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.carts.findIndex((item) => item.id === id);

      if (itemIndex >= 0) {
        state.carts[itemIndex] = { ...state.carts[itemIndex], qnty: state.carts[itemIndex].qnty + 1 };
      } else {
        const newItem = { ...action.payload, qnty: 1 };
        state.carts.push(newItem);
      }

      saveCartToLocalStorage(state.carts);
    },
  },
});

export const { addToCart, removeToCart, removeSingleIteams, emptycartIteam ,buynow} = cartSlice.actions;
export default cartSlice.reducer;
