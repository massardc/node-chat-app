var socket = io();

var scrollToBottom = () => {
  // Selectors
  const messages = jQuery('#messages');
  const newMessage = messages.children('li:last-child');
  // Heights
  const clientHeight = messages.prop('clientHeight');
  const scrollTop = messages.prop('scrollTop');
  const scrollHeight = messages.prop('scrollHeight');
  const newMessageHeight = newMessage.innerHeight();

  if (clientHeight + scrollTop + newMessageHeight >= scrollHeight) {
    messages.scrollTop(scrollHeight);
  }

};

socket.on('connect', () => {
  console.log('Connected to server.');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server.');
});

socket.on('newMessage', (message) => {
  const formattedTime = moment(message.time).format("h:mm a");

  const template = jQuery('#message-template').html();
  const html = Mustache.render(template, {
    text: message.text,
    from: message.from,
    time: formattedTime
  });

  jQuery('#messages').append(html);
  scrollToBottom();
});

socket.on('newLocationMessage', (message) => {
  const formattedTime = moment(message.time).format("h:mm a");

  const template = jQuery('#location-message-template').html();
  const html = Mustache.render(template, {
    from: message.from,
    url: message.url,
    time: formattedTime
  });

  jQuery('#messages').append(html);
  scrollToBottom();
});

jQuery('#message-form').on('submit', (e) => {
  e.preventDefault();

  var messageTextbox = jQuery('[name=message]');

  socket.emit('createMessage', {
    from: 'User',
    text: messageTextbox.val()
  }, () => {
    messageTextbox.val('');
  });
})

var locationButton = jQuery('#send-location');

locationButton.on('click', () => {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser.');
  }

  locationButton.attr('disabled', 'disabled').text('Sending location...');

  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    locationButton.removeAttr('disabled').text('Send location');
  }, () => {
    alert('Unable to fetch location.');
    locationButton.removeAttr('disabled').text('Send location');
  });
});
