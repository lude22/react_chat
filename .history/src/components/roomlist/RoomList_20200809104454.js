import React, { Component } from 'react';
import ButtonAppSearchBar from './ButtonAppSearchBar.js'
import ChatList from './ChatList.js'
import InputField from './InputField.js'

class RoomList extends Component{
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

export default Room;