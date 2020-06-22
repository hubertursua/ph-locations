export default function getAltName(str) {
  if (!str.match(/\s\([A-Za-zÑñ0-9-\s]+\)$/)) {
    return null;
  }

  return str.match(/\([A-Za-zÑñ0-9-\s]+\)$/)
    .shift()
    .replace(/^\(/, '')
    .replace(/\)$/, '')
    .trim();
}
