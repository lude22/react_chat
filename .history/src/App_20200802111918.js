import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import ButtonAppSearchBar from './components/ButtonAppSearchBar'
import InputField from './components/InputField'
import ChatList from './components/ChatList'

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <ButtonAppSearchBar />
        <InputField />

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
