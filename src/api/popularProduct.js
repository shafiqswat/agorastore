/** @format */

export const fetchPopularProducts = async () => {
  const response = await fetch("");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data;
};
