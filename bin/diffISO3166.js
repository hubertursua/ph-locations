/* eslint-disable import/no-extraneous-dependencies */
import md5 from 'md5';
import fs from 'fs';
import { resolve } from 'path';
import { buildLib } from '../src/build';
import iso3166 from '../src/iso3166';

function getFileMD5(filePath) {
  return md5(fs.readFileSync(filePath, { encoding: 'utf-8' }));
}

(async () => {
  const errors = [];

  const filePathRegions = resolve(__dirname, '../json/iso3166/regions.json');
  const filePathProvinces = resolve(__dirname, '../json/iso3166/provinces.json');
  const filePathCitiesMunicipalities = resolve(__dirname, '../json/iso3166/citiesMunicipalities.json');

  const oldHashRegions = getFileMD5(filePathRegions);
  const oldHashProvinces = getFileMD5(filePathProvinces);
  const oldHashCitiesMunicipalities = getFileMD5(filePathCitiesMunicipalities);

  try {
    await buildLib('iso3166', iso3166);
  } catch (err) {
    errors.push(err.message);
  }

  const newHashRegions = getFileMD5(filePathRegions);
  const newHashProvinces = getFileMD5(filePathProvinces);
  const newHashCitiesMunicipalities = getFileMD5(filePathCitiesMunicipalities);

  if (oldHashRegions !== newHashRegions) {
    errors.push('List of regions is outdated.');
  }

  if (oldHashProvinces !== newHashProvinces) {
    errors.push('List of provinces is outdated.');
  }

  if (oldHashCitiesMunicipalities !== newHashCitiesMunicipalities) {
    errors.push('List of cities and municipalities is outdated.');
  }

  if (errors.length > 0) {
    // eslint-disable-next-line no-console
    console.error('Errors', errors);
    process.exit(1);
  }

  // eslint-disable-next-line no-console
  console.log('Everything is updated.');
  process.exit(0);
})();
