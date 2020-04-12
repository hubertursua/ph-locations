export default function stripAltName(str) {
  return str.replace(/\s\([A-Za-z0-9\s]+\)$/, '').trim();
}
