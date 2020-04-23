import getCitiesMunicipalities from './getCitiesMunicipalities.spec';
import getProvinces from './getProvinces.spec';
import getRegions from './getRegions.spec';

// eslint-disable-next-line mocha/no-setup-in-describe
describe('psgc', () => {
  getCitiesMunicipalities();
  getProvinces();
  getRegions();
});
