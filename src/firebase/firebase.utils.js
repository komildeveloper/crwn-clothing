import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBXmSWjGjOj1h5cU0aU3cMDJZa6ryhXoSo',
  authDomain: 'crwn-clothing-19378.firebaseapp.com',
  projectId: 'crwn-clothing-19378',
  storageBucket: 'crwn-clothing-19378.appspot.com',
  messagingSenderId: '382802558407',
  appId: '1:382802558407:web:4b1d1653fe87de25966de2',
  measurementId: 'G-NH5FZKXQKT'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log(`error creating user ${err.message}`);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
