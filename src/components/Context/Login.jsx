/** @format */

/** @format */

import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    window.location.href = "https://agora.histudio.co/api/v1/auth/google";
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
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setIsAuthenticated(true);
        fetchUserDetails(storedToken);
      }
    }
  }, [navigate]);

  const fetchUserDetails = async (token) => {
    try {
      const response = await fetch("https://agora.histudio.co/api/v1/auth/me", {
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
