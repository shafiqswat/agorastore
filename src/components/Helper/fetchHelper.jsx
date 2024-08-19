/** @format */
const BASE_API_URL = "http://68.183.112.7/api/v1";

export const fetchData = async (endpoint) => {
  const response = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `${BASE_API_URL}${endpoint}`
    )}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }

  const { contents } = await response.json();
  return JSON.parse(contents);
};