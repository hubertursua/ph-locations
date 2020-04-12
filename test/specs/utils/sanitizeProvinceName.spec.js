import { expect } from 'chai';
import sinon from 'sinon';
import * as sanitizeModule from '../../../src/utils/sanitize';
import sanitizeProvinceName from '../../../src/utils/sanitizeProvinceName';

export default () => {
  describe('sanitizeProvinceName', () => {
    let sanitizeStub;

    beforeEach(() => {
      sanitizeStub = sinon.stub(sanitizeModule, 'default').callsFake((str) => str);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should sanitize the input', () => {
      const str = 'A Province Name';

      sanitizeProvinceName(str);

      expect(sanitizeStub).to.have.been.calledOnce();
    });

    it('should change "Occidental Mindoro" to "Mindoro Occidental"', () => {
      const str = 'Occidental Mindoro';

      const result = sanitizeProvinceName(str);

      expect(result).to.be.eql('Mindoro Occidental');
    });

    it('should change "Oriental Mindoro" to "Mindoro Oriental"', () => {
      const str = 'Oriental Mindoro';

      const result = sanitizeProvinceName(str);

      expect(result).to.be.eql('Mindoro Oriental');
    });
  });
};
