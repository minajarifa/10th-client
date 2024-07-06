// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpTcSfKjpcwmF56ZsINtY9Q8FUulgBmVg",
  authDomain: "practice-9bde9.firebaseapp.com",
  projectId: "practice-9bde9",
  storageBucket: "practice-9bde9.appspot.com",
  messagingSenderId: "931550091491",
  appId: "1:931550091491:web:b4c4be8979b47ca1eecdd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;