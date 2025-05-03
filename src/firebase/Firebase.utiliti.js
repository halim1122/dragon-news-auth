// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPqLaDJ-_DKj0dJgtnQpH35HLM-S7CAaA",
  authDomain: "dragon-news-auth-7e26a.firebaseapp.com",
  projectId: "dragon-news-auth-7e26a",
  storageBucket: "dragon-news-auth-7e26a.firebasestorage.app",
  messagingSenderId: "15405345479",
  appId: "1:15405345479:web:e38f99a3d7da904985ece2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);