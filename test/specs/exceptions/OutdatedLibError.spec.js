import { expect } from 'chai';
import OutdatedLibError from '../../../src/exceptions/OutdatedLibError';

export default () => {
  describe('OutdatedCitiesMunsError', () => {
    it('should have a message specifying list is outdated', () => {
      const fakeError = new Error();
      const err = new OutdatedLibError('psgc', [fakeError]);
      expect(err.message).to.be.eql('Library psgc is outdated.');
    });

    it('should have a property errors', () => {
      const fakeError = new Error();
      const err = new OutdatedLibError('psgc', [fakeError]);
      expect(err).to.haveOwnProperty('errors');
      expect(err.errors).to.deep.eql([fakeError]);
    });

    it('should have property errors default to an empty array', () => {
      const err = new OutdatedLibError('psgc');
      expect(err).to.haveOwnProperty('errors');
      expect(err.errors).to.deep.eql([]);
    });
  });
};
