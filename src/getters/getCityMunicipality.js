// eslint-disable-next-line arrow-body-style
export default (cityMunCode, cities) => {
  return cities.find((cityMun) => cityMun.code === cityMunCode) || null;
};
