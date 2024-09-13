/** @format */

import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Create Auth Context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Login User
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.post(
        "https://agora.histudio.co/api/v1/user/login",
        { email, password }
      );

      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      setUser(data.user);
      navigate("/");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // Signup
  const signup = async (firstName, lastName, email, password) => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const { data } = await axios.post(
        "https://agora.histudio.co/api/v1/user/signup",
        {
          firstname: firstName,
          lastname: lastName,
          email,
          password,
        }
      );

      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      setUser(data.user);
      navigate("/");
    } catch (error) {
      setError("Signup failed. Please try again.");
      console.error("Signup failed:", error);
    } finally {
      setLoading(false);
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
    console.log(token, "My Token");
    setLoading(true);

    if (token) {
      axios
        .get("https://agora.histudio.co/api/v1/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data);
          setIsAuthenticated(true);
        })
        .catch((error) => {
          // Assuming a 401 status code means the token is invalid/expired
          if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");
            setIsAuthenticated(false);
            setUser(null);
          }
          setError("Failed to fetch user data.");
          console.error("Error fetching user:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        setError,
        error,
        login,
        signup,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
