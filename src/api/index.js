/** @format */

import { fetchData } from "../components/Helper/fetchHelper";
import { postData } from "../components/Helper/postHelper";

// Get all Products of the home Page
export const fetchProducts = () => fetchData("/products");
// Get all Collection of the home page
export const fetchCollection = () => fetchData(`/collections`);
// Get A Single Collection
export const fetchSingleCollection = (collectionId) =>
  fetchData(`/collections/${collectionId}`);
// Get Similar Products of the Product detail page
export const fetchSimilarProducts = (productId) =>
  fetchData(`/products/${productId}/similar`);
// Get all Reviews of the Product in the Product Detail Page
export const fetchReview = (productId) => fetchData(`/reviews/${productId}`);
// Get all Popular Products
export const fetchPopularProducts = () => fetchData("/products/popular");
// Get Compare Products in the product details page
export const compareProduct = (productId) =>
  fetchData(`products/${productId}/compare`);
// Get Brand product in the Brand Page
export const BrandProduct = (brandName) => fetchData(`/brand/${brandName}`);

// Implement Search Functionality on the basis of the productName
export const FetchSearchData = (productName) => {
  const encodedProductName = encodeURIComponent(productName);
  return fetchData(`/products/search?q=${encodedProductName}`);
};
export const FetchShippingAddress = () => {
  fetchData("/shipping/addresses");
};
export const FetchChat = (chat) => {
  const encodedChat = encodeURIComponent(chat);
  return fetchData(`/ai?q=${encodedChat}`);
};

export const postReview = (reviewData) => postData("/reviews", reviewData);
