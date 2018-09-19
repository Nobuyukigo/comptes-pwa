import * as firebase from 'firebase';

export async function saveUserInFirebase(user: firebase.User) {
  try {
    firebase
      .database()
      .ref(`/users/${user.uid}`)
      .set({
        avatar: user.photoURL,
        name: user.displayName
      });
  } catch (error) {
    console.error(error);
  }
}
