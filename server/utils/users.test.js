const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Mike',
      room: 'Los Angeles'
    },{
      id: 2,
      name: 'Jenny',
      room: 'Seoul'
    },{
      id: 3,
      name: 'Areum',
      room: 'Los Angeles'
    }];
  });

  
  // addUser
  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Clem',
      room: 'Room 304'
    };
    const responseUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });


  // removeUser
  it('should remove a user', () => {
    const userId = 3;
    const user = users.removeUser(userId);

    expect(user.id).toEqual(userId);
    expect(users.users.length).toEqual(2);
  });

  it('should not remove a user', () => {
    const userId = 4;
    const user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toEqual(3);
  });


  // getUser
  it('should find user', () => {
    const user = users.getUser(3);
    expect(user).toEqual({
      id: 3,
      name: 'Areum',
      room: 'Los Angeles'
    });
  });

  it('should not find user', () => {
    const user = users.getUser(4);
    expect(user).toBeFalsy();
  });


  // getUserList
  it('should return names for Los Angeles room', () => {
    const userList = users.getUserList('Los Angeles');

    expect(userList).toEqual(['Mike', 'Areum']);
  });

  it('should return names for Seoul room', () => {
    const userList = users.getUserList('Seoul');

    expect(userList).toEqual(['Jenny']);
  });
})