import sinon from 'sinon';
import { expect } from 'chai';
import { resolve } from 'path';
import * as buildModule from '../../src/build';
import * as libISO3166Module from '../../src/fetch/iso3166';
import * as libPSGCModule from '../../src/fetch/psgc';
import * as writeJsonFileModule from '../../src/utils/writeJsonFile';

export default () => {
  describe('build', () => {
    let writeJsonFileStub;
    let libISO3166;
    let libPSGC;
    let build;
    let buildLib;
    let iso3166;
    let psgc;

    beforeEach(async () => {
      writeJsonFileStub = sinon.stub(writeJsonFileModule, 'default');

      sinon.replace(libISO3166Module, 'default', {
        getCitiesMunicipalities: sinon.stub().resolves([]),
        getProvinces: sinon.stub().resolves([]),
        getRegions: sinon.stub().resolves([]),
      });

      sinon.replace(libPSGCModule, 'default', {
        getCitiesMunicipalities: sinon.stub().resolves([]),
        getProvinces: sinon.stub().resolves([]),
        getRegions: sinon.stub().resolves([]),
      });

      libISO3166 = libISO3166Module.default;
      libPSGC = libPSGCModule.default;

      build = buildModule.default;
      buildLib = buildModule.buildLib;
      iso3166 = buildModule.iso3166;
      psgc = buildModule.psgc;
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should call iso3166', async () => {
      const buildLibSpy = sinon.spy(buildLib);

      await build();

      buildLibSpy.calledOnceWith('iso3166', libISO3166);
    });

    it('should call psgc', async () => {
      const buildLibSpy = sinon.spy(buildLib);

      await build();

      buildLibSpy.calledOnceWith('psgc', libPSGC);
    });

    describe('buildLib', () => {
      it('should call getRegions()', async () => {
        await buildLib('iso3166', libISO3166);
        expect(libISO3166.getRegions).to.have.been.called();
      });

      it('should call getProvinces()', async () => {
        await buildLib('iso3166', libISO3166);
        expect(libISO3166.getProvinces).to.have.been.called();
      });

      it('should call getCitiesMunicipalities()', async () => {
        await buildLib('iso3166', libISO3166);
        expect(libISO3166.getCitiesMunicipalities).to.have.been.called();
      });

      it('should write regions to a JSON files', async () => {
        await buildLib('iso3166', libISO3166);

        expect(writeJsonFileStub).to.have.been.calledWith(
          resolve(`${__dirname}/../../src/json/iso3166/regions.json`),
          [],
        );
      });

      it('should write provinces to a JSON files', async () => {
        await buildLib('iso3166', libISO3166);

        expect(writeJsonFileStub).to.have.been.calledWith(
          resolve(`${__dirname}/../../src/json/iso3166/provinces.json`),
          [],
        );
      });

      it('should write cities and municipalities to a JSON files', async () => {
        await buildLib('iso3166', libISO3166);

        expect(writeJsonFileStub).to.have.been.calledWith(
          resolve(`${__dirname}/../../src/json/iso3166/citiesMunicipalities.json`),
          [],
        );
      });
    });

    describe('iso3166', () => {
      it('should call buildLib for iso3166', async () => {
        const buildLibSpy = sinon.spy(buildLib);

        await iso3166();

        buildLibSpy.calledOnceWith('iso3166', libISO3166);
      });
    });

    describe('psgc', () => {
      it('should call buildLib for psgc', async () => {
        const buildLibSpy = sinon.spy(buildLib);

        await psgc();

        buildLibSpy.calledOnceWith('psgc', libPSGC);
      });
    });
  });
};
