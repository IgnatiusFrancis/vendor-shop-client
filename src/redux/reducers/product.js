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
});
