import React, {Component} from 'react';
import './App.css';
import Room from './components/room/Room.js'

import './styles/ChatList.css'

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <ButtonAppSearchBar />
        <div classname="ChatList">
          <ChatList />
        </div>
        <InputField />
      </React.Fragment>
    )
  }
}

export default App;
