export default function stripAnnotation(str) {
  return str.replace(/\[[A-Za-z0-9]+\]/, '').trim();
}
