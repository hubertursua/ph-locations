import { resolve } from 'path';
import libISO3166 from './fetch/iso3166';
import libPSGC from './fetch/psgc';
import writeJsonFile from './utils/writeJsonFile';

export const buildLib = async (libName, lib) => {
  const regions = await lib.getRegions();
  const provinces = await lib.getProvinces();
  const citiesMunicipalities = await lib.getCitiesMunicipalities(provinces);

  await writeJsonFile(resolve(`${__dirname}/json/${libName}/regions.json`), regions);
  await writeJsonFile(resolve(`${__dirname}/json/${libName}/provinces.json`), provinces);
  await writeJsonFile(resolve(`${__dirname}/json/${libName}/citiesMunicipalities.json`), citiesMunicipalities);
};

export const iso3166 = () => buildLib('iso3166', libISO3166);

export const psgc = () => buildLib('psgc', libPSGC);

export default async () => {
  await iso3166();
  await psgc();
};
