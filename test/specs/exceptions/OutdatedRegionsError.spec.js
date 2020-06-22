import { expect } from 'chai';
import OutdatedRegionsError from '../../../src/exceptions/OutdatedRegionsError';

export default () => {
  describe('OutdatedRegionsError', () => {
    it('should have a message specifying list is outdated', () => {
      const err = new OutdatedRegionsError('psgc');
      expect(err.message).to.be.eql('List of regions for psgc is outdated.');
    });
  });
};
