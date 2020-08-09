import React, { Component } from 'react';
import ButtonAppSearchBar from './ButtonAppSearchBar.js'
import RoomList from './RoomList.js'

class RoomMenu extends Component{
    render(){
        return(
          <React.Fragment>
            <ButtonAppSearchBar />
            <div classname="RoomList">
              <RoomList />
            </div>
          </React.Fragment>
        )
      }
}

export default RoomMenu;