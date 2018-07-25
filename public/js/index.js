var socket = io();

socket.on('connect', () => {
  console.log('Connected to server.');

  socket.emit('sendMessage', {
    from: "Clem",
    text: "Hey this is Clem, what's up?"
  });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server.');
});

socket.on('newMessage', (message) => {
  console.log(message);
  console.log(`${message.time} - new message from ${message.from}: ${message.text}`);
});