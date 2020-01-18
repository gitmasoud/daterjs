//my module
const formats  = require('daterjs');

//my date
var dateToday = '2019:29:12';
var dateToday2 = '2019:12:29';

//usage
console.log(formats.getTodaysDate());
console.log(formats.formatUK(dateToday));
console.log(formats.formatUS(dateToday));
console.log(formats.formatDayDateYearTimeFormatter1(dateToday));
console.log(formats.formatDayDateYearTimeFormatter2(dateToday2));