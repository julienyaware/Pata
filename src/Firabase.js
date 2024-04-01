// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASOIHea4rCYWt1GXEQroJOHY_C38IQuQ4",
  authDomain: "nipate-9e53c.firebaseapp.com",
  projectId: "nipate-9e53c",
  storageBucket: "nipate-9e53c.appspot.com",
  messagingSenderId: "1051788380073",
  appId: "1:1051788380073:web:aaf3c1896f1a805e2266b8",
  measurementId: "G-GYKDP9LM6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }