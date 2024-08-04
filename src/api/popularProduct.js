/** @format */

export const fetchPopularProducts = async () => {
  const response = await fetch("/api/v1/products/popular");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data;
};
