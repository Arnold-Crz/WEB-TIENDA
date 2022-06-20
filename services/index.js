export const getData = async () => {
  const url = `${process.env.API_URL}/portadas`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
