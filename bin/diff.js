/* eslint-disable import/no-extraneous-dependencies */
import md5 from 'md5';
import fs from 'fs';
import { resolve } from 'path';
import build from '../src/build';

function getFileMD5(filePath) {
  return md5(fs.readFileSync(filePath, { encoding: 'utf-8' }));
}

(async () => {
  const errors = [];

  const filePathRegions = resolve(__dirname, '../build/regions.json');
  const filePathProvinces = resolve(__dirname, '../build/provinces.json');
  const filePathCitiesMunicipalities = resolve(__dirname, '../build/citiesMunicipalities.json');

  const oldHashRegions = getFileMD5(filePathRegions);
  const oldHashProvinces = getFileMD5(filePathProvinces);
  const oldHashCitiesMunicipalities = getFileMD5(filePathCitiesMunicipalities);

  try {
    await build();
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
    console.error('Errors', errors);
    process.exit(1);
  }

  console.log('Everything is updated.');
  process.exit(0);
})();
