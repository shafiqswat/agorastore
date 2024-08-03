/** @format */

export const fetchPopularProducts = async () => {
  const response = await fetch(
    "https://api.allorigins.win/get?url=http://68.183.112.7/api/v1/products/popular"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data;
};
