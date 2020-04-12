import { resolve } from 'path';
import getRegions from './getRegions';
import getProvinces from './getProvinces';
import getCitiesMunicipalities from './getCitiesMunicipalities';
import writeJsonFile from './utils/writeJsonFile';

export default async () => {
  const regions = await getRegions();
  const provinces = await getProvinces();
  const citiesMunicipalities = await getCitiesMunicipalities(provinces);

  await writeJsonFile(resolve(`${__dirname}/../build/regions.json`), regions);
  await writeJsonFile(resolve(`${__dirname}/../build/provinces.json`), provinces);
  await writeJsonFile(resolve(`${__dirname}/../build/citiesMunicipalities.json`), citiesMunicipalities);
};
