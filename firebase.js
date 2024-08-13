// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs,deleteDoc ,doc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0fcTcXBSkjMOOdYmmuu_khpIi9YDwrCQ",
    authDomain: "farhan-a8488.firebaseapp.com",
    projectId: "farhan-a8488",
    storageBucket: "farhan-a8488.appspot.com",
    messagingSenderId: "991457659904",
    appId: "1:991457659904:web:5b744f84bc926ffa385ce5",
    measurementId: "G-1QM1X3JK17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {
    app,
    db,
    collection,
    addDoc,
    getDocs,
    deleteDoc ,
    doc
}

