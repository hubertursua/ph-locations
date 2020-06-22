import { expect } from 'chai';
import fixCasing from '../../../src/utils/fixCasing';

export default () => {
  describe('fixCasing', () => {
    it('should capitalize the first letter of words', () => {
      const str = 'CAMARINES SUR';
      const result = fixCasing(str);
      expect(result).to.be.equal('Camarines Sur');
    });
  });
};
