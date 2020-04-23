import iso3166 from './iso3166/getProvinces';
import psgc from './psgc/getProvinces';

export default async function getProvinces(source = 'iso3166') {
  if (source === 'psgc') {
    return psgc();
  }

  return iso3166();
}
