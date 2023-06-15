import axios from "axios";
import { server } from "../../server";
import Cookies from "js-cookie";

export const createProduct = (newForm) => async (dispatch) => {
  try {
    dispatch({ type: "LoadProductRequest" });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/product/create-product`,
      newForm,
      config
    );

    dispatch({ type: "LoadProductSuccess", payload: data?.product });
  } catch (error) {
    dispatch({
      type: "LoadProductFail",
      payload: error.response?.data?.message,
    });
  }
};
