const api = {
  getLocations: async () => {
    const result = await fetch(`http://localhost:5001/api/locations`);
    const json = await result.json();
    return json;
  },
};

export default api;
