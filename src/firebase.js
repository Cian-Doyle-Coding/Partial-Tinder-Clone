import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvvRKFvaTMx39mcis0mPBBoHS0R8sxc-o",
  authDomain: "tinder-clone-ca5fd.firebaseapp.com",
  projectId: "tinder-clone-ca5fd",
  storageBucket: "tinder-clone-ca5fd.appspot.com",
  messagingSenderId: "144810931122",
  appId: "1:144810931122:web:e62cb626a0319095fdaaab",
  measurementId: "G-2G48GDTXKG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database