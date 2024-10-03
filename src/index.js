/** @format */

// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductProvider } from "./context/ProductContext";
import { FeaturedProvider } from "./context/FeaturedContext";
import { CartProvider } from "./context/CartContext";
import { ListProvider } from "./context/ListContext";
import { SelectedImagesProvider } from "./context/SelectedImagesContext";
import SimilarProductsProvider from "./context/SimilarProductsContext";
import SearchContextProvider from "./context/SearchContext";
import ReviewProvider from "./context/ReviewContext";
import BrandProvider from "./context/BrandContext";
import PopularProductProvider from "./context/PopularProductContext";
import ChatProvider from "./context/ChatContext";
import { CollectionProvider } from "./context/SingleCollection";
import { AuthProvider } from "./context/AuthContext";
import { PaymentProvider } from "./context/PaymentContext";

// Import Stripe and Elements
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PostReviewProvider } from "./context/PostReviewContext";
import { ShippingProvider } from "./context/ShippingContext";

// Load Stripe using your publishable key
const stripePromise = loadStripe(
  "pk_test_51PigjwRvL6cvp6sn58sYOELKUxWda68Nfp2e62Okqrw701jyiVlE039J6OeC7BWV8hvWmQyt053d5QC4OnTOQ6zo00AWYz40Ub"
);

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
                              <CollectionProvider>
                                <AuthProvider>
                                  <ShippingProvider>
                                    <Elements stripe={stripePromise}>
                                      <PaymentProvider>
                                        <App />
                                      </PaymentProvider>
                                    </Elements>
                                  </ShippingProvider>
                                </AuthProvider>
                              </CollectionProvider>
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
