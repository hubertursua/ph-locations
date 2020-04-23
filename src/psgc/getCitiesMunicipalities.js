/* eslint-disable import/no-extraneous-dependencies */
import Axios from 'axios';
import mapLimit from 'async/mapLimit';
import cheerio from 'cheerio';
import getAltName from '../utils/getAltName';
import sanitize from '../utils/sanitize';
import stripAltName from '../utils/stripAltName';
import stripCapital from '../utils/stripCapital';

export async function fetchOfProvince(province) {
  const cities = [];

  const result = await Axios.get(`https://psa.gov.ph/classification/psgc/?q=psgc/citimuni/${province.code}`);
  const $ = cheerio.load(result.data);

  $('#classifytable').each(function () {
    const classification = $('thead > tr > th', this)
      .eq(0)
      .text()
      .toUpperCase()
      .trim();

    if (!['CITY', 'MUNICIPALITY'].includes(classification)) {
      return;
    }

    $('tbody > tr', this).each(function () {
      const tmpName = sanitize($('td', this).eq(0).text());
      const code = sanitize($('td', this).eq(1).text());
      const isCapital = tmpName.toUpperCase().includes('(CAPITAL)');
      const fullName = stripCapital(tmpName);
      const altName = getAltName(stripCapital(tmpName));

      const tmpShortName = stripAltName(stripCapital(tmpName));
      const name = (tmpShortName.startsWith('CITY OF '))
        ? `${tmpShortName.replace('CITY OF ', '')} CITY`
        : tmpShortName;

      cities.push({
        code,
        name,
        fullName,
        altName,
        province: province.code,
        classification,
        isCapital,
      });
    });
  });

  return cities;
}

export default function getCitiesMunicipalities(provinces) {
  return new Promise((resolve, reject) => {
    mapLimit(provinces, 5, fetchOfProvince, (err, results) => {
      if (err) {
        return reject(err);
      }

      const flatResults = results.reduce((acc, result) => [
        ...acc,
        ...result,
      ], []);

      return resolve(flatResults);
    });
  });
}
