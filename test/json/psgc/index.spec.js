/* eslint-disable mocha/no-setup-in-describe */
import regions from './regions.spec';
import provinces from './provinces.spec';
import citiesMunicipalities from './citiesMunicipalities.spec';

export default () => {
  describe('psgc', () => {
    regions();
    provinces();
    citiesMunicipalities();
  });
};
