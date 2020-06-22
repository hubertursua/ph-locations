import { expect } from 'chai';
import resolveLibJSON from '../../../src/utils/resolveLibJSON';

export default () => {
  describe('resolveLibJSON', () => {
    it('should return the correct json path', () => {
      const actual = resolveLibJSON('psgc', 'regions');

      expect(actual).to.endsWith('/json/psgc/regions.json');
    });
  });
};
