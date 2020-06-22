import { expect } from 'chai';
import getRegions from '../../../../src/fetch/iso3166/getRegions';

export default () => {
  describe('getRegions', () => {
    let result;

    before(async () => {
      result = await getRegions();
    });

    it('should return a non-empty array', async () => {
      expect(result.length).to.be.gt(0);
    });

    context('elements', () => {
      let element;

      before(async () => {
        [element] = result;
      });

      it('should have a property "code"', async () => {
        expect(element).to.have.property('code');
      });

      it('should have a property "name"', async () => {
        expect(element).to.have.property('name');
      });

      it('should have a property "nameTL"', async () => {
        expect(element).to.have.property('nameTL');
      });

      it('should have a property "altName"', async () => {
        expect(element).to.have.property('altName');
      });
    });
  });
};
