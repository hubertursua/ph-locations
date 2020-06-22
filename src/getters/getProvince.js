// eslint-disable-next-line arrow-body-style
export default (provinceCode, provinces) => {
  return provinces.find((province) => province.code === provinceCode) || null;
};
