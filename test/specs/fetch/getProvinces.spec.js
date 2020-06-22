import { expect } from 'chai';
import sinon from 'sinon';
import * as iso3166GetProvincesModule from '../../../src/fetch/iso3166/getProvinces';
import * as psgcGetProvincesModule from '../../../src/fetch/psgc/getProvinces';
import getProvinces from '../../../src/fetch/getProvinces';

export default () => {
  describe('getProvinces', () => {
    beforeEach(() => {
      sinon.stub(iso3166GetProvincesModule, 'default').returns('return-iso3166');
      sinon.stub(psgcGetProvincesModule, 'default').returns('return-psgc');
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should return psgc library if source is psgc', async () => {
      const actual = await getProvinces('psgc');
      expect(actual).to.be.eql('return-psgc');
    });

    it('should return iso3166 library if source is iso3166', async () => {
      const actual = await getProvinces('iso3166');
      expect(actual).to.be.eql('return-iso3166');
    });

    it('should default to iso3166 library if no source is specified', async () => {
      const actual = await getProvinces();
      expect(actual).to.be.eql('return-iso3166');
    });
  });
};
