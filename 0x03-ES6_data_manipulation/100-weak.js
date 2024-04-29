export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  var c = weakMap.get(endpoint) || 0;
  c += 1;

  if (c >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, c);
  }
}
