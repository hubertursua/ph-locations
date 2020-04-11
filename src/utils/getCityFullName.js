export default function getCityFullName(name, classification) {
  if (!['CC', 'ICC', 'HUC'].includes(classification)) {
    return name;
  }

  if (!name.startsWith('City ') && !name.endsWith(' City')) {
    return `${name} City`;
  }

  return name;
}
