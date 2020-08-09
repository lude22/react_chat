import React, {Component} from 'react';
import './App.css';
import Room from './components/room/Room.js'


class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Room />
      </React.Fragment>
    )
  }
}

export default App;
