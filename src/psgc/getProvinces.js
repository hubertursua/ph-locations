/* eslint-disable import/no-extraneous-dependencies */
import Axios from 'axios';
import cheerio from 'cheerio';
import sanitize from '../utils/sanitize';
import stripAltName from '../utils/stripAltName';
import getAltName from '../utils/getAltName';

export default async function getProvinces() {
  const provinces = [];

  const result = await Axios.get('https://psa.gov.ph/classification/psgc/?q=psgc/provinces');
  const $ = cheerio.load(result.data);

  $('#classifytable > tbody').each(function () {
    const region = $(this).parent('table').prev('h4').text()
      .split(':')
      .pop();

    $('tr', this).each(function () {
      const tmpName = sanitize($('td', this).eq(0).text().toUpperCase());
      const code = sanitize($('td', this).eq(1).text().toUpperCase());
      const name = stripAltName(tmpName);
      const altName = getAltName(tmpName);

      provinces.push({
        code,
        name,
        altName,
        region,
      });
    });
  });

  return provinces;
}
