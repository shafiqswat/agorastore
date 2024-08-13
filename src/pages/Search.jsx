/** @format */

import React, { useContext } from "react";
import { SearchContext } from "../components/Context/SearchContext";
import ProductCard from "../components/Cards/productCard";
import Header from "../components/layout/Header";
import Container from "../components/layout/container";

const Search = () => {
  const { searchProducts, loading, error } = useContext(SearchContext);

  return (
    <>
      <Header />
      <Container>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && (
          <div className='grid gap-5 fullSmall:grid-cols-1 extraLarge:grid-cols-5 extraSmall:grid-cols-2 small:grid-cols-3 medium:grid-cols-3 lessMedium:grid-cols-4 large:grid-cols-4'>
            {searchProducts.length > 0 ? (
              searchProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                />
              ))
            ) : (
              <div>No products found</div>
            )}
          </div>
        )}
      </Container>
    </>
  );
};

export default Search;
