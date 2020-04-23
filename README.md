# ph-locations

[![NPM version](https://img.shields.io/npm/v/ph-locations.svg)](https://www.npmjs.com/package/ph-locations)
![CI](https://github.com/hyubs/ph-locations/workflows/CI/badge.svg)
![Data Updated](https://github.com/hyubs/ph-locations/workflows/Data%20Updated/badge.svg)
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

```js
// CommonJS
const regions = require('ph-locations/json/iso3166/regions');
const provinces = require('ph-locations/json/iso3166/provinces');
const citiesMunicipalities = require('ph-locations/json/iso3166/citiesMunicipalities');

// ES6
import regions from 'ph-locations/json/iso3166/regions';
import provinces from 'ph-locations/json/iso3166/provinces';
import citiesMunicipalities from 'ph-locations/json/iso3166/citiesMunicipalities';
```

## Source

### ISO 3166 & Wikipedia

* [ISO 3166-2:PH](https://en.wikipedia.org/wiki/ISO_3166-2:PH)
* [List of cities and municipalities in the Philippines](https://en.wikipedia.org/wiki/List_of_cities_and_municipalities_in_the_Philippines)

### Philippine Standard Geographic Code (PSGC)

* [Regions](https://psa.gov.ph/classification/psgc/?q=psgc/regions)
* [Provinces](https://psa.gov.ph/classification/psgc/?q=psgc/provinces)
* Cities (e.g.  [Camarines Sur](https://psa.gov.ph/classification/psgc/?q=psgc/citimuni/051700000))

### Automatic Checking

A [GitHub Action](https://github.com/hyubs/ph-locations/actions?query=workflow%3A%22Data+Updated%22) automatically checks everyday if the data is updated.

## Regions

| Property | Description | ISO 3166 | PSGC |
| - | - | :-: | :-: |
| code | ISO 3166 or PSGC code | ✓ | ✓ |
| name | English name | ✓ | ✓ |
| nameTL | Tagalog name | ✓ | ✗ |
| acronym | Acronym or roman number | ✓ | ✓ |

## Provinces

| Property | Description | ISO 3166 | PSGC |
| - | - | :-: | :-: |
| code | ISO 3166 or PSGC code | ✓ | ✓ |
| name | English name | ✓ | ✓ |
| altName | Alternative name, often its former name | ✓ | ✓ |
| nameTL | Tagalog name | ✓ | ✗ |
| region | ISO 3166 or PSGC code of the province's region | ✓ | ✓ |

## Cities and Municipalities

| Property | Description | ISO 3166 | PSGC |
| - | - | :-: | :-: |
| code | PSGC code | ✗ | ✓ |
| name | Name | ✓ | ✓ |
| fullName | Complete name. For ISO 3166, all cities will have names end with "City". For PSGC, this will be the complete name as listed in the PSGC website. | ✓ | ✓ |
| altName | Alternative name, often its former name | ✓ | ✓ |
| province | ISO 3166 or PSGC code of the city's or municipality's province | ✓ | ✓ |
| classification | Classification of the city or municipality (see below) | ✓ | ✓ |
| isCapital | Is the city or municipality the capital of the province | ✓ | ✓ |

### Classification

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