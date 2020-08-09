//---import js---
import React, {Component} from 'react';
import Room from './components/room/Room.js'
//---import css---
import './App.css';


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
