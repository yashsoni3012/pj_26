// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getMessaging} from "firebase/messaging"

const firebaseConfig = {
    apiKey: "AIzaSyA1DvMUGM31daRodGQ1ZEgzNnuxRw-htLU",
    authDomain: "pj-ayurveda.firebaseapp.com",
    projectId: "pj-ayurveda",
    storageBucket: "pj-ayurveda.firebasestorage.app",
    messagingSenderId: "85578838465",
    appId: "1:85578838465:web:ab0093222e2ee550e73f40"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const messaging = getMessaging(app);
export default messaging;