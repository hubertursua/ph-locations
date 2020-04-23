import iso3166 from '../../src/iso3166';
import psgc from '../../src/psgc';
import * as writeJsonFileModule from '../../src/utils/writeJsonFile';
import build from '../../src/build';
import sinon from 'sinon';
import { expect } from 'chai';
import { resolve } from 'path';

describe('build', () => {
  let writeJsonFileStub;

  beforeEach(async () => {
    sinon.stub(iso3166, 'getCitiesMunicipalities').returns([]);
    sinon.stub(iso3166, 'getProvinces').returns([]);
    sinon.stub(iso3166, 'getRegions').returns([]);
    sinon.stub(psgc, 'getCitiesMunicipalities').returns([]);
    sinon.stub(psgc, 'getProvinces').returns([]);
    sinon.stub(psgc, 'getRegions').returns([]);

    writeJsonFileStub = sinon.stub(writeJsonFileModule, 'default');

    await build();
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should call getRegions()', () => {
    expect(iso3166.getRegions).to.have.been.called();
    expect(psgc.getRegions).to.have.been.called();
  });

  it('should call getProvinces()', () => {
    expect(iso3166.getProvinces).to.have.been.called();
    expect(psgc.getProvinces).to.have.been.called();
  });

  it('should call getCitiesMunicipalities()', () => {
    expect(iso3166.getCitiesMunicipalities).to.have.been.called();
    expect(psgc.getCitiesMunicipalities).to.have.been.called();
  });

  it('should write regions to a JSON files', () => {
    expect(writeJsonFileStub).to.have.been.calledWith(
      resolve(`${__dirname}/../../json/iso3166/regions.json`),
      [],
    );

    expect(writeJsonFileStub).to.have.been.calledWith(
      resolve(`${__dirname}/../../json/psgc/regions.json`),
      [],
    );
  });

  it('should write provinces to a JSON files', () => {
    expect(writeJsonFileStub).to.have.been.calledWith(
      resolve(`${__dirname}/../../json/iso3166/provinces.json`),
      [],
    );

    expect(writeJsonFileStub).to.have.been.calledWith(
      resolve(`${__dirname}/../../json/psgc/provinces.json`),
      [],
    );
  });

  it('should write cities and municipalities to a JSON files', () => {
    expect(writeJsonFileStub).to.have.been.calledWith(
      resolve(`${__dirname}/../../json/iso3166/citiesMunicipalities.json`),
      [],
    );

    expect(writeJsonFileStub).to.have.been.calledWith(
      resolve(`${__dirname}/../../json/psgc/citiesMunicipalities.json`),
      [],
    );
  });
});