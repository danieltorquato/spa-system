/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4xG_amcBxikvZtD-iqBAXieXRBHM1Wv4",
  authDomain: "blacksheepsystem-a7f17.firebaseapp.com",
  projectId: "blacksheepsystem-a7f17",
  storageBucket: "blacksheepsystem-a7f17.appspot.com",
  messagingSenderId: "379870094184",
  appId: "1:379870094184:web:5d044c68f8415bc8346cdd",
  measurementId: "G-W8NPS503JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
// eslint-disable-next-line no-unused-vars
const db = getFirestore(app);

export {db};