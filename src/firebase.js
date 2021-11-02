import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB6m8-ZDLbEnCd4IpI9RIlrNCN_5_Ft9vI",
    authDomain: "login-schedule-manager.firebaseapp.com",
    projectId: "login-schedule-manager",
    storageBucket: "login-schedule-manager.appspot.com",
    messagingSenderId: "473628734616",
    appId: "1:473628734616:web:2ccfa68f98aee22f944ced",
    measurementId: "G-5JT9QWQB10"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth}

