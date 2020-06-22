import getRegionFactory from './getters/getRegion';
import getProvinceFactory from './getters/getProvince';
import getCityMunFactory from './getters/getCityMunicipality';
import getProvincesOfRegionFactory from './getters/getProvincesOfRegion';
import getCitiesMunsOfProvinceFactory from './getters/getCitiesMunsOfProvince';
import getLocationOfCityFactory from './getters/getLocationOfCity';

export default (
  regions,
  provinces,
  citiesMunicipalities,
) => {
  const getRegion = (code) => getRegionFactory(code, regions);
  const getProvince = (code) => getProvinceFactory(code, provinces);
  const getCityMunicipality = (code) => getCityMunFactory(code, citiesMunicipalities);
  const getProvincesOfRegion = (regionCode) => getProvincesOfRegionFactory(regionCode, provinces); // eslint-disable-line max-len
  const getCitiesMunsOfProvince = (provinceCode) => getCitiesMunsOfProvinceFactory(provinceCode, citiesMunicipalities); // eslint-disable-line max-len
  const getLocationOfCity = (cityMunCode) => getLocationOfCityFactory(cityMunCode, getCityMunicipality, getProvince, getRegion); // eslint-disable-line max-len

  return {
    regions,
    provinces,
    citiesMunicipalities,
    getRegion,
    getProvince,
    getCityMunicipality,
    getProvincesOfRegion,
    getCitiesMunsOfProvince,
    getLocationOfCity,
  };
};
