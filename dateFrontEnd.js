//my module
const formats  = require('daterjs');

//my dates
var date1 = '2019:29:12';
var date2 = '2019:12:29';
var date3 = '29:12:2019';
var date4 = '12:29:2020';
var ukDate = '12/29/2020';

//usage
console.log(formats.getTodaysDate());
console.log('\x1b[36m%s\x1b[0m',formats.getTodaysDateUK(ukDate));
console.log(formats.formatUK(date1));
console.log(formats.formatUS(date1));
console.log(formats.formatDayDateYearTimeFormatter1(date1));
console.log(formats.formatDayDateYearTimeFormatter2(date2));
