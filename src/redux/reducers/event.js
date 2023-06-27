import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const eventReducer = createReducer(initialState, {
  LoadEventRequest: (state) => {
    state.isLoading = true;
  },
  LoadEventSuccess: (state, action) => {
    state.success = true;
    state.isLoading = false;
    state.event = action.payload;
  },
  LoadEventFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },
  clearErrors: (state) => {
    state.error = null;
  },

  // GET ALL eventS

  getAllEventsShopRequest: (state) => {
    state.isLoading = true;
  },
  getAllEventsShopSuccess: (state, action) => {
    state.isLoading = false;
    state.events = action.payload;
  },
  getAllEventsShopError: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // DELETE event
  deleteEventRequest: (state) => {
    state.isLoading = true;
  },
  deleteEventSuccess: (state, action) => {
    state.isLoading = false;
    state.success = action.payload;
  },
  deleteEventFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});
