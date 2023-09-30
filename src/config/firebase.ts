// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_apiKey,
  authDomain: process.env.NEXT_PUBLIC_FB_authDomain,
  projectId: process.env.NEXT_PUBLIC_FB_projectId,
  storageBucket: process.env.NEXT_PUBLIC_FB_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FB_appId,
  measurementId: process.env.NEXT_PUBLIC_FB_measurementId,
};

console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);