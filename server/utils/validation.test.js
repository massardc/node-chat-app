const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non string values', () => {
    var answer = isRealString(true);
    expect(answer).toBeFalsy();

    answer = isRealString(123);
    expect(answer).toBeFalsy();
  });

  it('should reject strings with only spaces', () => {
    const answer = isRealString('      ');
    expect(answer).toBeFalsy();
  });

  it('should allow strings with non space characters', () => {
    var answer = isRealString('Test Value');
    expect(answer).toBeTruthy();

    answer = isRealString('  test ');
    expect(answer).toBeTruthy();
  });
})