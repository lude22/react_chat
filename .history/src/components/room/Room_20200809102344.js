import React, {Component} from 'react'
import ButtonAppSearchBar from './ButtonAppSearchBar.js'
import InputField from '.InputField.js'
import ChatList from './ChatList.js'

Class Room extends Component{
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