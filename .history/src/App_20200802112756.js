import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import ButtonAppSearchBar from './components/ButtonAppSearchBar.js'
import InputField from './components/InputField.js'
import ChatList from './components/ChatList.js'

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <ButtonAppSearchBar />
        <InputField />
        <div classname="ChatList">
          <ChatList />
        </div>
      </React.Fragment>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
