/* eslint-disable no-console */
import getRegions from './getRegions';
import getProvinces from './getProvinces';
import getCitiesMunicipalities from './getCitiesMunicipalities';
import writeJsonFile from './utils/writeJsonFile';

(async () => {
  const regions = await getRegions();
  const provinces = await getProvinces();
  const citiesMunicipalities = await getCitiesMunicipalities(provinces);

  await writeJsonFile(`${__dirname}/../build/regions.json`, regions);
  await writeJsonFile(`${__dirname}/../build/provinces.json`, provinces);
  await writeJsonFile(`${__dirname}/../build/citiesMunicipalities.json`, citiesMunicipalities);
  console.log('Done!');
})();
