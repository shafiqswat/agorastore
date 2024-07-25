/** @format */

export const fetchCollection = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  if (!response.ok) {
    throw new Error("Filed to Collection Data");
  }
  const data = await response.json();
  return data;
};
