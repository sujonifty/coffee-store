// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChbOQVkKudJpbH-LVLH-pe5jUrR-tiAjM",
  authDomain: "coffee-store-9ce9e.firebaseapp.com",
  projectId: "coffee-store-9ce9e",
  storageBucket: "coffee-store-9ce9e.appspot.com",
  messagingSenderId: "1092957935088",
  appId: "1:1092957935088:web:21e2921c6cbc9962acb935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth; 