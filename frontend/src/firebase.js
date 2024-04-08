// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-e60f2.firebaseapp.com",
  projectId: "realestate-e60f2",
  storageBucket: "realestate-e60f2.appspot.com",
  messagingSenderId: "466118934517",
  appId: "1:466118934517:web:3cc2de10082bc564b3aabc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);