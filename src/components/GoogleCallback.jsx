/** @format */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Extract the 'code' from the URL parameters
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      // Make a request to your backend to exchange the code for the token
      axios
        .get(
          `https://agora.histudio.co/api/v1/auth/google/callback?code=${code}`
        )
        .then((response) => {
          const { token } = response.data.data;

          // Check if token exists in the response
          if (token) {
            // Store the token in localStorage
            localStorage.setItem("token", token);

            // Redirect the user to the home page
            navigate("/");
          } else {
            console.error("No token received in the response");
            // Redirect to login page if no token is found
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("Failed to exchange code for token:", error);
          // Redirect to login page on failure
          navigate("/login");
        });
    } else {
      console.error("No code found in the URL");
      navigate("/login"); // Redirect to login if no code is found
    }
  }, [navigate]);

  return <div>Loading...</div>; // Show loading while fetching the token
};

export default GoogleCallback;
