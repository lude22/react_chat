//---import js---
import React, {Component} from 'react';
import Room from './components/room/Room.js'
import { BrowserRouter, Route, Link } from 'react-router-dom';

//---import css---
import './App.css';

const App = () =>{
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path ="/" exact component={RoomList} />
          <Route path ="/Room" exact component={Room} />
        </div>
      </BrowserRouter>
    </div>
  )
}

// class App extends Component{
//   render(){
//     return(
//       <React.Fragment>
//         <Room />
//       </React.Fragment>
//     )
//   }
// }

export default App;
