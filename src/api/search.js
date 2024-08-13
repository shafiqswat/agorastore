/** @format */

export const FetchSearchData = async (productName) => {
  const encodedProductName = encodeURIComponent(productName);
  const response = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `http://68.183.112.7/api/v1/products/search?q=${encodedProductName}`
    )}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const { contents } = await response.json();

  const parsedData = JSON.parse(contents);

  return parsedData || [];
};
