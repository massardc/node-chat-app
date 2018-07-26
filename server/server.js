const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const { generateMessage } = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected.');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined the channel.'));

  // io.emit('newServerMessage', {
  //   from: newMessage.from,
  //   text: newMessage.text,
  //   time: new Date()
  // });

  socket.on('createMessage', (newMessage, callback) => {
    console.log('createMessage', newMessage);

    io.emit(
      'newMessage', 
      generateMessage(newMessage.from, `${new Date()} - new message from ${newMessage.from}: ${newMessage.text}`)
    );

    callback('This is from the server.');
  });

  socket.on('disconnect', (s) => {
    console.log('Client disconnected.');
  });
});

server.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});