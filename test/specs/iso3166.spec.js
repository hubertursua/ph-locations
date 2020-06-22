import { expect } from 'chai';
import sinon from 'sinon';
import * as standardLibModule from '../../src/standardLib';

export default () => {
  describe('iso3166', () => {
    beforeEach(() => {
      sinon.stub(standardLibModule, 'default');
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should have regions, provinces, and citiesMunicipalities', () => {
      // eslint-disable-next-line global-require
      const lib = require('../../src/iso3166').default;

      expect(lib).to.deep.eql({ regions: [], provinces: [], citiesMunicipalities: [] });
    });
  });
};
