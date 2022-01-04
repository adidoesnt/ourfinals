import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCasGMc8QmJwpT0o73gLpAAOzAqZRN1izk",
  authDomain: "ourfinals-dev.firebaseapp.com",
  projectId: "ourfinals-dev",
  storageBucket: "ourfinals-dev.appspot.com",
  messagingSenderId: "400276746902",
  appId: "1:400276746902:web:46d1918225738018d548b7"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;