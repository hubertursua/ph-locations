import { expect } from 'chai';

const provinces = require('../../../src/json/psgc/provinces.json');

export default () => {
  describe('provinces.json', () => {
    it('should have 82 provinces', () => {
      expect(provinces.length).to.eql(82);
    });

    // Check a few provinces to see if data is correct
    it('should have correct data', () => {
      // Check a province that has no altName
      const camSurProv = provinces.find((r) => (r.code === '051700000'));

      expect(camSurProv).to.deep.eql({
        code: '051700000',
        name: 'Camarines Sur',
        altName: null,
        region: '050000000',
      });

      //--

      // Check a province that has an altName
      const samarProvince = provinces.find((r) => (r.code === '086000000'));

      expect(samarProvince).to.deep.eql({
        code: '086000000',
        name: 'Samar',
        altName: 'Western Samar',
        region: '080000000',
      });
    });

    it('should have a Metro Manila province', () => {
      const metroManilaProv = provinces.find((r) => (r.code === '130100000'));

      expect(metroManilaProv).to.deep.eql({
        code: '130100000',
        name: 'Metro Manila',
        altName: null,
        region: '130000000',
      });
    });

    // Check if alt name was processed correctly
    it('should have no parenthesis in names', () => {
      provinces.forEach((province) => {
        const parenthesis = /[()]/g;

        expect(province.name.search(parenthesis)).to.be.eql(-1, `"${province.name}" has a parenthesis`);

        if (province.altName) {
          expect(province.altName.search(parenthesis)).to.be.eql(-1, `"${province.altName}" has a parenthesis`);
        }
      });
    });

    describe('province', () => {
      let province;

      before(() => {
        [province] = provinces;
      });

      it('should have a field "code"', () => {
        expect(province).to.haveOwnProperty('code');
      });

      it('should have a field "name"', () => {
        expect(province).to.haveOwnProperty('name');
      });

      it('should have a field "altName"', () => {
        expect(province).to.haveOwnProperty('altName');
      });

      it('should have a field "region"', () => {
        expect(province).to.haveOwnProperty('region');
      });
    });
  });
};
