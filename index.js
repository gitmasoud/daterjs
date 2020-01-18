//Name: dateRjs
//Author: S Masoud

//Get todays date
//by default will give you US date format
//to change add your country code like so 
//ref: date.toLocaleDateString();
exports.getTodaysDate = function() {
  var date = new Date();
  return date.toLocaleDateString();
}

//format to US date
//needs further work
exports.formatUS = function(date) {
  var d = date;
  var year = d.slice(0,4);
  var d2 = d.slice(5,7);
  var d3 = d.slice(8,10);

  return year + '/' + d2 + '/' + d3;
}
//format to UK date
exports.formatUK = function(date) {
  var d = date;
  var year = d.slice(0,4);
  var d2 = d.slice(5,7);
  var d3 = d.slice(8,10);

  return d3 + '/' + d2 + '/' + year;
}

exports.formatDayDateYearTimeFormatter1 = function(date) {
  //help data and variables
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  var days = ["Monday","Tuesday","Wednesday","Thursday","Friday", "Thursday", "Saturday", "Sunday"]
  var years, yearx = 2020;
  var d = date;
  var formattedDates = [];
  //Returned format: Monday January 2020
  //any date given give it a full date and time return day month and year
  //e.g. this is give: 2019:29:12
  //get month
  var month = d.slice(8,10); // 12
  //get day
  var day = d.slice(5,7); // 29
  //get year
  var year = d.slice(8,10); // 29
  var fullDate = ''
  if(year == 2020)
      yearx = year + 1;
      yearx.toString();
  if(month == 12 && day == 29)
      month =  days[1] + ' ' + monthNames[11] + ' ' + yearx;

  //push first format into array
  formattedDates.push(month)

  return(formattedDates[0]);
  //from the front end just choose which format you want via index
}


exports.formatDayDateYearTimeFormatter2 = function(date) {
  //help data and variables
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  var days = ["Monday","Tuesday","Wednesday","Thursday","Friday", "Thursday", "Saturday", "Sunday"]
  var years, yearx = 2020;
  var d = date;
  var formattedDates2 = [];
  //Returned format: Monday January 2020
  //any date given give it a full date and time return day month and year
  //e.g. this is give: 2019:29:12
  //get month
  var month = d.slice(8,10); // 12
  //get day
  var day = d.slice(5,7); // 29
  //get year
  var year = d.slice(8,10); // 29
  var fullDate = ''
  if(year == 2020)
      yearx = year + 1;
      yearx.toString();
  if(month == 12 && day == 29)
      month =  monthNames[11] + ' ' + yearx;

  //push first format into array
  formattedDates2.push(month)

  return(formattedDates2[0]);
  //from the front end just choose which format you want via index
}