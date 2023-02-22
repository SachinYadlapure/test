import { createReducer } from '@reduxjs/toolkit';

const items =
  localStorage.getItem('cartItems') !== null
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

export const cartReducer = createReducer(
  { cartItems: items },
  {
    addToCart: (state, action) => {
      const item = action.payload;

      const isItemExist = state.cartItems.find(i => i.product === item.product);

      if (isItemExist) {
        return {
          cartItems: state.cartItems.map(i =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, item],
        };
      }
    },
  }
);
