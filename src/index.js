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
import SimilarProductsProvider from "./components/Context/SimilarProductsContext";
import SearchContextProvider from "./components/Context/SearchContext";
import ReviewProvider from "./components/Context/ReviewContext";
import BrandProvider from "./components/Context/BrandContext";
import PopularProductProvider from "./components/Context/PopularProductContext";
import { PostReviewProvider } from "./components/Context/PostReviewContext";
import ChatProvider from "./components/Context/ChatContext";
import { LoginProvider } from "./components/Context/Login";
import { CollectionProvider } from "./components/Context/SingleCollection";
import { AuthProvider } from "./components/Context/AuthContext";

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
                    <ChatProvider>
                      <ReviewProvider>
                        <PostReviewProvider>
                          <BrandProvider>
                            <BrowserRouter>
                              <LoginProvider>
                                <CollectionProvider>
                                  <AuthProvider>
                                    <App />
                                  </AuthProvider>
                                </CollectionProvider>
                              </LoginProvider>
                            </BrowserRouter>
                          </BrandProvider>
                        </PostReviewProvider>
                      </ReviewProvider>
                    </ChatProvider>
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
