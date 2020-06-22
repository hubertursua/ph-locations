// eslint-disable-next-line arrow-body-style
export default (regionCode, regions) => {
  return regions.find((region) => region.code === regionCode) || null;
};
