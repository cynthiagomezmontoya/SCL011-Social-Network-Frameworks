 import firebase from 'firebase';




const config = {
  apiKey: "AIzaSyBXwa9KhnIYvdB5hd7X6VONzKQkw3nUWWk",
  authDomain: "construred-3338e.firebaseapp.com",
  databaseURL: "https://construred-3338e.firebaseio.com",
  projectId: "construred-3338e",
  storageBucket: "construred-3338e.appspot.com",
  messagingSenderId: "1074859327936",
  };

  
  const fire= firebase.initializeApp(config);
  export default fire;