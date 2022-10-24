// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjRQYAJPYy7P-2HZCqe1mGQVyaXDYHUDI",
    authDomain: "thryvi-authentication.firebaseapp.com",
    projectId: "thryvi-authentication",
    storageBucket: "thryvi-authentication.appspot.com",
    messagingSenderId: "248674660952",
    appId: "1:248674660952:web:b08a20b6cb5dd06e8e102d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);