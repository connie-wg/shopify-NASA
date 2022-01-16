// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import '@firebase/firestore';
import '@firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsroF6o05l3jt89KWYzlEOv5fLsVcNjh0",
  authDomain: "nasa-apod-web-app.firebaseapp.com",
  projectId: "nasa-apod-web-app",
  storageBucket: "nasa-apod-web-app.appspot.com",
  messagingSenderId: "459467056132",
  appId: "1:459467056132:web:6fbbb732e26ec49dd40151",
  measurementId: "G-CHK38N1CW2"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);