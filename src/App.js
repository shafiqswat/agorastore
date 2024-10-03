/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import Footer from "./components/layout/Footer";

const App = () => {
  const location = useLocation(); // Get the current route

  // Define the routes where the footer should not be displayed
  const noFooterRoutes = ["/login", "/signup"];

  return (
    <>
      <AppRoutes />
      {/* Conditionally render Footer if the current route is NOT in the noFooterRoutes array */}
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
