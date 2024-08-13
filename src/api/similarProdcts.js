/** @format */

export const fetchSimilarProducts = async (productId) => {
  const response = await fetch(
    `https://api.allorigins.win/get?url=http://68.183.112.7/api/v1/products/${productId}/similar`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const { contents } = await response.json();
  const products = JSON.parse(contents);

  if (!Array.isArray(products)) {
    throw new Error("Fetched data is not an array");
  }

  return products;
};
