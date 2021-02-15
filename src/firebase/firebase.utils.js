import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAV-jwJ6td-d6-9anfWIoBtXnBdF_gTGtw',
  authDomain: 'crwn-clothing-935f8.firebaseapp.com',
  projectId: 'crwn-clothing-935f8',
  storageBucket: 'crwn-clothing-935f8.appspot.com',
  messagingSenderId: '13690915827',
  appId: '1:13690915827:web:2cb2a1c741cfd3a3266086',
  measurementId: 'G-T77D7VY70N'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
