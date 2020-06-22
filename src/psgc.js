import standardLib from './standardLib';

const regions = require('./json/psgc/regions.json');
const provinces = require('./json/psgc/provinces.json');
const citiesMunicipalities = require('./json/psgc/citiesMunicipalities.json');

export default standardLib(regions, provinces, citiesMunicipalities);
