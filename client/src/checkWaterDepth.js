const checkWaterDepth = async (setWaterDepth, locationData, startDate) => {
  const { lat, lng } = locationData;
  const date = startDate.toISOString();
  const result = await fetch(
    `https://rain-mxm.begin.app/water-depth?lat=${lat}&long=${lng}&date=${date}`
  );
  const json = await result.json();
  setWaterDepth(json);
};
export default checkWaterDepth;
