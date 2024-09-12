// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc7gVd-JlRJs8xj5PVi0ez-JI4103jo-0",
  authDomain: "projetodia15.firebaseapp.com",
  projectId: "projetodia15",
  storageBucket: "projetodia15.appspot.com",
  messagingSenderId: "662364492626",
  appId: "1:662364492626:web:69ceb3ce47ea9a4ab7e08b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)