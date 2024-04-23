import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((val) => {
    const arr_data = [];
    for (const i of val) {
      arr_data.push({ status: i.status, val: i.val || i.reason });
    }
    return arr_data;
  });
}
