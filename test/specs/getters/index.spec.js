/* eslint-disable mocha/no-setup-in-describe */
import getCitiesMunsOfProvince from './getCitiesMunsOfProvince.spec';
import getCityMunicipality from './getCityMunicipality.spec';
import getLocationOfCity from './getLocationOfCity.spec';
import getProvince from './getProvince.spec';
import getProvincesOfRegion from './getProvincesOfRegion.spec';
import getRegion from './getRegion.spec';

export default () => {
  describe('getters', () => {
    getCitiesMunsOfProvince();
    getCityMunicipality();
    getLocationOfCity();
    getProvince();
    getProvincesOfRegion();
    getRegion();
  });
};
