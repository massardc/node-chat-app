var socket = io();

socket.on('connect', () => {
  socket.emit('roomsRequest');
});

socket.on('updateRoomList', (rooms) => {
  if (rooms.length > 0) {
    var list = '<datalist id="rooms">';
    rooms.forEach(roomName => {
      list += `<option>${roomName}</option>`;
    });
    list += '</datalist>';
    jQuery('#room-list').append(list);
  }
});