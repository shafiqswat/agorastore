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
        "https://agora.histudio.co/api/v1/auth/login",
        { email, password }
      );

      localStorage.setItem("token", data.data.token);
      setIsAuthenticated(true);
      setUser(data.data.user);
      navigate("/"); // Redirect to home after login
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // Signup User
  const signup = async (firstName, lastName, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.post(
        "https://agora.histudio.co/api/v1/auth/signup",
        {
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
        }
      );

      localStorage.setItem("token", data.data.token);
      setIsAuthenticated(true);
      setUser(data.data.user);
      navigate("/"); // Redirect to home after signup
    } catch (error) {
      setError("Signup failed. Please try again.");
      console.error("Signup failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // Google Login - Redirect user to Google's OAuth page
  const loginWithGoogle = () => {
    window.location.href = "https://agora.histudio.co/api/v1/auth/google";
  };

  // Logout User
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    navigate("/login"); // Redirect to login page after logout
  };

  // Fetch User Data if Token Exists
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoading(true);
      axios
        .get("https://agora.histudio.co/api/v1/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data.data.user); // Set user data
          setIsAuthenticated(true);
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            localStorage.removeItem("token"); // Clear token if unauthorized
            setIsAuthenticated(false);
            setUser(null);
          }
          setError("Failed to fetch user data.");
          console.error("Error fetching user:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        error,
        setError,
        login,
        signup,
        logout,
        loginWithGoogle,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
