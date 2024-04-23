export default function getResponseFromAPI() {
  const res = true;
  return new Promise((acccept, reject) => {
    if (res) {
      acccept();
    } else {
      reject();
    }
  });
}
