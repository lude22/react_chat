import React, { Component } from 'react';

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