/* eslint-disable no-undef */
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');

const portNumber = process.env.PORT || 7000;

app.use(
  '/public',
  express.static(path.normalize(path.resolve(__dirname, '..\\public')))
);

app.get('/', (req, res) => {
  // res.redirect(302, '/public');
  res.sendFile(
    path.normalize(path.resolve(__dirname, '..\\public\\index.html'))
  );
});

io.on('connection', (socket) => {
  // console.log('Access to User:', socket.cilient.id);
  console.log('Accessed');
  socket.on('chatMessage', (msg) => {
    console.log('message', msg);
    io.emit('chatMessage', msg);
  });
});

server.listen(portNumber, () => {
  console.log('LISTEN PORT:' + portNumber);
  console.log('DIRNAME:' + __dirname);
});
