export default function createInt8TypedArray(length, position, value) {
  const collArray = new ArrayBuffer(length);
  const val = new DataView(collArray);

  try {
    val.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return val;
}
