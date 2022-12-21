// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKTMhpQ7I21vwPl_UCjwtNgh3SS3ZJaq4",
  authDomain: "wallet-app-28bdc.firebaseapp.com",
  projectId: "wallet-app-28bdc",
  storageBucket: "wallet-app-28bdc.appspot.com",
  messagingSenderId: "138711656737",
  appId: "1:138711656737:web:603102abecf38cca457660",
  measurementId: "G-WM57YZ05HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
// const analytics = getAnalytics(app);
export default auth