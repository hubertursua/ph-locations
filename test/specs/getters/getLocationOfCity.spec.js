import { expect } from 'chai';
import sinon from 'sinon';
import getLocationOfCity from '../../../src/getters/getLocationOfCity';

export default () => {
  describe('getLocationOfCity', () => {
    let getCityMunicipality;
    let getProvince;
    let getRegion;

    beforeEach(() => {
      getCityMunicipality = sinon.stub().returns({
        code: '051724000',
        name: 'Naga City',
        fullName: 'City Of Naga',
        altName: null,
        province: '051700000',
        classification: 'CITY',
        isCapital: false,
      });

      getProvince = sinon.stub().returns({
        code: '051700000',
        name: 'Camarines Sur',
        altName: null,
        region: '050000000',
      });

      getRegion = sinon.stub().returns({
        code: '050000000',
        name: 'Bicol Region',
        altName: 'Region V',
      });
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should lookup the city or municipality', () => {
      getLocationOfCity('051724000', getCityMunicipality, getProvince, getRegion);
      expect(getCityMunicipality).to.have.been.calledOnceWith('051724000');
    });

    it('should lookup the province', () => {
      getLocationOfCity('051724000', getCityMunicipality, getProvince, getRegion);
      expect(getProvince).to.have.been.calledOnceWith('051700000');
    });

    it('should lookup the region', () => {
      getLocationOfCity('051724000', getCityMunicipality, getProvince, getRegion);
      expect(getRegion).to.have.been.calledOnceWith('050000000');
    });

    it('should return the city or municipality, province, and region', () => {
      const actual = getLocationOfCity('051724000', getCityMunicipality, getProvince, getRegion);

      expect(actual).to.haveOwnProperty('cityMunicipality');
      expect(actual.cityMunicipality).to.be.deep.equal({
        code: '051724000',
        name: 'Naga City',
        fullName: 'City Of Naga',
        altName: null,
        province: '051700000',
        classification: 'CITY',
        isCapital: false,
      });

      expect(actual).to.haveOwnProperty('province');
      expect(actual.province).to.be.deep.equal({
        code: '051700000',
        name: 'Camarines Sur',
        altName: null,
        region: '050000000',
      });

      expect(actual).to.haveOwnProperty('region');
      expect(actual.region).to.be.deep.equal({
        code: '050000000',
        name: 'Bicol Region',
        altName: 'Region V',
      });
    });

    it('should return null if city or municipality was not found', () => {
      getCityMunicipality = sinon.stub().returns(null);

      const actual = getLocationOfCity('000000000', getCityMunicipality, getProvince, getRegion);

      expect(actual).to.be.eql(null);
    });
  });
};
