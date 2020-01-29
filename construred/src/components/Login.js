import React from 'react';
import fire from '../server/fire';
import './Login.css';

class Login extends React.Component {

  login () {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
  
    fire.auth().signInWithEmailAndPassword(email, password)
    .then((u) => {
     console.log ("Sesion Activa");
    })
    .catch ((err) => {
     console.log("Error:" + err.toString());
     })
    }
  
  
  signUp () {
  
  const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
  
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then((u) => {
     console.log ("Registro Exitoso");
    })
    .catch ((err) => {
     console.log("Error:" + err.toString());
     })
    }


    render () {
      return (
       <div style={{ textAlign:'center'}}>
        <div>
         <div>Email</div>
          <input id="email" placeholder="Ingrese Email.." type="text"/>
        </div>
        <div>
         <div>Password</div>
          <input  id="password" placeholder="Ingrese Password.." type="text"/>
        </div>
        <button onClick={ this.login}>Ingresar</button>
        <button  onClick={ this.signUp}>Registrarse</button>
        </div>
     
      );
     
      }
     
     }

export default Login;
