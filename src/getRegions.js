import iso3166 from './iso3166/getRegions';
import psgc from './psgc/getRegions';

export default async function getRegions(source = 'iso3166') {
  if (source === 'psgc') {
    return psgc();
  }

  return iso3166();
}
