// eslint-disable-next-line arrow-body-style
export default (regionCode, provinces) => {
  return provinces.filter((province) => province.region === regionCode);
};
