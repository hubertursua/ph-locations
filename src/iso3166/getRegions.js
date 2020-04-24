/* eslint-disable import/no-extraneous-dependencies */
import Axios from 'axios';
import cheerio from 'cheerio';
import sanitize from '../utils/sanitize';

export default async function getRegions() {
  const regions = [];
  const result = await Axios.get('https://en.wikipedia.org/wiki/ISO_3166-2:PH');
  const $ = cheerio.load(result.data);
  const $table = $('#Regions', 'body').parent('h3').next('table').first();

  $('tbody > tr', $table).each(function (i) { // eslint-disable-line func-names
    if (i === 0) {
      return;
    }

    const $cells = $('td', this);

    const code = sanitize($cells.eq(0).text());
    const name = sanitize($cells.eq(1).text());
    const nameTL = sanitize($cells.eq(2).text());
    const altName = sanitize($cells.eq(3).text());

    regions.push({
      code,
      name,
      nameTL,
      altName,
    });
  });

  return regions;
}
