var generateMessage = (from, text) => {
  return {
    from,
    text,
    time: new Date()
  };
};

module.exports = {generateMessage};