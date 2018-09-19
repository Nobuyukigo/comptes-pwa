import * as firebase from 'firebase';
import { saveUserInFirebase } from './save-user-in-firebase';

export async function loginWithFacebook(token: string): Promise<void> {
  try {
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((user) => saveUserInFirebase(user));
  } catch {
    console.error('Could not connect to firebase using facebook credentials');
  }
}
