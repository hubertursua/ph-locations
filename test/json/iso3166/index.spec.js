/* eslint-disable mocha/no-setup-in-describe */
import regions from './regions.spec';
import provinces from './provinces.spec';
import citiesMunicipalities from './citiesMunicipalities.spec';

export default () => {
  describe('iso3166', () => {
    regions();
    provinces();
    citiesMunicipalities();
  });
};
