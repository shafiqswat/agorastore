/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductProvider } from "./components/Context/ProductContext";
import { FeaturedProvider } from "./components/Context/FeaturedContext";
import { CartProvider } from "./components/Context/CartContext";
import { ListProvider } from "./components/Context/ListContext";
import { SelectedImagesProvider } from "./components/Context/SelectedImagesContext";
import SimilarProductsProvider from "./components/Context/SimilarProductsContext";
import { PopularProductProvider } from "./components/Context/PopularProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SelectedImagesProvider>
      <ListProvider>
        <PopularProductProvider>
          <SimilarProductsProvider>
            <CartProvider>
              <FeaturedProvider>
                <ProductProvider>
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                </ProductProvider>
              </FeaturedProvider>
            </CartProvider>
          </SimilarProductsProvider>
        </PopularProductProvider>
      </ListProvider>
    </SelectedImagesProvider>
  </React.StrictMode>
);

reportWebVitals();
