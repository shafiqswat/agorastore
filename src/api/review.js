/** @format */

export const fetchReview = async (productId) => {
  const response = await fetch(
    `https://api.allorigins.win/get?url=http://68.183.112.7/api/v1/reviews/${productId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const { contents } = await response.json();
  const review = JSON.parse(contents);

  if (!Array.isArray(review)) {
    throw new Error("Fetched data is not an array");
  }

  return review;
};
