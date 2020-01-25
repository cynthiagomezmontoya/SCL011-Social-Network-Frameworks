import app from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';


const firebaseConfig = {
    apiKey: "AIzaSyCt7KrPsSQ93-yqxwizWVL6J49te9NEWTQ",
    authDomain: "construred-e6cfb.firebaseapp.com",
    databaseURL: "https://construred-e6cfb.firebaseio.com",
    projectId: "construred-e6cfb",
    storageBucket: "construred-e6cfb.appspot.com",
    messagingSenderId: "360839152782",
    appId: "1:360839152782:web:cb0b884deae241fb41f5df",
    measurementId: "G-NH5W04Z0JE"
  };

  class Firebase {
    constructor (){
        app.initializeApp(firebaseConfig);
        this.auth = app.auth;
        this.autorization = app.auth;
        this.firebaseui = new firebaseui.auth.authUI(app.auth());
    }


  }

  export default Firebase;