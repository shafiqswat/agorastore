/** @format */

// index.js
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
import { PopularProductProvider } from "./components/Context/PopularProductContext";
import SimilarProductsProvider from "./components/Context/SimilarProductsContext";
import SearchContextProvider from "./components/Context/SearchContext";
import ReviewProvider from "./components/Context/ReviewContext";
import BrandProvider from "./components/Context/BrandContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SelectedImagesProvider>
      <ListProvider>
        <PopularProductProvider>
          <CartProvider>
            <FeaturedProvider>
              <ProductProvider>
                <SimilarProductsProvider>
                  <SearchContextProvider>
                    <ReviewProvider>
                      <BrandProvider>
                        <BrowserRouter>
                          <App />
                        </BrowserRouter>
                      </BrandProvider>
                    </ReviewProvider>
                  </SearchContextProvider>
                </SimilarProductsProvider>
              </ProductProvider>
            </FeaturedProvider>
          </CartProvider>
        </PopularProductProvider>
      </ListProvider>
    </SelectedImagesProvider>
  </React.StrictMode>
);

reportWebVitals();
