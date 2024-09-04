/** @format */

import React, { useContext, useEffect } from "react";
import { SearchContext } from "../components/Context/SearchContext";
import ProductCard from "../components/Cards/productCard";
import Header from "../components/layout/Header";
import Container from "../components/layout/container";
import LoadingSkeleton from "../components/Skeleton";

const Search = () => {
  const { searchProducts, loading, error, value, searchProductsByName } =
    useContext(SearchContext);

  useEffect(() => {
    if (value) {
      searchProductsByName(value);
    }
  }, [value, searchProductsByName]);

  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <LoadingSkeleton count={10} />
        ) : (
          <div className='grid gap-5 fullSmall:grid-cols-1 extraLarge:grid-cols-5 extraSmall:grid-cols-2 small:grid-cols-3 medium:grid-cols-3 lessMedium:grid-cols-4 large:grid-cols-4'>
            {searchProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
              />
            ))}
          </div>
        )}
        {error && <p>Error loading products: {error.message}</p>}
      </Container>
    </>
  );
};

export default Search;
