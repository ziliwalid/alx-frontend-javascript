export default function cleanSet(set, startString) {
  const l = [];
  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }
  for (const i of set) {
    if (i && i.startsWith(startString)) {
      l.push(i.slice(startString.length));
    }
  }
  return l.join('-');
}
