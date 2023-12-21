// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDcY8XAZJr4qhff0fqGc1i8ckMgPtFP-0",
  authDomain: "task-managmenet.firebaseapp.com",
  projectId: "task-managmenet",
  storageBucket: "task-managmenet.appspot.com",
  messagingSenderId: "904980904988",
  appId: "1:904980904988:web:64ecbf97e253bf9f2d73d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;