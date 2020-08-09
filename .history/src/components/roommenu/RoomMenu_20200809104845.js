import React, { Component } from 'react';
import ButtonAppSearchBar from './ButtonAppSearchBar.js'
import ChatList from './ChatList.js'

class RoomList extends Component{
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

export default RoomList;