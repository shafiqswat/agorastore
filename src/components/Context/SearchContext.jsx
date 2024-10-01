/** @format */

import React, { createContext, useState } from "react";
import { FetchSearchData } from "../../api/index";
import axios from "axios"; // Add axios to handle image upload
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to search products by name
  const searchProductsByName = async (productName) => {
    setLoading(true);
    setError(null);
    try {
      const productsData = await FetchSearchData(productName);
      setSearchProducts(productsData.data);
    } catch (err) {
      console.error("Error fetching search data:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const searchProductsByImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://agora.histudio.co/api/v1/image-search",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const productsData = response.data.products; // Assuming the API returns search results
      setSearchProducts(productsData); // Ensure this line updates searchProducts
      console.log(productsData, "Image Search Items");

      return productsData; // Return the fetched data
    } catch (err) {
      console.error("Error searching products by image:", err);
      setError(err);
      throw err; // Rethrow the error for handling in the calling function
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        searchProducts,
        loading,
        error,
        value,
        setValue,
        searchProductsByName,
        searchProductsByImage, // Provide image search functionality
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
