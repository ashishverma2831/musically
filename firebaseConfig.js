// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlpGXyEn1fm1YXFTMKlooUCLAGI5uDpgI",
  authDomain: "musically-3cc00.firebaseapp.com",
  projectId: "musically-3cc00",
  storageBucket: "musically-3cc00.appspot.com",
  messagingSenderId: "523801464025",
  appId: "1:523801464025:web:fdea1e45585de3270242c8",
  measurementId: "G-6TE9PEWJ30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;