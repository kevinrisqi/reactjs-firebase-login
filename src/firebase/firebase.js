import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBiRYazMwY20wZwcz_2__O0T9ndb-QBmh0",
    authDomain: "reacts-js-dcd03.firebaseapp.com",
    databaseURL: "https://reacts-js-dcd03.firebaseio.com",
    projectId: "reacts-js-dcd03",
    storageBucket: "reacts-js-dcd03.appspot.com",
    messagingSenderId: "506204376723",
    appId: "1:506204376723:web:851dcff1b530c87cca0766",
    measurementId: "G-ZN945R31MV"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;