
import { expect } from 'chai';
import stripCapital from '../../../src/utils/stripCapital';

export default () => {
  describe('stripCapital', () => {
    it('should remove "CAPITAL"', () => {
      const str = ' PILI (CAPITAL)';
      const result = stripCapital(str);
      expect(result).to.be.equal('PILI');
    });
  });
};
