/** @format */

import React, { createContext, useState, useEffect } from "react";

const SelectedImagesContext = createContext();

const SelectedImagesProvider = ({ children }) => {
  const [selectedImages, setSelectedImages] = useState(() => {
    const storedImages = localStorage.getItem("selectedImages");
    return storedImages ? JSON.parse(storedImages) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectedImages", JSON.stringify(selectedImages));
  }, [selectedImages]);

  return (
    <SelectedImagesContext.Provider
      value={{ selectedImages, setSelectedImages }}>
      {children}
    </SelectedImagesContext.Provider>
  );
};

export { SelectedImagesContext, SelectedImagesProvider };
