// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnS3iPNRlSuGvaa5KoLxfqt-_OrJFFPa8",
  authDomain: "uth12-2d145.firebaseapp.com",
  projectId: "uth12-2d145",
  storageBucket: "uth12-2d145.appspot.com",
  messagingSenderId: "691516095089",
  appId: "1:691516095089:web:c72539f6525567ae4b39d0",
  measurementId: "G-ZTCMQ1S5B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);