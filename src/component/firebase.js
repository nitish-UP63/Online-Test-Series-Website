// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbDWSNZsVLb9d5WM4vI8HRjiwK1kFL8Hg",
    authDomain: "test-series-4fade.firebaseapp.com",
    databaseURL: "https://test-series-4fade-default-rtdb.firebaseio.com",
    projectId: "test-series-4fade",
    storageBucket: "test-series-4fade.appspot.com",
    messagingSenderId: "331550785234",
    appId: "1:331550785234:web:0477585d2f41adee70b70b",
    measurementId: "G-0J11QPS1N9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore();
export default db;