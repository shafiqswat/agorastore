/** @format */

export const BrandProduct = async (brandName) => {
  console.log(brandName, "brandName");
  const response = await fetch(
    `https://api.allorigins.win/get?url=http://68.183.112.7/api/v1/brand/${brandName}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const { contents } = await response.json();

  const parsedData = JSON.parse(contents);

  return parsedData || [];
};
