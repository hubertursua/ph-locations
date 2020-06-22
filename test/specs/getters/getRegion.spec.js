import { expect } from 'chai';
import getRegion from '../../../src/getters/getRegion';

export default () => {
  describe('getRegion', () => {
    const regions = [
      {
        code: '170000000',
        name: 'Mimaropa Region',
        altName: 'MIMAROPA',
      },
      {
        code: '050000000',
        name: 'Bicol Region',
        altName: 'Region V',
      },
      {
        code: '060000000',
        name: 'Western Visayas',
        altName: 'Region VI',
      },
    ];

    it('should return the matching region', () => {
      const expected = {
        code: '050000000',
        name: 'Bicol Region',
        altName: 'Region V',
      };

      const actual = getRegion('050000000', regions);

      expect(actual).to.be.deep.eql(expected);
    });

    it('should return null if no match', () => {
      const expected = null;

      const actual = getRegion('130000000', regions);

      expect(actual).to.be.deep.eql(expected);
    });
  });
};
