import { expect } from 'chai';
import sinon from 'sinon';
import * as iso3166GetRegionsModule from '../../../src/fetch/iso3166/getRegions';
import * as psgcGetRegionsModule from '../../../src/fetch/psgc/getRegions';
import getRegions from '../../../src/fetch/getRegions';

export default () => {
  describe('getRegions', () => {
    beforeEach(() => {
      sinon.stub(iso3166GetRegionsModule, 'default').returns('return-iso3166');
      sinon.stub(psgcGetRegionsModule, 'default').returns('return-psgc');
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should return psgc library if source is psgc', async () => {
      const actual = await getRegions('psgc');
      expect(actual).to.be.eql('return-psgc');
    });

    it('should return iso3166 library if source is iso3166', async () => {
      const actual = await getRegions('iso3166');
      expect(actual).to.be.eql('return-iso3166');
    });

    it('should default to iso3166 library if no source is specified', async () => {
      const actual = await getRegions();
      expect(actual).to.be.eql('return-iso3166');
    });
  });
};
