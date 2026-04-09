// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY_FIREBASE,
  authDomain: "requirements-mts.firebaseapp.com",
  projectId: "requirements-mts",
  storageBucket: "requirements-mts.firebasestorage.app",
  messagingSenderId: "585844720960",
  appId: import.meta.env.APP_ID,
  measurementId: "G-BLBWG6XBZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);