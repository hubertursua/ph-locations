import getCitiesMunicipalities from './getCitiesMunicipalities.spec';
import getProvinces from './getProvinces.spec';
import getRegions from './getRegions.spec';

// eslint-disable-next-line mocha/no-setup-in-describe
describe('iso3166', () => {
  getCitiesMunicipalities();
  getProvinces();
  getRegions();
});
