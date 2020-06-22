import { expect } from 'chai';
import getAltName from '../../../src/utils/getAltName';

export default () => {
  describe('getAltName', () => {
    it('should get the alt name', () => {
      const str = ' Province Name (Province Alt Name)';
      const result = getAltName(str);
      expect(result).to.be.equal('Province Alt Name');
    });

    it('should return null if there is no alt name', () => {
      const str = 'Province Name';
      const result = getAltName(str);
      expect(result).to.be.equal(null);
    });
  });
};
