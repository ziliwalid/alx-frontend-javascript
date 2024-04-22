export default function createIteratorObject(report) {
  let Employees = [];
  for (const obj of Object.values(report.Employees)) {
    Employees = [
      ...Employees,
      ...obj,
    ];
  }
  return Employees;
}
