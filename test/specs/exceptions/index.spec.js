/* eslint-disable mocha/no-setup-in-describe */
import OutdatedCitiesMunsError from './OutdatedCitiesMunsError.spec';
import OutdatedLibError from './OutdatedLibError.spec';
import OutdatedProvincesError from './OutdatedProvincesError.spec';
import OutdatedRegionsError from './OutdatedRegionsError.spec';

export default () => {
  describe('exceptions', () => {
    OutdatedCitiesMunsError();
    OutdatedLibError();
    OutdatedProvincesError();
    OutdatedRegionsError();
  });
};
