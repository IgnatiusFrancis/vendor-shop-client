import axios from "axios";
import { server } from "../../server";
import Cookies from "js-cookie";

export const loadUser = () => async (dispatch) => {
  try {
    const token = Cookies.get("Token");

    dispatch({ type: "LoadUserRequest" });

    const { data } = await axios.get(`${server}/user/findme`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: "LoadUserSuccess", payload: data?.user });
  } catch (error) {
    dispatch({ type: "LoadUserFail", payload: error.response?.data?.message });
  }
};

export const loadSeller = () => async (dispatch) => {
  try {
    const token = Cookies.get("Token");

    dispatch({ type: "LoadSellerRequest" });

    const { data } = await axios.get(`${server}/seller/findme`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: "LoadSellerSuccess", payload: data?.seller });
  } catch (error) {
    dispatch({
      type: "LoadSellerFail",
      payload: error.response?.data?.message,
    });
  }
};
