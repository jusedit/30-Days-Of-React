/*
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let score = 50;
let grade = "";
if (score >= 80) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else {
  grade = "F";
}
console.log(grade);
/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
const Autumn = ["September", "October", "November"];
const Winter = ["December", "January", "February"];
const Spring = ["March", "April", "May"];
const Summer = ["June", "July", "August"];

let input = "September"; // prompt("Enter a month:");
if (Autumn.includes(input)) {
  console.log("Autumn");
} else if (Winter.includes(input)) {
  console.log("Winter");
} else if (Spring.includes(input)) {
  console.log("Spring");
} else if (Summer.includes(input)) {
  console.log("Summer");
}
/*
Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/
const daysOfWeek = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
let inputDay = "saturDaY"; // prompt("What is the day today?");
let index = daysOfWeek.indexOf(inputDay.toLowerCase());
let day =
  daysOfWeek[index].charAt(0).toUpperCase() + daysOfWeek[index].slice(1);
console.log(day + (index < 5 ? " is a working day." : " is a weekend."));
