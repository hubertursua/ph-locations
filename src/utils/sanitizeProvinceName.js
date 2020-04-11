import sanitize from './sanitize';

export default function sanitizeProvinceName(str) {
  let provinceName = sanitize(str);
  provinceName = (provinceName === 'Occidental Mindoro') ? 'Mindoro Occidental' : provinceName;
  provinceName = (provinceName === 'Oriental Mindoro') ? 'Mindoro Oriental' : provinceName;
  return provinceName;
}
