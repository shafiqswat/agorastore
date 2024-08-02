/** @format */

export const fetchProducts = async () => {
  const response = await fetch(
    "https://api.allorigins.win/get?url=http://68.183.112.7/api/v1/products"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const { contents } = await response.json();
  return JSON.parse(contents);
};
