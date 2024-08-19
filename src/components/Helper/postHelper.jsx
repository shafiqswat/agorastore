/** @format */
const BASE_API_URL = "http://68.183.112.7/api/v1";

export const postData = async (endpoint, data) => {
  const response = await fetch(`${BASE_API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response, "Check the Data is added");

  if (!response.ok) {
    throw new Error(`Failed to post data to ${endpoint}`);
  }

  return await response.json();
};
