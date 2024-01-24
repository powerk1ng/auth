export const fetchData = async (url, params) => {
  try {
    const request = await fetch(url, params);
    if (!request.ok) {
      throw new Error(`Could not fetch from ${url}`);
    }
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};
