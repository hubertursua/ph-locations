# ph-locations

[![NPM version](https://img.shields.io/npm/v/ph-locations.svg)](https://www.npmjs.com/package/ph-locations)
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

### Cities and Municipalities Classification

**Mun** - Municipalities

**CC** - Component cities

**ICC** - Independent component cities

**HUC** - Highly urbanized cities
