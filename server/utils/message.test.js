const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct object message', () => {
    const from = "Clem";
    const text = "Hey what's up?";
    const message = generateMessage(from, text);
    expect(message).toMatchObject({from, text});
    expect(typeof message.time.getTime()).toBe('number');
  })
});