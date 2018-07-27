const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

const dateMoment = moment();
console.log(dateMoment);
console.log(dateMoment.format());
console.log(dateMoment.format('MMM Do YYYY'));

const dateTest = moment("2017-07-27 10:21");
console.log(dateTest.format());
console.log(dateTest.format('h:mm a'));

const dateTest2 = moment("2017-07-27 06:01");
console.log(dateTest2.format());
console.log(dateTest2.format('h:mm a'));