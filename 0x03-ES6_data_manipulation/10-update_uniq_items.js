export default function updateUniqueItems(map) {
  const l = map;

  if (l instanceof Map) {
    for (const [key, value] of l) {
      if (value === 1) {
        l.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return l;
}
