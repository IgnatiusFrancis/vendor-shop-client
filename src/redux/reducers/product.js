import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const productReducer = createReducer(initialState, {
  LoadProductRequest: (state) => {
    state.isLoading = true;
  },
  LoadProductSuccess: (state, action) => {
    state.success = true;
    state.isLoading = false;
    state.product = action.payload;
  },
  LoadProductFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },
  clearErrors: (state) => {
    state.error = null;
  },

  // GET ALL PRODUCTS

  getAllProductsShopRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsShopSuccess: (state, action) => {
    state.isLoading = false;
    state.products = action.payload;
  },
  getAllProductsShopError: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // DELETE PRODUCT
  deleteProductRequest: (state) => {
    state.isLoading = true;
  },
  deleteProductSuccess: (state, action) => {
    state.isLoading = false;
    state.success = action.payload;
  },
  deleteProductFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});
