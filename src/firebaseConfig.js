// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK9DwWk8EIhtvuUbOvlGlyFcEkr9rwe7s",
  authDomain: "multicoregames-4fd53.firebaseapp.com",
  projectId: "multicoregames-4fd53",
  storageBucket: "multicoregames-4fd53.appspot.com",
  messagingSenderId: "679201081383",
  appId: "1:679201081383:web:ffa902c7fbfa3acd07a602",
  measurementId: "G-HDEV8TEKD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);