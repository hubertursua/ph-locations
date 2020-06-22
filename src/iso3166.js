import standardLib from './standardLib';

const regions = require('./json/iso3166/regions.json');
const provinces = require('./json/iso3166/provinces.json');
const citiesMunicipalities = require('./json/iso3166/citiesMunicipalities.json');

export default standardLib(regions, provinces, citiesMunicipalities);
