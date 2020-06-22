import { expect } from 'chai';
import sinon from 'sinon';
import * as resolveLibJSONModule from '../../../src/utils/resolveLibJSON';
import * as getFileMD5ChecksumModule from '../../../src/utils/getFileMD5Checksum';
import getLibMD5Checksums from '../../../src/utils/getLibMD5Checksums';

export default () => {
  describe('getLibMD5Checksums', () => {
    beforeEach(() => {
      sinon.stub(getFileMD5ChecksumModule, 'default').returns('');
      sinon.stub(resolveLibJSONModule, 'default').returns('');
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should have a property regions', () => {
      const actual = getLibMD5Checksums('psgc');
      expect(actual).to.haveOwnProperty('regions');
    });

    it('should have a property provinces', () => {
      const actual = getLibMD5Checksums('psgc');
      expect(actual).to.haveOwnProperty('provinces');
    });

    it('should have a property citiesMunicipalities', () => {
      const actual = getLibMD5Checksums('psgc');
      expect(actual).to.haveOwnProperty('citiesMunicipalities');
    });
  });
};
