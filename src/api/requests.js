export const generalPost = async (url, values) => {
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  }

  const request = await fetch(url, params);
  const response = await request.json();

  if (request.ok) {
    return response;
  }

  return Promise.reject(response)
};