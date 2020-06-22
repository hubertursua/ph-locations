import { expect } from 'chai';
import getCityMunicipality from '../../../src/getters/getCityMunicipality';

export default () => {
  describe('getCitiesMunicipality', () => {
    const citiesMunicipalities = [
      {
        code: '051716000',
        name: 'Iriga City',
        fullName: 'City Of Iriga',
        altName: null,
        province: '051700000',
        classification: 'CITY',
        isCapital: false,
      },
      {
        code: '051724000',
        name: 'Naga City',
        fullName: 'City Of Naga',
        altName: null,
        province: '051700000',
        classification: 'CITY',
        isCapital: false,
      },
      {
        code: '051701000',
        name: 'Baao',
        fullName: 'Baao',
        altName: null,
        province: '051700000',
        classification: 'MUNICIPALITY',
        isCapital: false,
      },
    ];

    it('should return the matching city or municipality', () => {
      const expected = {
        code: '051724000',
        name: 'Naga City',
        fullName: 'City Of Naga',
        altName: null,
        province: '051700000',
        classification: 'CITY',
        isCapital: false,
      };

      const actual = getCityMunicipality('051724000', citiesMunicipalities);

      expect(actual).to.be.deep.eql(expected);
    });

    it('should return null if no match', () => {
      const expected = null;

      const actual = getCityMunicipality('051603000', citiesMunicipalities);

      expect(actual).to.be.deep.eql(expected);
    });
  });
};
