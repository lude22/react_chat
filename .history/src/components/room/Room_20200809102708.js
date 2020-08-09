import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class Room extends Component{
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