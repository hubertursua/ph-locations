/* eslint-disable mocha/no-setup-in-describe */
import iso3166 from './iso3166/index.spec';
import psgc from './psgc/index.spec';

describe('json', () => {
  iso3166();
  psgc();
});
