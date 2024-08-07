/** @format */

import React, { useContext } from "react";
import { SearchContext } from "../components/Context/SearchContext";

const Search = () => {
  const { searchProducts, loading, error } = useContext(SearchContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {searchProducts.length > 0 ? (
        searchProducts.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default Search;
