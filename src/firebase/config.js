import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBCbUDYZJuRf4MTcVFpoCRDO4IEPEW3ARg",
    authDomain: "moria-bookstore.firebaseapp.com",
    projectId: "moria-bookstore",
    storageBucket: "moria-bookstore.appspot.com",
    messagingSenderId: "325518295547",
    appId: "1:325518295547:web:d6203fff8f906ed0ff4b5e"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const storage = firebase.storage();

export {firestore, storage};