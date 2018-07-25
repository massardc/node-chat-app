var socket = io();

socket.on('connect', () => {
  console.log('Connected to server.');

  socket.emit('createEmail', {
    to: "jen@example.com",
    text: "This is an email from the client."
  });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server.');
});

socket.on('newEmail', (email) => {
  console.log("New email", email);
});