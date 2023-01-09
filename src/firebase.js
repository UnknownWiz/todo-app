// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_TODO_FBK,
  authDomain: process.env.REACT_APP_TODO_AD,
  projectId: process.env.REACT_APP_TODO_PID,
  storageBucket: process.env.REACT_APP_TODO_SB,
  messagingSenderId: process.env.REACT_APP_TODO_MSID,
  appId: process.env.REACT_APP_TODO_AID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
