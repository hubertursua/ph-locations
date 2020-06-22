import { expect } from 'chai';
import getCitiesMunsOfProvince from '../../../src/getters/getCitiesMunsOfProvince';

export default () => {
  describe('getCitiesMunsOfProvince', () => {
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
        code: '051603000',
        name: 'Daet',
        fullName: 'Daet',
        altName: null,
        province: '051600000',
        classification: 'MUNICIPALITY',
        isCapital: true,
      },
    ];

    it('should return a list of cities and municipalities of a province', () => {
      const expected = [
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
      ];

      const actual = getCitiesMunsOfProvince('051700000', citiesMunicipalities);

      expect(actual).to.be.deep.equal(expected);
    });
  });
};
