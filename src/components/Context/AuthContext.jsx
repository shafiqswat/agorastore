/** @format */
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Create Auth Context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Login User
  const login = async (email, password) => {
    try {
      const { data } = await axios.post(
        "http://68.183.112.7/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      setUser(data.user);
      navigate("/profile");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Logout User
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    navigate("/login");
  };

  // Fetch User Data if Token Exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://68.183.112.7/api/v1/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data);
          setIsAuthenticated(true);
        })
        .catch((error) => console.error("Error fetching user:", error));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
