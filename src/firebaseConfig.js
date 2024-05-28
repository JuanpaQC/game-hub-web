// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
