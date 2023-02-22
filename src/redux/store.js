import { configureStore } from '@reduxjs/toolkit';
import {
  productDetailsReducer,
  productReducer,
} from '../redux/reducer/productReducer';
import { cartReducer } from './reducer/cartReducer';

const store = configureStore({
  reducer: {
    product: productReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },
});

export default store;
