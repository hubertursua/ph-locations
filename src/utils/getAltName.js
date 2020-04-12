export default function getAltName(str) {
  if (!str.match(/\s\([A-Za-z0-9\s]+\)$/)) {
    return null;
  }

  return str.match(/\([A-Za-z0-9\s]+\)$/)
    .shift()
    .replace(/^\(/, '')
    .replace(/\)$/, '')
    .trim();
}
