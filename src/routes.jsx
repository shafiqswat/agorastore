/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Merchant from "./pages/Merchant";
import Docs from "./pages/Docs";
import Collections from "./pages/Collections";
import PopularProducts from "./pages/PopularProducts";
import StoreCrawler from "./pages/StoreCrawler";
import ProductDetails from "./pages/productdetails";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Lists from "./pages/Lists";
import Settings from "./pages/Settings";
import Share from "./components/Share";
import Orders from "./pages/Orders";
import Search from "./pages/Search";
import Brand from "./pages/Brand";
import Athena from "./pages/Athena";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "../src/components/ProtectedRoutes";
const AppRoutes = () => (
  <Routes>
    <Route
      path='/'
      element={<Home />}
    />
    <Route
      path='/about'
      element={<About />}
    />
    <Route
      path='/contact'
      element={<Contact />}
    />
    <Route
      path='/privacy'
      element={<Privacy />}
    />
    <Route
      path='/terms'
      element={<Terms />}
    />
    <Route
      path='/merchant'
      element={<Merchant />}
    />

    <Route
      path='/docs'
      element={<Docs />}
    />
    <Route
      path='/collections/:collectionId'
      element={<Collections />}
    />
    <Route
      path='/popularproducts'
      element={<PopularProducts />}
    />
    <Route
      path='/product/:productId'
      element={<ProductDetails />}
    />
    <Route
      path='/store-crawler'
      element={<StoreCrawler />}
    />
    <Route
      path='/cart'
      element={
        <ProtectedRoute>
          <Cart />
        </ProtectedRoute>
      }
    />
    <Route
      path='/lists'
      element={
        <ProtectedRoute>
          <Lists />
        </ProtectedRoute>
      }
    />
    <Route
      path='/lists/:shareId'
      element={
        <ProtectedRoute>
          <Share />
        </ProtectedRoute>
      }
    />

    <Route
      path='/settings'
      element={
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      }
    />
    <Route
      path='/orders'
      element={
        <ProtectedRoute>
          <Orders />
        </ProtectedRoute>
      }
    />
    <Route
      path='/search/:productName'
      element={<Search />}
    />
    <Route
      path='/brand/:brandName'
      element={<Brand />}
    />
    <Route
      path='/search/athena'
      element={<Athena />}
    />
    <Route
      path='/login'
      element={<Login />}
    />
    <Route
      path='/signup'
      element={<SignUp />}
    />
  </Routes>
);

export default AppRoutes;
