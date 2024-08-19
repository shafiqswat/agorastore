/** @format */
import { fetchData } from "../components/Helper/fetchHelper";
import { postData } from "../components/Helper/postHelper";

export const fetchProducts = () => fetchData("/products");

export const fetchPopularProducts = () => fetchData("/products/popular");

export const fetchReview = (productId) => fetchData(`/reviews/${productId}`);

export const FetchSearchData = (productName) => {
  const encodedProductName = encodeURIComponent(productName);
  return fetchData(`/products/search?q=${encodedProductName}`);
};

export const fetchSimilarProducts = (productId) =>
  fetchData(`/products/${productId}/similar`);

export const BrandProduct = (brandName) => fetchData(`/brand/${brandName}`);

export const postReview = (reviewData) => postData("/reviews", reviewData);
