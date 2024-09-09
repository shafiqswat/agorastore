/** @format */

// /** @format */

// import { FetchShippingAddress } from "../../api/index";
// import React, { createContext, useEffect, useState } from "react";

// export const ShippingContext = createContext();

// const ShippingProvider = ({ children }) => {
//   const [address, setAddress] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const GetShippingAddress = async () => {
//     try {
//       // Retrieve the token from localStorage
//       const token = localStorage.getItem("authToken");

//       // Perform the fetch request with the Authorization header
//       const response = await fetch("/api/shipping-address", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Include token in the Authorization header
//         },
//       });

//       // Log the response status for debugging
//       console.log();
//       console.log(`Response status: ${response.status}`);

//       // Check if the response is ok (status code 2xx)
//       if (!response.ok) {
//         // Handle error responses (e.g., 401 Unauthorized, 404 Not Found)
//         throw new Error(`Error: ${response.statusText}`);
//       }

//       // Check if the response is JSON before parsing
//       const contentType = response.headers.get("Content-Type");
//       if (contentType && contentType.includes("application/json")) {
//         const data = await response.json();
//         setAddress(data); // Set the address state with the fetched data
//       } else {
//         throw new Error("Received non-JSON response");
//       }
//     } catch (error) {
//       console.error("Failed to fetch shipping address:", error); // Log the error
//       setError(error); // Set the error state
//     } finally {
//       setLoading(false); // Stop loading state after the request completes
//     }
//   };

//   useEffect(() => {
//     GetShippingAddress();
//   }, []);

//   return (
//     <ShippingContext.Provider value={{ address, loading, error }}>
//       {children}
//     </ShippingContext.Provider>
//   );
// };

// export default ShippingProvider;
