import { expect } from 'chai';
import getProvinces from '../../../src/iso3166/getProvinces';

export default () => {
  describe('getProvinces', () => {
    let result;

    before(async () => {
      result = await getProvinces();
    });

    it('should return a non-empty array', async () => {
      expect(result.length).to.be.gt(0);
    });

    context('elements', async () => {
      let element;

      before(async () => {
        element = result[0];
      });

      it('should have a property "code"', async () => {
        expect(element).to.have.property('code');
      });

      it('should have a property "name"', async () => {
        expect(element).to.have.property('name');
      });

      it('should have a property "altName"', async () => {
        expect(element).to.have.property('altName');
      });

      it('should have a property "nameTL"', async () => {
        expect(element).to.have.property('nameTL');
      });

      it('should have a property "region"', async () => {
        expect(element).to.have.property('region');
      });
    });
  });
};
