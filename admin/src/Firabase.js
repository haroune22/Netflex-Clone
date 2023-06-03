// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
//your firebase Keys  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app)

export default storage;
