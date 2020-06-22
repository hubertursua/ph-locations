import { expect } from 'chai';

const provinces = require('../../../src/json/iso3166/provinces.json');

export default () => {
  describe('provinces.json', () => {
    it('should have 82 provinces', () => {
      expect(provinces.length).to.eql(82);
    });

    // Check a few provinces to see if data is correct
    it('should have correct data', () => {
      // Check a province that has no altName
      const camSurProv = provinces.find((r) => (r.code === 'PH-CAS'));

      expect(camSurProv).to.deep.eql({
        code: 'PH-CAS',
        name: 'Camarines Sur',
        altName: null,
        nameTL: 'Timog Kamarines',
        region: 'PH-05',
      });

      //--

      // Check a province that has an altName
      const samarProvince = provinces.find((r) => (r.code === 'PH-WSA'));

      expect(samarProvince).to.deep.eql({
        code: 'PH-WSA',
        name: 'Samar',
        altName: 'Western Samar',
        nameTL: 'Samar',
        region: 'PH-08',
      });
    });

    it('should have a Metro Manila province', () => {
      const metroManilaProv = provinces.find((r) => (r.code === 'PH-MMM'));

      expect(metroManilaProv).to.deep.eql({
        code: 'PH-MMM',
        name: 'Metro Manila',
        altName: null,
        nameTL: 'Kalakhang Maynila',
        region: 'PH-00',
      });
    });

    // Check if alt name was processed correctly
    it('should have no parenthesis in names', () => {
      provinces.forEach((province) => {
        const parenthesis = /[()]/g;

        expect(province.name.search(parenthesis)).to.be.eql(-1, `"${province.name}" has a parenthesis`);
        expect(province.nameTL.search(parenthesis)).to.be.eql(-1, `"${province.nameTL}" has a parenthesis`);

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

      it('should have a field "nameTL"', () => {
        expect(province).to.haveOwnProperty('nameTL');
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
