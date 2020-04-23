import { resolve } from 'path';
import iso3166 from './iso3166';
import psgc from './psgc';
import writeJsonFile from './utils/writeJsonFile';

export async function buildLib(libName, lib) {
  const regions = await lib.getRegions();
  const provinces = await lib.getProvinces();
  const citiesMunicipalities = await lib.getCitiesMunicipalities(provinces);

  await writeJsonFile(resolve(`${__dirname}/../json/${libName}/regions.json`), regions);
  await writeJsonFile(resolve(`${__dirname}/../json/${libName}/provinces.json`), provinces);
  await writeJsonFile(resolve(`${__dirname}/../json/${libName}/citiesMunicipalities.json`), citiesMunicipalities);
}

export default async () => {
  await buildLib('iso3166', iso3166);
  await buildLib('psgc', psgc);
};
