/* eslint-disable import/no-extraneous-dependencies */
import Axios from 'axios';
import mapLimit from 'async/mapLimit';
import cheerio from 'cheerio';
import getAltName from '../../utils/getAltName';
import sanitize from '../../utils/sanitize';
import fixCasing from '../../utils/fixCasing';
import stripAltName from '../../utils/stripAltName';
import stripCapital from '../../utils/stripCapital';
import { METRO_MANILA_FAKE_PROVINCE_CODE } from './getProvinces';

const metroManilaDistricts = [
  { code: '133900000' }, // 1st District
  { code: '137400000' }, // 2nd District
  { code: '137500000' }, // 3rd District
  { code: '137600000' }, // 4th District
];

const otherNonProvinces = [
  { code: '099700000' }, // Isabela City, Zamboanga Peninsula
  { code: '129800000' }, // Cotabato City, SOCCSKSARGEN
];

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

      let altName = getAltName(stripCapital(tmpName));
      altName = (altName) ? fixCasing(altName) : null;

      const tmpShortName = stripAltName(stripCapital(tmpName));
      const name = fixCasing(
        (tmpShortName.startsWith('CITY OF '))
          ? `${tmpShortName.replace('CITY OF ', '')} CITY`
          : tmpShortName,
      );

      const fullName = (altName)
        ? `${fixCasing(tmpShortName)} (${altName})`
        : fixCasing(tmpShortName);

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
    mapLimit(
      [
        ...metroManilaDistricts,
        ...otherNonProvinces,
        ...provinces.filter((p) => p.code !== METRO_MANILA_FAKE_PROVINCE_CODE),
      ],
      5,
      fetchOfProvince,
      (err, results) => {
        if (err) {
          return reject(err);
        }

        const flatResults = results.reduce((acc, result) => [
          ...acc,
          ...result,
        ], [])
          .map((cm) => {
            if (metroManilaDistricts.find((m) => m.code === cm.province)) {
              // eslint-disable-next-line prefer-object-spread
              return Object.assign({}, cm, { province: METRO_MANILA_FAKE_PROVINCE_CODE });
            }

            return cm;
          });

        return resolve(flatResults);
      },
    );
  });
}
