import { expect } from 'chai';
import getCityFullName from '../../../src/utils/getCityFullName';

export default () => {
  describe('getCityFullName', () => {
    it('should append city name with "City"', () => {
      ['CC', 'ICC', 'HUC'].forEach((classification) => {
        const str = 'Naga';
        const result = getCityFullName(str, classification);
        expect(result).to.be.equal('Naga City');
      });
    });

    it('should not change if city name already ends with "City"', () => {
      const str = 'Naga City';
      const result = getCityFullName(str, 'ICC');
      expect(result).to.be.equal('Naga City');
    });

    it('should not change if a municipality', () => {
      const str = 'Pili';
      const result = getCityFullName(str, 'Mun');
      expect(result).to.be.equal('Pili');
    });
  });
};
