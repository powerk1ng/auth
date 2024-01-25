export const fetchData = async (url, params) => {
    const request = await fetch(url, params);

    if (!request.ok) {
      throw new Error(`Could not fetch from ${url}`);
    }

    const response = await request.json();
    return response;
};