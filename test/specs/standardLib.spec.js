import { expect } from 'chai';
import sinon from 'sinon';
import * as getRegionModule from '../../src/getters/getRegion';
import * as getProvinceModule from '../../src/getters/getProvince';
import * as getCityMunModule from '../../src/getters/getCityMunicipality';
import * as getProvincesOfRegionModule from '../../src/getters/getProvincesOfRegion';
import * as getCitiesMunsOfProvinceModule from '../../src/getters/getCitiesMunsOfProvince';
import * as getLocationOfCityModule from '../../src/getters/getLocationOfCity';
import standardLib from '../../src/standardLib';

export default () => {
  describe('standardLib', () => {
    let getRegionModuleStub;
    let getProvinceModuleStub;
    let getCityMunModuleStub;
    let getProvincesOfRegionModuleStub;
    let getCitiesMunsOfProvinceModuleStub;
    let getLocationOfCityModuleStub;

    beforeEach(() => {
      getRegionModuleStub = sinon.stub(getRegionModule, 'default');
      getProvinceModuleStub = sinon.stub(getProvinceModule, 'default');
      getCityMunModuleStub = sinon.stub(getCityMunModule, 'default');
      getProvincesOfRegionModuleStub = sinon.stub(getProvincesOfRegionModule, 'default');
      getCitiesMunsOfProvinceModuleStub = sinon.stub(getCitiesMunsOfProvinceModule, 'default');
      getLocationOfCityModuleStub = sinon.stub(getLocationOfCityModule, 'default');
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should return a an object with region property', () => {
      const actual = standardLib([], [], []);
      expect(actual).to.haveOwnProperty('regions');
    });

    it('should return a an object with provinces property', () => {
      const actual = standardLib([], [], []);
      expect(actual).to.haveOwnProperty('provinces');
    });

    it('should return a an object with citiesMunicipalities property', () => {
      const actual = standardLib([], [], []);
      expect(actual).to.haveOwnProperty('citiesMunicipalities');
    });

    it('should return a an object with getRegion property', () => {
      const actual = standardLib([], [], []);
      expect(actual).to.haveOwnProperty('getRegion');

      actual.getRegion('');
      expect(getRegionModuleStub).to.be.calledOnce();
    });

    it('should return a an object with getProvince property', () => {
      const actual = standardLib([], [], []);
      expect(actual).to.haveOwnProperty('getProvince');

      actual.getProvince('');
      expect(getProvinceModuleStub).to.be.calledOnce();
    });

    it('should return a an object with getCityMunicipality property', () => {
      const actual = standardLib([], [], []);
      expect(actual).to.haveOwnProperty('getCityMunicipality');

      actual.getCityMunicipality('');
      expect(getCityMunModuleStub).to.be.calledOnce();
    });

    it('should return a an object with getProvincesOfRegion property', () => {
      const actual = standardLib([], [], []);
      expect(actual).to.haveOwnProperty('getProvincesOfRegion');

      actual.getProvincesOfRegion('');
      expect(getProvincesOfRegionModuleStub).to.be.calledOnce();
    });

    it('should return a an object with getCitiesMunsOfProvince property', () => {
      const actual = standardLib([], [], []);
      expect(actual).to.haveOwnProperty('getCitiesMunsOfProvince');

      actual.getCitiesMunsOfProvince('');
      expect(getCitiesMunsOfProvinceModuleStub).to.be.calledOnce();
    });

    it('should return a an object with getLocationOfCity property', () => {
      const actual = standardLib([], [], []);
      expect(actual).to.haveOwnProperty('getLocationOfCity');

      actual.getLocationOfCity('');
      expect(getLocationOfCityModuleStub).to.be.calledOnce();
    });
  });
};
