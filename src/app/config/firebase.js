import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA9d6Uyl0zWeMxQrrDQtAfiVENiczoaIQ4",
    authDomain: "fb-redux-react.firebaseapp.com",
    projectId: "fb-redux-react",
    storageBucket: "fb-redux-react.appspot.com",
    messagingSenderId: "352284629203",
    appId: "1:352284629203:web:f86cf545b22ad1fb03dc26"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;