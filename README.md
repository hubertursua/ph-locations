# ph-locations

[![npm](https://img.shields.io/npm/v/ph-locations?color=6ab04c)](https://www.npmjs.com/package/ph-locations)
[![CI](https://img.shields.io/github/workflow/status/hyubs/ph-locations/CI?label=CI&logo=github&color=6ab04c)](https://github.com/hyubs/ph-locations/actions?query=workflow%3A%22CI%22)
[![ISO3166](https://img.shields.io/github/workflow/status/hyubs/ph-locations/Data%20Updated%20ISO3166?label=ISO3166&logo=github&color=6ab04c)](https://github.com/hyubs/ph-locations/actions?query=workflow%3A%22Data+Updated+ISO3166%22)
[![PSGC](https://img.shields.io/github/workflow/status/hyubs/ph-locations/Data%20Updated%20PSGC?label=PSGC&logo=github&color=6ab04c)](https://github.com/hyubs/ph-locations/actions?query=workflow%3A%22Data+Updated+PSGC%22)
[![GitHub](https://img.shields.io/github/license/hyubs/ph-locations?color=6ab04c)](https://raw.githubusercontent.com/hyubs/ph-locations/master/LICENSE)

Library of locations in the Philippines (regions, provinces, and cities & municipalities).

This library automatically checks the sources, ensuring the data is always updated.

## Usage

### Install

```sh
# NPM
npm install ph-locations

# Yarn
yarn add ph-locations
```

### Import

**Default (ISO 3166)**

```js
// CommonJS
const {
  regions,
  provinces,
  citiesMunicipalities,
} = require('ph-locations');

// ES6
import {
  regions,
  provinces,
  citiesMunicipalities,
} from 'ph-locations';
```

**PSGC**

```js
// CommonJS
const {
  regions,
  provinces,
  citiesMunicipalities,
} = require('ph-locations').psgc;

// ES6
import { psgc } from 'ph-locations';
const {
  regions,
  provinces,
  citiesMunicipalities,
} = psgc;

```

**ISO 3166 (same result as default)**

```js
// CommonJS
const {
  regions,
  provinces,
  citiesMunicipalities,
} = require('ph-locations').iso3166;

// ES6
import { iso3166 } from 'ph-locations';
const {
  regions,
  provinces,
  citiesMunicipalities,
} = iso3166;
```

## Sources

### ISO 3166 & Wikipedia

* [ISO 3166-2:PH](https://en.wikipedia.org/wiki/ISO_3166-2:PH)
* [List of cities and municipalities in the Philippines](https://en.wikipedia.org/wiki/List_of_cities_and_municipalities_in_the_Philippines)

### Philippine Standard Geographic Code (PSGC)

* [Regions](https://psa.gov.ph/classification/psgc/?q=psgc/regions)
* [Provinces](https://psa.gov.ph/classification/psgc/?q=psgc/provinces)
* Cities (e.g.  [Camarines Sur](https://psa.gov.ph/classification/psgc/?q=psgc/citimuni/051700000))

### Data Changes

1. Metro Manila is not officially a province but it has been added in ISO3166 and PSGC data sets.
2. Some cities and municipalities (e.g. Cotabato, Isabela City, and all Metro Manila cities & municipalities) also had their provinces forcefully set. This ensures all have provinces mapped.

## Automatic Checking

GitHub Actions ([ISO 3166](https://github.com/hyubs/ph-locations/actions?query=workflow%3A%22Data+Updated+ISO3166%22), [PSGC](https://github.com/hyubs/ph-locations/actions?query=workflow%3A%22Data+Updated+PSGC%22)) automatically run everyday to check if the data is updated. See the ISO 3166 and PSGC badges [above](#ph-locations).

## Properties

### Regions

| Property | Description | ISO 3166 | PSGC |
| - | - | :-: | :-: |
| code | ISO 3166 or PSGC code | ✓ | ✓ |
| name | English name | ✓ | ✓ |
| nameTL | Tagalog name | ✓ | ✗ |
| altName | Alternative name, often the roman number or acronym of the region | ✓ | ✓ |

**ISO 3166**

```js
{
  "code": "PH-05",
  "name": "Bicol",
  "nameTL": "Rehiyon ng Bikol",
  "altName": "V"
}
```

**PSGC**

```js
{
  "code": "050000000",
  "name": "Bicol Region",
  "altName": "Region V"
}
```

### Provinces

| Property | Description | ISO 3166 | PSGC |
| - | - | :-: | :-: |
| code | ISO 3166 or PSGC code | ✓ | ✓ |
| name | English name | ✓ | ✓ |
| altName | Alternative name, often its former name | ✓ | ✓ |
| nameTL | Tagalog name | ✓ | ✗ |
| region | ISO 3166 or PSGC code of the province's region | ✓ | ✓ |

**ISO 3166**

```js
{
  "code": "PH-CAS",
  "name": "Camarines Sur",
  "altName": null,
  "nameTL": "Timog Kamarines",
  "region": "PH-05"
}
```

**PSGC**

```js
{
  "code": "051700000",
  "name": "Camarines Sur",
  "altName": null,
  "region": "050000000"
}
```

### Cities and Municipalities

| Property | Description | ISO 3166 | PSGC |
| - | - | :-: | :-: |
| code | PSGC code | ✗ | ✓ |
| name | Name | ✓ | ✓ |
| fullName | Complete name. For ISO 3166, all cities will have names end with "City". For PSGC, this will be the complete name as listed in the PSGC website. | ✓ | ✓ |
| altName | Alternative name, often its former name | ✓ | ✓ |
| province | ISO 3166 or PSGC code of the city's or municipality's province | ✓ | ✓ |
| classification | Classification of the city or municipality ([see below](#classification)) | ✓ | ✓ |
| isCapital | Is the city or municipality the capital of the province | ✓ | ✓ |

**ISO 3166**

```js
{
  "name": "Naga",
  "fullName": "Naga City",
  "altName": null,
  "province": "PH-CAS",
  "classification": "ICC",
  "isCapital": false
}
```

**PSGC**

```js
{
  "code": "051724000",
  "name": "Naga City",
  "fullName": "City of Naga",
  "altName": null,
  "province": "051700000",
  "classification": "CITY",
  "isCapital": false
}
```

#### Classification

**ISO 3166**

| Value | Description |
| - | - |
| Mun | Municipality |
| CC | Component city |
| ICC | Independent component city |
| HUC | Highly urbanized city |

**PSGC**

| Value | Description |
| - | - |
| MUNICIPALITY | Municipality |
| CITY | City |

## License

Licensed under [MIT License](https://github.com/hyubs/ph-locations/blob/master/LICENSE)
