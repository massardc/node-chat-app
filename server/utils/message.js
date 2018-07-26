var generateMessage = (from, text) => {
  return {
    from,
    text,
    time: new Date()
  };
};

var generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://google.com/maps?q=${latitude},${longitude}`,
    time: new Date()
  }
};

module.exports = {
  generateMessage,
  generateLocationMessage
};