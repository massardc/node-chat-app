const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct object message', () => {
    const from = "Clem";
    const text = "Hey what's up?";
    const message = generateMessage(from, text);
    expect(message).toMatchObject({from, text});
    expect(typeof message.time).toBe('number');
  })
});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    const from = 'Clem Location';
    const latitude = 12;
    const longitude = 16;
    const url = 'https://google.com/maps?q=12,16';
    const message = generateLocationMessage(from, latitude, longitude);
    
    expect(message).toMatchObject({from, url});
    expect(typeof message.time).toBe('number');
  })
})