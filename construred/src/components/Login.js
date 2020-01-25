import React from 'react';
import 'firebaseui/dist/firebaseui.css';
import Firebase from '../server/Firebase';


class Login extends React.Component {
    state = {
     autenticado:false,
     usuario:"",
     firebase:null
  
  }
  
  componentDidMount(){
    const firebase= new Firebase();

    firebase.auth().onAuthStateChanged(authuser => {

     authuser
     ? this.setState ({
         autenticado : true,
         usuario: firebase.auth.correntuser.email,
         firebase : firebase
    })
    :firebase.firebaseui.start("#firebaseui-auth-container"),{
       singInSuccessUrl : "/",
       credentialHelper:"none",
       callbacks:{
         signInsuccessWithAuthResult: (authResult, redirectUrl) =>{

      this.setState({
          autenticado: true,
          usuario: firebase.auth.correntUser.email,
          firebase : firebase
   })

     return false;

   }

  },
   signInOptions:[
   {
    provider : firebase.autorization.EmailAuthProvider.PROVIDER_ID
   }
 ]

}

})

}

render (){
  return this.state.autenticado
  ? (
   <React.Fragment>
     <div> UsuarioLogeado {this.state.usuario}</div>
     <a href="#" onClick={() =>{ this.state.firebase.auth.signOut().them(success=>{
           this.setState({
               autenticado:false
                }) 
              })
           }
        }>Salir</a>

    </React.Fragment>

)
:<div id="firebaseui-auth-container"></div>
}


}

export default Login;