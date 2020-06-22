import fs from 'fs';
import { expect } from 'chai';
import sinon from 'sinon';
import getFileMD5Checksum from '../../../src/utils/getFileMD5Checksum';

export default () => {
  describe('getFileMD5Checksum', () => {
    beforeEach(() => {
      sinon.stub(fs, 'readFileSync').returns('hello');
    });

    afterEach(() => {
      sinon.restore();
    });

    it("should return the md5 hash of a file's contents", () => {
      const expectedChecksum = '5d41402abc4b2a76b9719d911017c592';

      const actualChecksum = getFileMD5Checksum('./dummypath');

      expect(expectedChecksum).to.be.eql(actualChecksum);
    });
  });
};
