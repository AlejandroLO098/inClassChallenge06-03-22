"use strict";
// Create a function that takes two dates and returns the number of days
// between the first and second date.
// first try can only subtract days, It doesnt take into account the year
let getDays = function (date1, date2) {
  return date2.getDate() - date1.getDate();
};

// Examples
console.log(
  getDays(
    new Date("June 14, 2019"),

    new Date("June 20, 2019")
  )
);

console.log(
  getDays(
    new Date("December 29, 2018"),

    new Date("January 1, 2019")
  )
);

console.log(
  getDays(
    new Date("July 20, 2019"),

    new Date("July 30, 2019")
  )
);
//➞ 10
console.log(new Date("July 30, 2019") - new Date("July 20, 2019"));
//BETTER SOlUTION below
let days = function (date1, date2) {
  let result = date2 - date1;
  return result / (1000 * 3600 * 24);
};

console.log(
  days(
    new Date("December 29, 2018"),

    new Date("January 1, 2019")
  )
);

console.log(
  days(
    new Date("June 14, 2019"),

    new Date("June 20, 2019")
  )
);

console.log(
  days(
    new Date("July 20, 2019"),

    new Date("July 30, 2019")
  )
);
