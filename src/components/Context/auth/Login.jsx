/** @format */

import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    window.location.href = "http://68.183.112.7/api/v1/auth/google"; // Redirect to your backend for Google authentication
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    // Check if the user has returned from the Google OAuth process
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      // Save the token in local storage
      localStorage.setItem("token", token);
      setIsAuthenticated(true);

      // Optionally, fetch the user details from your backend if needed
      fetchUserDetails(token);

      navigate("/");
    } else {
      // Check if there's already a token in local storage
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setIsAuthenticated(true);
        fetchUserDetails(storedToken); // Optionally fetch user details if the token exists
      }
    }
  }, [navigate]);

  const fetchUserDetails = async (token) => {
    try {
      const response = await fetch("http://68.183.112.7/api/v1/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  return (
    <LoginContext.Provider
      value={{ isAuthenticated, user, loginWithGoogle, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
