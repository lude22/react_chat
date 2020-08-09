import React, {Component} from 'react';
import './App.css';
import ButtonAppSearchBar from './components/ButtonAppSearchBar.js'
import InputField from './components/InputField.js'
import ChatList from './components/ChatList.js'

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
