import firebase from "firebase/compat/app";
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWEdAuH23txTvSyQXs_Kq0lSLEu9ZYbgs",
  authDomain: "netflix-clone-55e8b.firebaseapp.com",
  projectId: "netflix-clone-55e8b",
  storageBucket: "netflix-clone-55e8b.appspot.com",
  messagingSenderId: "667256577267",
  appId: "1:667256577267:web:431a289311497f2e10ab86",
  measurementId: "G-WLS1RX68NB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore;