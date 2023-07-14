// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUAfsMXqMd4Eom-9zOfsRw2MaAPGrOQ-Q",
  authDomain: "rapidchat-10fe0.firebaseapp.com",
  projectId: "rapidchat-10fe0",
  storageBucket: "rapidchat-10fe0.appspot.com",
  messagingSenderId: "428405745473",
  appId: "1:428405745473:web:e9ce021c62031e6d9b23c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
