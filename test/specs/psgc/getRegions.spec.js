import { expect } from 'chai';
import getRegions from '../../../src/psgc/getRegions';

export default () => {
  describe('getRegions', () => {
    let result;

    before(async () => {
      result = await getRegions();
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

      it('should have a property "acronym"', async () => {
        expect(element).to.have.property('acronym');
      });
    });
  });
};
