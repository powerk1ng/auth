export const fetchData = async (url, params) => {
  const request = await fetch(url, params);
  const response = await request.json();

  if (request.ok) {
    return response;
  }

  return Promise.reject(response)
};