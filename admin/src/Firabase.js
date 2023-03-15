// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUapDMdlxP5R7xq3abk7wfw5OiYYg-Xuo",
  authDomain: "netflex-23375.firebaseapp.com",
  projectId: "netflex-23375",
  storageBucket: "netflex-23375.appspot.com",
  messagingSenderId: "1004123968150",
  appId: "1:1004123968150:web:882018f82f2b5f7f2268b7",
  measurementId: "G-23S0GDJEBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app)

export default storage;