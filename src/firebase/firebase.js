import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUm6k-TmJL2PrdEgzsKB3QdpSk5PvVHOU",
    authDomain: "fir-login-7aa67.firebaseapp.com",
    databaseURL: "https://fir-login-7aa67.firebaseio.com",
    projectId: "fir-login-7aa67",
    storageBucket: "fir-login-7aa67.appspot.com",
    messagingSenderId: "1034079241165",
    appId: "1:1034079241165:web:f74dc01e08f82209497a84"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;   