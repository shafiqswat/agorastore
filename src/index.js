/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductProvider } from "./components/Context/ProductContext";
import { FeaturedProvider } from "./components/Context/FeaturedContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FeaturedProvider>
      <ProductProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductProvider>
    </FeaturedProvider>
  </React.StrictMode>
);

reportWebVitals();
