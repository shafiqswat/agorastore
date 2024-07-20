/** @format */

import { createContext } from "react";
import products from "../assets/products";

export const ProductContext = createContext(null);
const ProductContextProvider = (props) => {
  const contextValue = { products };
  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
