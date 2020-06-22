/* eslint-disable import/no-extraneous-dependencies */
import md5 from 'md5';
import fs from 'fs';

export default function getFileMD5Checksum(filePath) {
  return md5(fs.readFileSync(filePath, { encoding: 'utf-8' }));
}
