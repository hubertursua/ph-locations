/* eslint-disable import/no-extraneous-dependencies */
import Axios from 'axios';
import cheerio from 'cheerio';
import sanitize from '../utils/sanitize';
import stripAltName from '../utils/stripAltName';
import getAltName from '../utils/getAltName';

export default async function getProvinces() {
  const provinces = [];
  const result = await Axios.get('https://en.wikipedia.org/wiki/ISO_3166-2:PH');
  const $ = cheerio.load(result.data);
  const $table = $('#Provinces', 'body').parent('h3').next('table').first();

  $('tbody > tr', $table).each(function (i) { // eslint-disable-line func-names
    if (i === 0) {
      return;
    }

    const $cells = $('td', this);

    const code = sanitize($cells.eq(0).text());
    const nameTL = sanitize($cells.eq(2).text());
    const region = `PH-${sanitize($cells.eq(3).text())}`;

    const tmpName = sanitize($cells.eq(1).text());
    const name = stripAltName(tmpName);
    const altName = getAltName(tmpName);

    provinces.push({
      code,
      name,
      altName,
      nameTL,
      region,
    });
  });

  return provinces;
}
