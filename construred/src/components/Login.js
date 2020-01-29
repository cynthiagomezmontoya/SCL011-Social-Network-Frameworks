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
        <div style={{ textAlign:'center',
                      padding:100 }}>

       <div className="logo">
       
       <p> ConstruRed </p>
       
      <img
        src="https://img2.freepng.es/20181217/ewx/kisspng-construction-logo-limited-company-business-construction2-1646-free-construction-tools-l-5c1875de08db94.5944762415451069100363.jpg"
        alt="LOGO"
        border="0"
        width="250px"
        height="250px"
      ></img>
    
      </div>

        <div>
         <div>Email</div>
          <input id="email" placeholder="Ingrese Email.." type="text"/>
        </div>
        <div>
         <div>Password</div>
          <input  id="password" placeholder="Ingrese Password.." type="text"/>
        </div>
        <button style={{margin:"60px"}} onClick={ this.login}>Iniciar Sesion</button>
        <button style={{margin:"60px"}} onClick={ this.signUp}>Registrarse</button>
        </div>
     
      );
     
      }
     
     }

export default Login;
