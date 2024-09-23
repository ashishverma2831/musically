// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZua-GIR280A1r-mH79L9nk5YVu5ddWtc",
  authDomain: "learning-react-native-87149.firebaseapp.com",
  projectId: "learning-react-native-87149",
  storageBucket: "learning-react-native-87149.appspot.com",
  messagingSenderId: "999471677103",
  appId: "1:999471677103:web:4168900c2300e0a155de5a",
  measurementId: "G-5SXC5EH96C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;