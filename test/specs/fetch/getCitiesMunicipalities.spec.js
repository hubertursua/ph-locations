import { expect } from 'chai';
import sinon from 'sinon';
import * as iso3166GetCitiesMunsModule from '../../../src/fetch/iso3166/getCitiesMunicipalities';
import * as psgcGetCitiesMunsModule from '../../../src/fetch/psgc/getCitiesMunicipalities';
import getCitiesMunicipalities from '../../../src/fetch/getCitiesMunicipalities';

export default () => {
  describe('getCitiesMunicipalities', () => {
    beforeEach(() => {
      sinon.stub(iso3166GetCitiesMunsModule, 'default').returns('return-iso3166');
      sinon.stub(psgcGetCitiesMunsModule, 'default').returns('return-psgc');
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should return psgc library if source is psgc', async () => {
      const actual = await getCitiesMunicipalities([], 'psgc');
      expect(actual).to.be.eql('return-psgc');
    });

    it('should return iso3166 library if source is iso3166', async () => {
      const actual = await getCitiesMunicipalities([], 'iso3166');
      expect(actual).to.be.eql('return-iso3166');
    });

    it('should default to iso3166 library if no source is specified', async () => {
      const actual = await getCitiesMunicipalities([]);
      expect(actual).to.be.eql('return-iso3166');
    });
  });
};
