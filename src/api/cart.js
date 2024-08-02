/** @format */

import axios from "axios";

export const cartProducts = async () => {
  try {
    const response = await axios.post("/api/v1/products");
    return response.data;
  } catch (error) {
    throw new Error("Failed to Collect Data");
  }
};
