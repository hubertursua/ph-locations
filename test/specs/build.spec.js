import * as getCitiesMunicipalitiesModule from '../../src/getCitiesMunicipalities';
import * as getProvincesModule from '../../src/getProvinces';
import * as getRegionsModule from '../../src/getRegions';
import * as writeJsonFileModule from '../../src/utils/writeJsonFile';
import build from '../../src/build';
import sinon from 'sinon';
import { expect } from 'chai';
import { resolve } from 'path';

describe('build', () => {
  let getCitiesMunicipalitiesStub;
  let getProvincesStub;
  let getRegionsStub;
  let writeJsonFileStub;

  beforeEach(async () => {
    getCitiesMunicipalitiesStub = sinon.stub(getCitiesMunicipalitiesModule, 'default').returns([]);
    getProvincesStub = sinon.stub(getProvincesModule, 'default').returns([]);
    getRegionsStub = sinon.stub(getRegionsModule, 'default').returns([]);
    writeJsonFileStub = sinon.stub(writeJsonFileModule, 'default');

    await build();
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should call getRegions()', () => {
    expect(getRegionsStub).to.have.been.called();
  });

  it('should call getProvinces()', () => {
    expect(getProvincesStub).to.have.been.called();
  });

  it('should call getCitiesMunicipalities()', () => {
    expect(getCitiesMunicipalitiesStub).to.have.been.called();
  });

  it('should write regions to a JSON files', () => {
    expect(writeJsonFileStub).to.have.been.calledWith(
      resolve(`${__dirname}/../../build/regions.json`),
      [],
    );
  });

  it('should write provinces to a JSON files', () => {
    expect(writeJsonFileStub).to.have.been.calledWith(
      resolve(`${__dirname}/../../build/provinces.json`),
      [],
    );
  });

  it('should write cities and municipalities to a JSON files', () => {
    expect(writeJsonFileStub).to.have.been.calledWith(
      resolve(`${__dirname}/../../build/citiesMunicipalities.json`),
      [],
    );
  });
});