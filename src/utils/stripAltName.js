export default function stripAltName(str) {
  return str.replace(/\s\([A-Za-zÑñ0-9-\s&]+\)$/, '').trim();
}
