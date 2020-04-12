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

## Source

This library is following [ISO 3166-2:PH](https://en.wikipedia.org/wiki/ISO_3166-2:PH).

This may be inconsistent with other data sources such as the [Philippine Standard Geographic Code (PSGC)](https://psa.gov.ph/classification/psgc/) of the Philippine Statistics Authority (PSA).

## Regions

| Property | Description |
| - | - |
| code | ISO 3166-2:PH code |
| name | English name |
| nameTL | Tagalog name |
| acronym | Acronym or roman number |

## Provinces

| Property | Description |
| - | - |
| code | ISO 3166-2:PH code |
| name | English name |
| altName | Alternative name, often its former name |
| nameTL | Tagalog name |
| region | ISO 3166-2:PH code of the province's region |

## Cities and Municipalities

| Property | Description |
| - | - |
| name | Name |
| fullName | Complete name. All cities will have names end with "City" |
| altName | Alternative name, often its former name |
| province | ISO 3166-2:PH code of the city's / municipality's province |
| classification | Classification of the city / municipality (see below) |
| isCapital | Is the city / municipality the capital of the province |

### Classification

**Mun** - Municipalities

**CC** - Component cities

**ICC** - Independent component cities

**HUC** - Highly urbanized cities
