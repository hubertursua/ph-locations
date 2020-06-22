import { expect } from 'chai';

const regions = require('../../../src/json/iso3166/regions.json');

export default () => {
  describe('regions.json', () => {
    it('should have 17 regions', () => {
      expect(regions.length).to.eql(17);
    });

    // Check a few regions to see if data is correct
    it('should have correct data', () => {
      const ncrRegion = regions.find((r) => (r.code === 'PH-00'));

      expect(ncrRegion).to.deep.eql({
        code: 'PH-00',
        name: 'National Capital Region',
        nameTL: 'Pambansang Punong Rehiyon',
        altName: 'NCR',
      });

      //--

      const bicolRegion = regions.find((r) => (r.code === 'PH-05'));

      expect(bicolRegion).to.deep.eql({
        code: 'PH-05',
        name: 'Bicol',
        nameTL: 'Rehiyon ng Bikol',
        altName: 'V',
      });

      //--

      const armmRegion = regions.find((r) => (r.code === 'PH-14'));

      expect(armmRegion).to.deep.eql({
        code: 'PH-14',
        name: 'Autonomous Region in Muslim Mindanao',
        nameTL: 'Nagsasariling Rehiyon ng Muslim sa Mindanaw',
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

      it('should have a field "nameTL"', () => {
        expect(region).to.haveOwnProperty('nameTL');
      });

      it('should have a field "altName"', () => {
        expect(region).to.haveOwnProperty('altName');
      });
    });
  });
};
