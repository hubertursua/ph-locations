import { expect } from 'chai';
import getProvince from '../../../src/getters/getProvince';

export default () => {
  describe('getProvince', () => {
    const provinces = [
      {
        code: '050500000',
        name: 'Albay',
        altName: null,
        region: '050000000',
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

    it('should return the matching province', () => {
      const expected = {
        code: '051700000',
        name: 'Camarines Sur',
        altName: null,
        region: '050000000',
      };

      const actual = getProvince('051700000', provinces);

      expect(actual).to.be.deep.eql(expected);
    });

    it('should return null if no match', () => {
      const expected = null;

      const actual = getProvince('052000000', provinces);

      expect(actual).to.be.deep.eql(expected);
    });
  });
};
