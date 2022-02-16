import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyALN5IUqYoEKUoAbm777ZB2pj7moQUYALU",
    authDomain: "inquire-be2a7.firebaseapp.com",
    projectId: "inquire-be2a7",
    storageBucket: "inquire-be2a7.appspot.com",
    messagingSenderId: "1007064048944",
    appId: "1:1007064048944:web:f610e24505f0da5aa8d4f5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
