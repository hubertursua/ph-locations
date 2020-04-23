export default function stripCapital(str) {
  return str.replace(/(\(CAPITAL\))$/i, '').trim();
}
