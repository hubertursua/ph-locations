/* eslint-disable import/no-extraneous-dependencies */
import Axios from 'axios';
import cheerio from 'cheerio';
import fixCasing from '../utils/fixCasing';

export default async function getRegions() {
  const regions = [];

  const result = await Axios.get('https://psa.gov.ph/classification/psgc/?q=psgc/regions');
  const $ = cheerio.load(result.data);

  $('#classifytable').each(function () {
    const nameFull = $('tr > th', this).eq(0).text().replace(/^(Region:\s)/i, '');
    const code = $('tr > th', this).eq(1).text().replace(/^(Code:\s)/i, '');
    let altName = (nameFull.includes('('))
      ? nameFull.substring(0, nameFull.indexOf('(') - 1)
      : nameFull;
    let name = (nameFull.includes('('))
      ? nameFull.substring(nameFull.indexOf('(') + 1, nameFull.length - 1).toUpperCase()
      : nameFull;

    if (['ARMM', 'CAR', 'NCR'].includes(name)) {
      const tmpName = name;
      name = altName;
      altName = tmpName;
    }

    if (altName.endsWith(' REGION')) {
      altName = altName.replace(/(\sREGION)$/i, '');
    }

    altName = altName.replace(/^(REGION\s)/, 'Region ');

    if (!['CALABARZON', 'SOCCSKSARGEN', 'CARAGA'].includes(name)) {
      name = fixCasing(name);
    }

    regions.push({
      code,
      name,
      altName,
    });
  });

  return regions;
}
