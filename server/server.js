const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected.');

  socket.on('sendMessage', (newMessage) => {
    console.log(`${new Date()} - New Message from ${newMessage.from}`);

    socket.emit('newMessage', {
      from: newMessage.from,
      text: newMessage.text,
      time: new Date()
    });
  });

  socket.on('disconnect', (s) => {
    console.log('Client disconnected.');
  });
});

server.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});