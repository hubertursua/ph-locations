import stripAnnotation from './stripAnnotation';

export default function sanitize(str) {
  return stripAnnotation(str.trim());
}
