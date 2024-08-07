/** @format */

export const FetchSearchData = async (productName) => {
  const response = await fetch(`/api/v1/products/search?q=${productName}`);
  if (!response.ok) {
    throw new Error("Failed to search products");
  }
  const { contents } = await response.json();
  return JSON.parse(contents);
};
