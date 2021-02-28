import React, { Component } from 'react';
import socketio from 'socket.io-client';
import ChatForm from './components/ChatForm';
import './App.css';
// import './styles/ChatList.css';
// import ButtonAppSearchBar from './components/ButtonAppSearchBar.js';
// import InputField from './components/InputField.js';
// import ChatList from './components/ChatList.js';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <ButtonAppSearchBar />
//         <div className="ChatList">
//           <ChatList />
//         </div>
//         <InputField />
//       </React.Fragment>
//     );
//   }
// }

const socket = socketio.connect('https://reactchat-c4cae.web.app/');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
    };
  }

  componentDidMount() {
    socket.on('chatMessage', (obj) => {
      const logs2 = this.state.logs;

      obj.key = 'key_' + (this.state.log.length + 1);

      console.log(obj);

      logs2.unshift(obj);

      this.setState({ logs: logs2 });
    });
  }

  render() {
    const messages = this.state.logs.map((e) => (
      <div key={e.key}>
        <span>{e.name}</span>
        <span>:{e.messages}</span>
        <p />
      </div>
    ));

    return (
      <div>
        <h1 id="title">Reactチャット</h1>
        <ChatForm />
        <div id="log">{messages}</div>
      </div>
    );
  }
}

export default App;
