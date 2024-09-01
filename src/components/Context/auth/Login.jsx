/** @format */

import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const response = await axios.post(
        "http://68.183.112.7/api/v1/auth/google"
      );

      const userData = response.data;

      if (userData && userData.token) {
        localStorage.setItem("token", userData.token);
        setUser(userData.user);
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Google Authentication failed.");
      }
    } catch (error) {
      console.error("Google Authentication error:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <LoginContext.Provider
      value={{ isAuthenticated, user, loginWithGoogle, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
