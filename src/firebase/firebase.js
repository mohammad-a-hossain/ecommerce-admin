import * as firebase from 'firebase'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAAiUyt_fLuJaI-FnprmkmGD9RNtgDVKc",
  authDomain: "project-commerce-31645.firebaseapp.com",
  projectId: "project-commerce-31645",
  storageBucket: "project-commerce-31645.appspot.com",
  messagingSenderId: "985256024580",
  appId: "1:985256024580:web:a691c01f478d3b2659f351",
  measurementId: "G-94C5RS9RTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);