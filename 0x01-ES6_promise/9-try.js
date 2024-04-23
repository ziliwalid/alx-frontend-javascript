export default function guardrail(mathFunction) {
  const Q = [];

  try {
    Q.push(mathFunction());
  } catch (msg) {
    Q.push(msg.toString());
  } finally {
    Q.push('Guardrail was processed');
  }
  return Q;
}
