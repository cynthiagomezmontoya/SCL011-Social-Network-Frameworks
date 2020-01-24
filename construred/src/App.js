import React,{Component} from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {
  constructor (){
  super();
  this.state={
   user: null
 };

this.handleAuth=this.handleAuth.bind(this);
this.handleLogout=this.handleLogout.bind(this);
this.renderLoginButton=this.renderLoginButton.bind(this);

}

componentWillMount(){
  firebase.auth().onAuthStateChanged(user => {
   this.setState ({user});
});
}
handleAuth() {
 const provider = new firebase.auth.GoogleAuthProvider()

 firebase.auth().signInWithPopup(provider)
  .then(result => console.log("{result.user.email} ha iniciado sesion"))
  .catch(error => console.log("Error{error.code}:{error.mensaje}"));

}


handleLogout(){
firebase.auth().signOut()
 .then(result => console.log("{result.user.email} ha finalizado su sesion"))
  .catch(error => console.log("Error{error.code}:{error.mensaje}"));

}


renderLoginButton(){

if (this.state.user){
return(
<div>
<img src={this.state.user.photoUrl} alt={this.state.user.displayName} />
<p> Hola {this.state.user.displayName}</p>
<button onClick={this.handleLogout}>cerrar sesion</button>
</div>
);
} else {
return(
<button onClick={this.handleAuth}>Login con Google</button>
);
}

}

render(){

return (
  <div className="App">
    <header className="App-header">
       
      <p> ConstruRed</p>
      { this.renderLoginButton()}
    
    </header>
  </div>
);
}
}
export default App;
