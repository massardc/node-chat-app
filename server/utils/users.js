[{
  
}]

class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room) {
    const user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    const user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }
  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }
  getUserList(room) {
    const users = this.users.filter((user) => user.room === room);
    const namesArray = users.map((user) => user.name);

    return namesArray;
  }
  getRoomList() {
    var rooms = [];
    this.users.forEach(user => {
      if (rooms.indexOf(user.room) === -1) {
        rooms.push(user.room);
      }
    });
    return rooms;
  }
}

// var me = new Person('Clem', 44);

module.exports = {Users};