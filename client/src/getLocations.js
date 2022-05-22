const getLocations = async (setLocations) => {
  const url = "http://localhost:5001";
  const result = await fetch(`${url}/api/locations`);
  const json = await result.json();
  setLocations(json);
};
export default getLocations;
