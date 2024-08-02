/** @format */

import { cartProducts } from "../../api/index";
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    const postProducts = async () => {
      try {
        const productsData = await cartProducts();
        console.log(productsData, "cartProducts");
        setCart(productsData);
        localStorage.setItem("cart", JSON.stringify(productsData));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    postProducts();
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, loading, error }}>
      {children}
    </CartContext.Provider>
  );
};
