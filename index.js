/* eslint-disable global-require */

const iso3166 = {
  citiesMunicipalities: require('./json/iso3166/citiesMunicipalities.json'),
  provinces: require('./json/iso3166/provinces.json'),
  regions: require('./json/iso3166/regions.json'),
};

const psgc = {
  citiesMunicipalities: require('./json/psgc/citiesMunicipalities.json'),
  provinces: require('./json/psgc/provinces.json'),
  regions: require('./json/psgc/regions.json'),
};

module.exports = {
  citiesMunicipalities: iso3166.citiesMunicipalities,
  provinces: iso3166.provinces,
  regions: iso3166.regions,
  iso3166,
  psgc,
};
