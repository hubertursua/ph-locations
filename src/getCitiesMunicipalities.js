import iso3166 from './iso3166/getCitiesMunicipalities';
import psgc from './psgc/getCitiesMunicipalities';

export default async function getCitiesMunicipalities(provinces, source = 'iso3166') {
  if (source === 'psgc') {
    return psgc(provinces);
  }

  return iso3166(provinces);
}
