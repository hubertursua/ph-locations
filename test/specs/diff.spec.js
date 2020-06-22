import { expect } from 'chai';
import sinon from 'sinon';
import diff from '../../src/diff';
import * as getLibMD5ChecksumsModule from '../../src/utils/getLibMD5Checksums';
import * as buildModule from '../../src/build';

export default () => {
  describe('diff', () => {
    let getLibMD5ChecksumStub;

    beforeEach(() => {
      getLibMD5ChecksumStub = sinon.stub(getLibMD5ChecksumsModule, 'default').returns({
        regions: '030c55dfd4d77bca0d066354690ca628',
        provinces: '47783d5c51effa7ef0a6a8ed6c0ee362',
        citiesMunicipalities: 'c1046ca8cccb5d4790ed3dc272f80ad5',
      });

      sinon.stub(buildModule, 'iso3166').returns(sinon.fake());
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should resolve if checksums match', async () => {
      await diff('iso3166');
    });

    it('should throw if buildModule fails', (done) => {
      buildModule.iso3166.restore();
      sinon.stub(buildModule, 'iso3166').throws(new Error('fake error'));

      diff('iso3166')
        .then(() => {
          done(new Error('Did not throw'));
        })
        .catch((err) => {
          expect(err).to.be.ok();
          expect(err).to.haveOwnProperty('errors');
          done();
        });
    });

    it('should throw if region checksums do not match', async () => {
      getLibMD5ChecksumStub.onCall(1).returns({
        regions: 'adbc11bbaecc9f28a6264f56db9c0286',
        provinces: '47783d5c51effa7ef0a6a8ed6c0ee362',
        citiesMunicipalities: 'c1046ca8cccb5d4790ed3dc272f80ad5',
      });

      try {
        await diff('iso3166');
      } catch (err) {
        expect(err).to.be.ok();
      }
    });

    it('should throw if provinces checksums do not match', async () => {
      getLibMD5ChecksumStub.onCall(1).returns({
        regions: '030c55dfd4d77bca0d066354690ca628',
        provinces: '025fd96f6432b85591e6fc42e9a8e9dd',
        citiesMunicipalities: 'c1046ca8cccb5d4790ed3dc272f80ad5',
      });

      try {
        await diff('iso3166');
      } catch (err) {
        expect(err).to.be.ok();
      }
    });

    it('should throw if citiesMunicipalities checksums do not match', async () => {
      getLibMD5ChecksumStub.onCall(1).returns({
        regions: '030c55dfd4d77bca0d066354690ca628',
        provinces: '47783d5c51effa7ef0a6a8ed6c0ee362',
        citiesMunicipalities: '7e1eb332d962c7737c9a5d12fb6dc72d',
      });

      try {
        await diff('iso3166');
      } catch (err) {
        expect(err).to.be.ok();
      }
    });
  });
};
