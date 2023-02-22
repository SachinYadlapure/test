import { createReducer } from '@reduxjs/toolkit';

export const productReducer = createReducer(
  { data: [] },
  {
    getProductRequest: state => {
      state.loading = true;
      state.data = [];
    },
    getProductSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);
export const productDetailsReducer = createReducer(
  { product: {} },
  {
    productDetailsRequest: state => {
      state.loading = true;
      state.product = {};
    },
    productDetailsSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    productDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: state => {
      state.error = null;
    },
  }
);
