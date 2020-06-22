export function stripAnnotation(str) {
  return str.replace(/\[[A-Za-zÑñ0-9-()]+\]/, '').trim();
}

export default function sanitize(str) {
  return stripAnnotation(str.trim());
}
