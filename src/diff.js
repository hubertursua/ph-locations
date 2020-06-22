import * as buildModule from './build';
import OutdatedCitiesMunsError from './exceptions/OutdatedCitiesMunsError';
import OutdatedLibError from './exceptions/OutdatedLibError';
import OutdatedProvincesError from './exceptions/OutdatedProvincesError';
import OutdatedRegionsError from './exceptions/OutdatedRegionsError';
import getLibMD5Checksums from './utils/getLibMD5Checksums';

// eslint-disable-next-line no-async-promise-executor
export default (libName) => new Promise(async (resolve, reject) => {
  const errors = [];

  const oldChecksums = getLibMD5Checksums(libName);

  try {
    await buildModule[libName]();

    const newChecksums = getLibMD5Checksums(libName);

    if (oldChecksums.regions !== newChecksums.regions) {
      errors.push(new OutdatedRegionsError(libName));
    }

    if (oldChecksums.provinces !== newChecksums.provinces) {
      errors.push(new OutdatedProvincesError(libName));
    }

    if (oldChecksums.citiesMunicipalities !== newChecksums.citiesMunicipalities) {
      errors.push(new OutdatedCitiesMunsError(libName));
    }
  } catch (err) {
    errors.push(err.message);
  }

  if (errors.length > 0) {
    return reject(new OutdatedLibError(libName, errors));
  }

  return resolve();
});
