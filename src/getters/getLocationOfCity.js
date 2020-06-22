export default (cityMunCode, getCityMunicipality, getProvince, getRegion) => {
  const cityMunicipality = getCityMunicipality(cityMunCode);

  if (!cityMunicipality) {
    return null;
  }

  const province = getProvince(cityMunicipality.province);
  const region = getRegion(province.region);

  return {
    cityMunicipality,
    province,
    region,
  };
};
