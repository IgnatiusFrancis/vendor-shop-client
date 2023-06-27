import axios from "axios";
import { server } from "../../server";
import Cookies from "js-cookie";

export const createEvent = (newForm) => async (dispatch) => {
  try {
    dispatch({ type: "LoadEventRequest" });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/event/create-event`,
      newForm,
      config
    );

    dispatch({ type: "LoadEventSuccess", payload: data?.event });
  } catch (error) {
    dispatch({
      type: "LoadEventFail",
      payload: error.response?.data?.message,
    });
  }
};

// GET ALL eventS

export const getAllEvents = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getAllEventsShopRequest" });

    const { data } = await axios.get(`${server}/event/get-all-events/${id}`);

    dispatch({ type: "getAllEventsShopSuccess", payload: data?.events });
  } catch (error) {
    dispatch({
      type: "getAllEventsShopError",
      payload: error.response?.data?.message,
    });
  }
};

// GET ALL eventS

export const deleteEvents = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteEventRequest" });

    const { data } = await axios.get(`${server}/event/delete-shop-event/${id}`);

    dispatch({ type: "deleteEventSuccess", payload: data?.success });
  } catch (error) {
    dispatch({
      type: "deleteEventFailed",
      payload: error.response?.data?.message,
    });
  }
};
