/** @format */

export const fetchProducts = async () => {
  const response = await fetch("/api/v1/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data;
};
