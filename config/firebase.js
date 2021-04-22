import  firebase from "firebase";

// import "firebase/firestore"

import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyD3xtpdPkqgilfQPs2hM92V-d7uZplogQA",
    authDomain: "boost-f0e58.firebaseapp.com",
    databaseURL: "https://boost-f0e58-default-rtdb.firebaseio.com",
    projectId: "boost-f0e58",
    storageBucket: "boost-f0e58.appspot.com",
    messagingSenderId: "464005157808",
    appId: "1:464005157808:web:18c1094e49cb05ecc57c75",
    measurementId: "G-DZE5HJYPYN"

}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export const firestore = Firebase.firestore()

export default Firebase