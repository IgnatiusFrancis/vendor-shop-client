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

// GET ALL PRODUCTS

export const getALlProducts = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getAllProductsShopRequest" });

    const { data } = await axios.get(
      `${server}/product/get-all-products/${id}`
    );

    dispatch({ type: "getAllProductsShopSuccess", payload: data?.products });
  } catch (error) {
    dispatch({
      type: "getAllProductsShopError",
      payload: error.response?.data?.message,
    });
  }
};

// GET ALL PRODUCTS

export const deleteProducts = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteProductRequest" });

    const { data } = await axios.get(
      `${server}/product/delete-shop-product/${id}`
    );

    dispatch({ type: "deleteProductSuccess", payload: data?.success });
  } catch (error) {
    dispatch({
      type: "deleteProductFailed",
      payload: error.response?.data?.message,
    });
  }
};
