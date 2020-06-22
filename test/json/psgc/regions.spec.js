import { expect } from 'chai';

const regions = require('../../../src/json/psgc/regions.json');

export default () => {
  describe('regions.json', () => {
    it('should have 17 regions', () => {
      expect(regions.length).to.eql(17);
    });

    // Check a few regions to see if data is correct
    it('should have correct data', () => {
      const ncrRegion = regions.find((r) => (r.code === '130000000'));

      expect(ncrRegion).to.deep.eql({
        code: '130000000',
        name: 'National Capital Region',
        altName: 'NCR',
      });

      //--

      const bicolRegion = regions.find((r) => (r.code === '050000000'));

      expect(bicolRegion).to.deep.eql({
        code: '050000000',
        name: 'Bicol Region',
        altName: 'Region V',
      });

      //--

      const armmRegion = regions.find((r) => (r.code === '150000000'));

      expect(armmRegion).to.deep.eql({
        code: '150000000',
        name: 'Autonomous Region In Muslim Mindanao',
        altName: 'ARMM',
      });
    });

    describe('region', () => {
      let region;

      before(() => {
        [region] = regions;
      });

      it('should have a field "code"', () => {
        expect(region).to.haveOwnProperty('code');
      });

      it('should have a field "name"', () => {
        expect(region).to.haveOwnProperty('name');
      });

      it('should have a field "altName"', () => {
        expect(region).to.haveOwnProperty('altName');
      });
    });
  });
};
