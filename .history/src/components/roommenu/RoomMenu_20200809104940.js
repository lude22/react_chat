import React, { Component } from 'react';
import ButtonAppSearchBar from './ButtonAppSearchBar.js'
import ChatList from './RoomList.js'

class RoomMenu extends Component{
    render(){
        return(
          <React.Fragment>
            <ButtonAppSearchBar />
            <div classname="ChatList">
              <ChatList />
            </div>
          </React.Fragment>
        )
      }
}

export default RoomMenu;