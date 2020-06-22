import { expect } from 'chai';
import getProvincesOfRegion from '../../../src/getters/getProvincesOfRegion';

export default () => {
  describe('getProvincesOfRegion', () => {
    const provinces = [
      {
        code: '141100000',
        name: 'Benguet',
        altName: null,
        region: '140000000',
      },
      {
        code: '051600000',
        name: 'Camarines Norte',
        altName: null,
        region: '050000000',
      },
      {
        code: '051700000',
        name: 'Camarines Sur',
        altName: null,
        region: '050000000',
      },
    ];

    it('should return a list of provinces of a region', () => {
      const expected = [
        {
          code: '051600000',
          name: 'Camarines Norte',
          altName: null,
          region: '050000000',
        },
        {
          code: '051700000',
          name: 'Camarines Sur',
          altName: null,
          region: '050000000',
        },
      ];

      const actual = getProvincesOfRegion('050000000', provinces);

      expect(actual).to.be.deep.equal(expected);
    });
  });
};
