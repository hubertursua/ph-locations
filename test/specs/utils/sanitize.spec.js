import { expect } from 'chai';
import sanitize from '../../../src/utils/sanitize';

export default () => {
  describe('sanitize', () => {
    it('should remove extra spaces', () => {
      const str = ' This is a text with spaces ';
      const result = sanitize(str);
      expect(result).to.be.eql('This is a text with spaces');
    });

    it('should remove annotations', () => {
      const str = 'This is a text with annotations [a]';
      const result = sanitize(str);
      expect(result).to.be.eql('This is a text with annotations');
    });
  });
};
