# ph-locations

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
