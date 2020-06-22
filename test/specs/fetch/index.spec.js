/* eslint-disable mocha/no-setup-in-describe */
import iso3166 from './iso3166/index.spec';
import psgc from './psgc/index.spec';
import getCitiesMunicipalities from './getCitiesMunicipalities.spec';
import getProvinces from './getProvinces.spec';
import getRegions from './getRegions.spec';

export default () => {
  describe('fetch', () => {
    iso3166();
    psgc();
    getCitiesMunicipalities();
    getProvinces();
    getRegions();
  });
};
