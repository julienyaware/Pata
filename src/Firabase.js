// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firebase SDK for Cloud Firestore
import { getAuth } from "firebase/auth"; // Firebase SDK for Authentication
import { getStorage } from "firebase/storage";

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
// Initualize Firestore
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app)

export { db,auth,storage }