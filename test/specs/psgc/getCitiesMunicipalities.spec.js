import { expect } from 'chai';
import getCitiesMunicipalities from '../../../src/psgc/getCitiesMunicipalities';
import getProvinces from '../../../src/psgc/getProvinces';

export default () => {
  describe('getCitiesMunicipalities', () => {
    let provinces;
    let result;

    before(async () => {
      provinces = await getProvinces();
      result = await getCitiesMunicipalities(provinces);
    });

    it('should return a non-empty array', async () => {
      expect(result.length).to.be.gt(0);
    });

    context('elements', async () => {
      let element;

      before(async () => {
        element = result[0];
      });

      it('should have a property "name"', async () => {
        expect(element).to.have.property('name');
      });

      it('should have a property "fullName"', async () => {
        expect(element).to.have.property('fullName');
      });

      it('should have a property "altName"', async () => {
        expect(element).to.have.property('altName');
      });

      it('should have a property "province"', async () => {
        expect(element).to.have.property('province');
      });

      it('should have a property "classification"', async () => {
        expect(element).to.have.property('classification');
      });

      it('should have a property "isCapital"', async () => {
        expect(element).to.have.property('isCapital');
      });
    });
  });
};
