/** @format */
const BASE_API_URL = "https://agora.histudio.co/api/v1";

export const fetchData = async (endpoint) => {
  const response = await fetch(`${BASE_API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }

  return response.json();
};
