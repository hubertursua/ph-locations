import { expect } from 'chai';
import stripAltName from '../../../src/utils/stripAltName';

export default () => {
  describe('stripAltName', () => {
    it('should remove the alt name', () => {
      const str = ' Province Name (Province Alt Name)';
      const result = stripAltName(str);
      expect(result).to.be.equal('Province Name');
    });
  });
};
