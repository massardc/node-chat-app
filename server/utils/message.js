const moment = require('moment');

var generateMessage = (from, text) => {
  return {
    from,
    text,
    time: moment().valueOf()
  };
};

var generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://google.com/maps?q=${latitude},${longitude}`,
    time: moment().valueOf()
  }
};

module.exports = {
  generateMessage,
  generateLocationMessage
};