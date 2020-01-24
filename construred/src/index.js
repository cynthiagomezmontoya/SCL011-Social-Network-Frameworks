import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';



firebase.initializeApp({
    apiKey: "AIzaSyCt7KrPsSQ93-yqxwizWVL6J49te9NEWTQ",
    authDomain: "construred-e6cfb.firebaseapp.com",
    databaseURL: "https://construred-e6cfb.firebaseio.com",
    storageBucket: "construred-e6cfb.appspot.com",
    messagingSenderId: "360839152782",
    
  });

ReactDOM.render(
<App />, 
document.getElementById('root')
);

