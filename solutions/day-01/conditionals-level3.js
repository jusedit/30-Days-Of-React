/*
Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
  */
let daysInMonth = {
  january: 31,
  february: 28,
  march: 31,
  april: 30,
  may: 31,
  june: 30,
  july: 31,
  august: 31,
  september: 30,
  october: 31,
  november: 30,
  december: 31,
};
let monthName = "febrUary".toLowerCase(); //prompt("Enter a month:").toLowerCase();
console.log(
  monthName.charAt(0).toUpperCase() +
    monthName.slice(1) +
    " has " +
    daysInMonth[monthName].toString() +
    " days."
);

// Write a program which tells the number of days in a month, now consider leap year.
let year = parseInt("2024"); //parseInt(prompt("Enter a year:"));
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
daysInMonth = {
  january: 31,
  february: isLeapYear(year) ? 29 : 28,
  march: 31,
  april: 30,
  may: 31,
  june: 30,
  july: 31,
  august: 31,
  september: 30,
  october: 31,
  november: 30,
  december: 31,
};
console.log(
  "In " +
    year.toString() +
    ", " +
    monthName.charAt(0).toUpperCase() +
    monthName.slice(1) +
    " has " +
    daysInMonth[monthName].toString() +
    " days."
);
