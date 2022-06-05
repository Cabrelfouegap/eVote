import  firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/database";
import "firebase/compat/auth";

 const firebaseConfig = {

    apiKey: "AIzaSyAxZx1PRE5noJ6Rq39N0W6JywnQBXYMa-8",
    authDomain: "vote-en-ligne-1b2ac.firebaseapp.com", 
    databaseURL: "https://vote-en-ligne-1b2ac-default-rtdb.firebaseio.com",
    projectId: "vote-en-ligne-1b2ac",
    storageBucket: "vote-en-ligne-1b2ac.appspot.com",
    messagingSenderId: "499548680595",
    appId: "1:499548680595:web:c2520ea5c92f396870b866",
    measurementId: "G-NNG95VHGYX" 
  };
  
  firebase.initializeApp(firebaseConfig); 
  const Firebase = firebase; 

export default Firebase; 
 