/** @format */

export const fetchSimilarProducts = async (productId) => {
  const response = await fetch(`api/v1/products/${productId}/similar`);
  if (!response.ok) {
    throw new Error("Failed to fetch similar products");
  }
  const data = await response.json();
  return data;
};
