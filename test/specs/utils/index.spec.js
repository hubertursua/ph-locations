import getAltName from './getAltName.spec';
import getCityFullName from './getCityFullName.spec';
import getProvinceCode from './getProvinceCode.spec';
import sanitize from './sanitize.spec';
import sanitizeProvinceName from './sanitizeProvinceName.spec';
import stripAltName from './stripAltName.spec';
import writeJsonFile from './writeJsonFile.spec';

// eslint-disable-next-line mocha/no-setup-in-describe
describe('utils', () => {
  getAltName();
  getCityFullName();
  getProvinceCode();
  sanitize();
  sanitizeProvinceName();
  stripAltName();
  writeJsonFile();
});
