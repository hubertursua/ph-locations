import { expect } from 'chai';
import getProvinceCode from '../../../src/utils/getProvinceCode';

export default () => {
  describe('getProvinceCode', () => {
    const provinces = [
      {
        code: 'PH-CAS',
        name: 'Camarines Sur',
        altName: null,
        nameTL: 'Timog Kamarines',
        region: 'PH-05',
      },
    ];

    it('should return the province code', () => {
      const str = 'Camarines Sur';
      const result = getProvinceCode(str, provinces);
      expect(result).to.be.equal('PH-CAS');
    });

    it('should return null if province is NCR', () => {
      const str = 'NCR, 2nd district';
      const result = getProvinceCode(str, provinces);
      expect(result).to.be.equal(null);
    });

    it('should throw an error if province was not found', () => {
      const str = 'Unknown Province';

      const invocation = () => getProvinceCode(str, provinces);

      expect(invocation).to.throw('Could not find province "Unknown Province".');
    });
  });
};
