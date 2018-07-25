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

  socket.emit('newMessage', {
    from: "Admin",
    text: "Welcome to the chat app",
  });

  socket.broadcast.emit('newMessage', {
    from: "Admin",
    text: `New user joined the channel.`,
    time: new Date()
  })

  // io.emit('newServerMessage', {
  //   from: newMessage.from,
  //   text: newMessage.text,
  //   time: new Date()
  // });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);

    socket.broadcast.emit('newMessage', {
      from: newMessage.from,
      text: `${new Date()} - new message from ${newMessage.from}: ${newMessage.text}`,
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