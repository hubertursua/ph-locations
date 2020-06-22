/* eslint-disable mocha/no-setup-in-describe */
import sinon from 'sinon';
import { expect } from 'chai';

import exceptions from './exceptions/index.spec';
import fetch from './fetch/index.spec';
import getters from './getters/index.spec';
import utils from './utils/index.spec';

import build from './build.spec';
import diff from './diff.spec';
import iso3166 from './iso3166.spec';
import psgc from './psgc.spec';
import standardLib from './standardLib.spec';

import * as standardLibModule from '../../src/standardLib';

describe('ph-locations', () => {
  let fakeLibrary;
  let index;

  afterEach(() => {
    sinon.restore();
  });

  describe('default', () => {
    beforeEach(() => {
      fakeLibrary = {
        regions: [],
        provinces: [],
        citiesMunicipalities: [],
      };
      sinon.stub(standardLibModule, 'default').returns(fakeLibrary);

      // eslint-disable-next-line global-require
      index = require('../../src');
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should export all properties of a library', () => {
      expect(index).to.include({ ...fakeLibrary });
    });

    it('should have a property iso3166', () => {
      expect(index).to.haveOwnProperty('iso3166');
    });

    it('should have a property psgc', () => {
      expect(index).to.haveOwnProperty('psgc');
    });
  });

  exceptions();
  fetch();
  getters();
  utils();

  build();
  diff();
  iso3166();
  psgc();
  standardLib();
});
