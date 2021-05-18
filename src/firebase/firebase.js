import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAyH65QeLiUJOoFzpBIFmqvW_cbTOEQSSE",
    authDomain: "todo-a8de3.firebaseapp.com",
    projectId: "todo-a8de3",
    storageBucket: "todo-a8de3.appspot.com",
    messagingSenderId: "277499819418",
    appId: "1:277499819418:web:426838e8cc858e57757623",
    measurementId: "G-MYQ58QZR6E"
});

const db = firebase.firestore();
export default db;