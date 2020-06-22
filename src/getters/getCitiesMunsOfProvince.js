// eslint-disable-next-line arrow-body-style
export default (provinceCode, citiesMunicipalities) => {
  return citiesMunicipalities.filter((cityMun) => cityMun.province === provinceCode);
};
