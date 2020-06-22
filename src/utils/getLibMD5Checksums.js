import getFileMD5Checksum from './getFileMD5Checksum';
import resolveLibJSON from './resolveLibJSON';

export default function getLibMD5Checksums(libName) {
  const filePathRegions = resolveLibJSON(libName, 'regions');
  const filePathProvinces = resolveLibJSON(libName, 'provinces');
  const filePathCitiesMunicipalities = resolveLibJSON(libName, 'citiesMunicipalities');

  return {
    regions: getFileMD5Checksum(filePathRegions),
    provinces: getFileMD5Checksum(filePathProvinces),
    citiesMunicipalities: getFileMD5Checksum(filePathCitiesMunicipalities),
  };
}
