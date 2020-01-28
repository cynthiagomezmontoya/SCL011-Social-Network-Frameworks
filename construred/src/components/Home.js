import React from 'react';
import fire from '../server/fire'


class Home extends React.Component {

  logout () {
    fire.auth().signOut();

  }


render () {
 return (
  <div>
   <h1> Iniciar sesion </h1>
   <button onClick={this.logout}>Logout</button>
  </div>


 )
}
}

export default Home;

