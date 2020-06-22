import { expect } from 'chai';
import OutdatedCitiesMunsError from '../../../src/exceptions/OutdatedCitiesMunsError';

export default () => {
  describe('OutdatedCitiesMunsError', () => {
    it('should have a message specifying list is outdated', () => {
      const err = new OutdatedCitiesMunsError('psgc');
      expect(err.message).to.be.eql('List of cities and municipalities for psgc is outdated.');
    });
  });
};
