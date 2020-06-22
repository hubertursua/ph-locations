/* eslint-disable mocha/no-setup-in-describe */
import fixCasing from './fixCasing.spec';
import getAltName from './getAltName.spec';
import getCityFullName from './getCityFullName.spec';
import getFileMD5Checksum from './getFileMD5Checksum.spec';
import getLibMD5Checksums from './getLibMD5Checksums.spec';
import getProvinceCode from './getProvinceCode.spec';
import resolveLibJSON from './resolveLibJSON.spec';
import sanitize from './sanitize.spec';
import sanitizeProvinceName from './sanitizeProvinceName.spec';
import stripAltName from './stripAltName.spec';
import stripCapital from './stripCapital.spec';
import writeJsonFile from './writeJsonFile.spec';

export default () => {
  describe('utils', () => {
    fixCasing();
    getAltName();
    getCityFullName();
    getFileMD5Checksum();
    getLibMD5Checksums();
    getProvinceCode();
    resolveLibJSON();
    sanitize();
    sanitizeProvinceName();
    stripAltName();
    stripCapital();
    writeJsonFile();
  });
};
