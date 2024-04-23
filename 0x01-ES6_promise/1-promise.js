export default function (boolean) {
  return new Promise((treat, reject) => {
    const res = {
      status: 200,
      body: 'Success',
    };

    if (boolean === true) {
      treat(res);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
