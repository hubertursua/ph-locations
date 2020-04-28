/* eslint-disable import/no-extraneous-dependencies */
import Axios from 'axios';
import { capitalCase } from 'change-case';
import cheerio from 'cheerio';
import sanitize from '../utils/sanitize';
import stripAltName from '../utils/stripAltName';
import getAltName from '../utils/getAltName';

export const METRO_MANILA_FAKE_PROVINCE_CODE = '130100000';

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
      const name = capitalCase(stripAltName(tmpName));
      let altName = getAltName(tmpName);
      altName = (altName) ? capitalCase(altName) : null;

      provinces.push({
        code,
        name,
        altName,
        region,
      });
    });
  });

  return [
    {
      code: METRO_MANILA_FAKE_PROVINCE_CODE,
      name: 'Metro Manila',
      altName: null,
      region: '130000000',
    },
    ...provinces,
  ];
}
