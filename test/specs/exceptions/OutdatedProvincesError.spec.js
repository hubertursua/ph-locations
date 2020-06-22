import { expect } from 'chai';
import OutdatedProvincesError from '../../../src/exceptions/OutdatedProvincesError';

export default () => {
  describe('OutdatedProvincesError', () => {
    it('should have a message specifying list is outdated', () => {
      const err = new OutdatedProvincesError('psgc');
      expect(err.message).to.be.eql('List of provinces for psgc is outdated.');
    });
  });
};
