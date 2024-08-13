/** @format */

import React, { createContext, useState, useEffect } from "react";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [listName, setListName] = useState("");
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    console.log(items, "listItems or Products");
  }, [items]);

  return (
    <ListContext.Provider value={{ listName, setListName, items, setItems }}>
      {children}
    </ListContext.Provider>
  );
};
