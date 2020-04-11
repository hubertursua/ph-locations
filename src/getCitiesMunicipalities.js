/* eslint-disable import/no-extraneous-dependencies */
import Axios from 'axios';
import cheerio from 'cheerio';
import sanitize from './utils/sanitize';
import stripAltName from './utils/stripAltName';
import getAltName from './utils/getAltName';
import sanitizeProvinceName from './utils/sanitizeProvinceName';
import getProvinceCode from './utils/getProvinceCode';
import getCityFullName from './utils/getCityFullName';

export default async function getCitiesMunicipalities(provinces) {
  const result = await Axios.get('https://en.wikipedia.org/wiki/List_of_cities_and_municipalities_in_the_Philippines');
  const $ = cheerio.load(result.data);
  const $table = $('#List', 'body').parent('h2').nextUntil('table').next();
  const $rows = $('tbody > tr', $table);

  const citiesMunicipalities = [];

  $rows.each(function (i) { // eslint-disable-line func-names
    if (i === 0) {
      return;
    }

    if (i === $rows.length - 1) {
      return;
    }

    const $cells = $('th, td', this);

    const tmpName = sanitize($cells.eq(0).text());
    const name = stripAltName(tmpName);
    const altName = getAltName(tmpName);

    const provinceName = sanitizeProvinceName($cells.eq(6).text());
    const provinceCode = getProvinceCode(provinceName, provinces);
    const classification = sanitize($cells.eq(5).text());

    const fullName = getCityFullName(name, classification);

    const isCapital = ($cells.eq(0).attr('style') || '').includes('border-width');

    citiesMunicipalities.push({
      name,
      fullName,
      altName,
      province: provinceCode,
      classification,
      isCapital,
    });
  });

  return citiesMunicipalities;
}
