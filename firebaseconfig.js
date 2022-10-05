import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBTNl9JG58EHAIfZdCpBOtOZYNlY1NiZqg",
    authDomain: "portfolio-322.firebaseapp.com",
    projectId: "portfolio-322",
    storageBucket: "portfolio-322.appspot.com",
    messagingSenderId: "1071219683867",
    appId: "1:1071219683867:web:4274fdfe8d972edc953ebe",
    measurementId: "G-8RXNSCHCB3"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);