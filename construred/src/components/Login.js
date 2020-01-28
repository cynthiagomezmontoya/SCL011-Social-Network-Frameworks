import React from 'react';
import fire from '../server/fire';




class Login extends React.Component {

  login () {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
  
    fire.auth().signInWithEmailAndPassword(email, password)
    .then((u) => {
     console.log ("Successfully Logget in");
    })
    .cath ((err) => {
     console.log("Error:" + err.tostring());
     })
    }
  
  
  signUp () {
  
  const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
  
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then((u) => {
     console.log ("Successfully Signed up");
    })
    .cath ((err) => {
     console.log("Error:" + err.tostring());
     })
    }




render () {
 return (
  <div style={{ textAlign:'center'}}>
   <div>
    <div> Email </div>
     <input id="email" placeholder="Enter Email.." type="text" />
   </div>
    <div> Password </div>
     <input id="password" placeholder="Enter Password.." type="text" />
   
   < button style = {{ margin:'10px'}} onClick={ this.login}>Login</button>
   < button style = {{ margin:'10px'}} onClick={ this.signUp}>Sign Up</button>
   </div>

 );

 }

}

export default Login;
