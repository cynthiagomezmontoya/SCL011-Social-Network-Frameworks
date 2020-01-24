import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';



firebase.initializeApp({
apiKey: "AIzaSyDRj__4Ty1hwTj3rg1aTltsE1OjC6z2ckk",
    authDomain: "construred-d2c22.firebaseapp.com",
    databaseURL: "https://construred-d2c22.firebaseio.com",
    storageBucket: "construred-d2c22.appspot.com",
    messagingSenderId: "145471676980",
    
  });

ReactDOM.render(
<App />, 
document.getElementById('root')
);

