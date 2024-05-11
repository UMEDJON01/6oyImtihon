// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAbGRZgjjJ0kGR8D6NfLXIfD31mrnX7TCs",
  authDomain: "kitchetapp.firebaseapp.com",
  projectId: "kitchetapp",
  storageBucket: "kitchetapp.appspot.com",
  messagingSenderId: "834268377633",
  appId: "1:834268377633:web:17a2902a3fab3ffd7f2960",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
