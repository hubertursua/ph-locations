export default function getProvinceCode(str, provinces) {
  const provinceMatch = provinces.find(({ name, altName }) => (name === str) || (altName === str));

  if (!provinceMatch) {
    if (!str.startsWith('NCR')) {
      throw new Error(`Could not find province "${str}".`);
    }

    // NCR
    return null;
  }

  return provinceMatch.code;
}
