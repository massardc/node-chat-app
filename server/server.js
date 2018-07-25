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

  socket.emit('newEmail', {
    from: "jen@example.com",
    to: "clem@clem.com",
    text: "Hey, what's going on?"
  });

  socket.on('createEmail', (newEmail) => {
    console.log('Create email', newEmail);
  });

  socket.on('disconnect', (s) => {
    console.log('Client disconnected.');
  });
});

server.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});