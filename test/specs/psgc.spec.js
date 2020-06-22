import { expect } from 'chai';
import sinon from 'sinon';
import * as standardLibModule from '../../src/standardLib';

export default () => {
  describe('psgc', () => {
    beforeEach(() => {
      sinon.stub(standardLibModule, 'default');
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should have regions, provinces, and citiesMunicipalities', () => {
      // eslint-disable-next-line global-require
      const lib = require('../../src/psgc').default;

      expect(lib).to.deep.eql({ regions: [], provinces: [], citiesMunicipalities: [] });
    });
  });
};
