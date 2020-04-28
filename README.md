# ph-locations

[![NPM version](https://img.shields.io/npm/v/ph-locations.svg)](https://www.npmjs.com/package/ph-locations)
![CI](https://github.com/hyubs/ph-locations/workflows/CI/badge.svg)
![ISO 3166](https://github.com/hyubs/ph-locations/workflows/Data%20Updated%20ISO3166/badge.svg)
![PSGC](https://github.com/hyubs/ph-locations/workflows/Data%20Updated%20PSGC/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://raw.githubusercontent.com/hyubs/ph-locations/master/LICENSE)

Library of locations in the Philippines

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

_Notes regarding NCR:_

PSGC does not assign NCR cities and municipalities under a province. Instead, they are classified under districts. Because of this, an unofficial pseudo-province called "Metro Manila" (code 130100000) was added and all cities and provinces of NCR are listed under this.

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

### Provinces

| Property | Description | ISO 3166 | PSGC |
| - | - | :-: | :-: |
| code | ISO 3166 or PSGC code | ✓ | ✓ |
| name | English name | ✓ | ✓ |
| altName | Alternative name, often its former name | ✓ | ✓ |
| nameTL | Tagalog name | ✓ | ✗ |
| region | ISO 3166 or PSGC code of the province's region | ✓ | ✓ |

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
